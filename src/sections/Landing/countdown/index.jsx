import { useState, useEffect } from "react";

import "./index.scss";
import { getRemainingTimeUntilMsTimestamp } from "./countdownUtil/index.js";

const defaultRemainingTime = {
  days: "",
  hours: "",
  minutes: "",
  seconds: "",
};

// the date in milliseconds
const date = new Date("08/31/2022 16:00:00"); // some mock date
const timestampMs = date.getTime();

const CountDown = () => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime();
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const updateRemainingTime = () => {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(timestampMs));
  };

  return (
    <div className="container">
      <div className="counts">
        <div className="count">
          <div className="box">
            <div className="text">{remainingTime.days}</div>
          </div>
          days
        </div>
        <div className="count">
          <div className="box">{remainingTime.hours}</div>hours
        </div>
        <div className="count">
          <div className="box">{remainingTime.minutes}</div>minutes
        </div>
        <div className="count">
          <div className="box">{remainingTime.seconds}</div>seconds
        </div>
      </div>
    </div>
  );
};

export default CountDown;
