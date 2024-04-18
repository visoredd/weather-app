
import React from "react";
import styles from './City.module.scss';

const City = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    <>
      <img className={styles.logo} alt="logo" src={"/icons/perfect-day.svg"} />
      <h2>Find Weather of your city</h2>
      <form className={styles.searchBox} onSubmit={fetchWeather}>
        <input
          onChange={(e) => updateCity(e.target.value)}
          placeholder="City"
        />
        <button type={"submit"}>Search</button>
      </form>
      <span className={styles.error}> {props?.error}</span>
    </>
  );
};
export default City;
