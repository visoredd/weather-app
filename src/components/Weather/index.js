import React from "react";
import { WeatherIcons, WeatherInfoIcons } from "../../utils/utils";
import styles from './Weather.module.scss'

const WeatherInfoComponent = (props) => {
    const {name, value} = props;
    return (
        <div className={styles.infoContainer}>
            <img className={styles.icon} alt="icon" src={WeatherInfoIcons[name]}/>
            <span className={styles.infoLabel}>
                {value}
                <span>{name}</span>
            </span>
        </div>
    );
};
const Weather = (props) => {
    const {weather} = props;
    const isDay = weather?.weather[0].icon?.includes('d')
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }
    return (
        <>
            <div className={styles.container}>
                <span className={styles.condition}>
                    <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
                    {`  |  ${weather?.weather[0].description}`}
                </span>
                <img className={styles.weatherIcon} alt="weather-icon" src={WeatherIcons[weather?.weather[0].icon]}/>
            </div>
            <span className={styles.location}>{`${weather?.name}, ${weather?.sys?.country}`}</span>

            <span className={styles.label}>Weather Info</span>
            <div className={styles.weatherContainer}>
                <WeatherInfoComponent name={isDay ? "sunset" : "sunrise"}
                                      value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}/>
                <WeatherInfoComponent name={"humidity"} value={weather?.main?.humidity}/>
                <WeatherInfoComponent name={"wind"} value={weather?.wind?.speed}/>
                <WeatherInfoComponent name={"pressure"} value={weather?.main?.pressure}/>
            </div>
            <button className={styles.newSearch} onClick={props.reset}>New Search</button>
        </>
    );
};

export default Weather;
