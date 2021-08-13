import React, { useState, useEffect } from "react";

import "./clock.scss";

export default function Clock() {
  const [localTime, setLocalTime] = useState("");

  const getTime = () => {
    const updatedTime = new Date();
    let hr = updatedTime.getHours();
    let min = updatedTime.getMinutes();
    let sec = updatedTime.getSeconds();
    setLocalTime({ hour: hr, minute: min, second: sec });
  };

  useEffect(() => {
    getTime();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getTime();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div className="time">
        {`${localTime.hour > 9 ? localTime.hour : "0" + localTime.hour}:${
          localTime.minute > 9 ? localTime.minute : "0" + localTime.minute
        }`}
      </div>
    </div>
  );
}
