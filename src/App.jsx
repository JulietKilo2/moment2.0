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
      <Clock />
      <DisplayName userInfo={userInfo} />
      <DisplayWeather />
      <DisplayQuote />
      <Settings />
    </div>
  );
}

export default App;
