import React from "react";
import "./display-weather.scss";

export default function DisplayWeather({ weatherInfo }) {
  return (
    <div className="weather-container">
      <div className="location">
        <p>{weatherInfo && weatherInfo.location}</p>
      </div>
      <div className="weather">{weatherInfo && `${weatherInfo.temp}°C`}</div>
    </div>
  );
}
