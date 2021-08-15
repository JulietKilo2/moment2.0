import React, { useState, useEffect } from "react";
import "./App.css";
import Clock from "./components/clock/Clock";
import DisplayName from "./components/displayname/DisplayName";
import DisplayQuote from "./components/displayQuote/DisplayQuote";
import DisplayWeather from "./components/displayweather/DisplayWeather";
import Settings from "./components/settings/Settings";
import dotenv from "dotenv";
dotenv.config();

function App() {
  const [userInfo, setUserInfo] = useState("John Doe");
  const [weatherInfo, setWeatherInfo] = useState("");
  const [photoUrl, setPhotoUrl] = useState(null);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_PHOTO_API_KEY;
    // Get a random number (for random page & id of pic)
    const rand = Math.floor(Math.random() * 10);
    // Url for request
    const url = `https://api.unsplash.com/search/photos?page=${rand}&query=nature&client_id=${apiKey}`;
    // Send network request
    fetch(url)
      .then((data) => data.json())
      .then((data) => setPhotoUrl(data.results[rand].urls.full));
  }, []);

  useEffect(() => {
    // Get user geolocation
    const getGeolocation = () => {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    };

    getGeolocation()
      .then((success) => {
        // Transfer user geolocation info to getWeather function
        getWeather(success.coords.latitude, success.coords.longitude);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getWeather = (lat, lon) => {
    // Get weather data based on user geolocation
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        setWeatherInfo({ temp: data.main.temp, location: data.name })
      )
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <div
        className="container"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${photoUrl})`,
        }}
      >
        <div className="weather-container">
          <DisplayWeather weatherInfo={weatherInfo} />
        </div>
        <div className="clock-container">
          <Clock />
        </div>
        {/* <div className="userinfo-container">
          <DisplayName userInfo={userInfo} />
        </div> */}
        <div className="quote-container">
          <DisplayQuote />
        </div>
        {/* <div className="settings-container">
          <Settings />
        </div> */}
      </div>
    </div>
  );
}

export default App;
