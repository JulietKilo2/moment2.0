import React, { useState } from "react";
import "./App.css";
import Clock from "./components/clock/Clock";
import DisplayName from "./components/displayname/DisplayName";
import DisplayQuote from "./components/displayQuote/DisplayQuote";
import DisplayWeather from "./components/displayweather/DisplayWeather";
import Settings from "./components/settings/Settings";

function App() {
  const [userInfo, setUserInfo] = useState("John Doe");
  return (
    <div className="App">
      <div className="container">
        <div className="weather-container">
          <DisplayWeather />
        </div>
        <div className="clock-container">
          <Clock />
        </div>
        <div className="userinfo-container">
          <DisplayName userInfo={userInfo} />
        </div>
        <div className="quote-container">
          <DisplayQuote />
        </div>
        <div className="settings-container">
          <Settings />
        </div>
      </div>
    </div>
  );
}

export default App;
