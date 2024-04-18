import { useState } from "react";
import Weather from "./components/Weather";
import City from "./components/City";
import "./App.scss";

function App() {
  const [city, updateCity] = useState();
  const [error, setError] = useState("");
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    setError("")
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=26323c9b05f9b51cbb01a89b91a61649`
      );
      const data = await response.json();
      if(data?.cod===200){
        updateWeather(data);
      }else{
        setError(data?.message || "city not found")
      }
    } catch (e) {
      setError("city not found")
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h2>React Weather App</h2>
        {city && weather ? (
          <Weather weather={weather} city={city} reset={()=>{
            updateCity()
            updateWeather()
          }}/>
        ) : (
          <City updateCity={updateCity} fetchWeather={fetchWeather} error={error} />
        )}
      </div>
    </div>
  );
}

export default App;
