import { useState, useEffect } from "react";

import "./Countdown.scss";
import { getRemainingTimeUntilMsTimestamp } from "./CountdownUtil/CountdownUtil.js";

const defaultRemainingTime = {
  days: "",
  hours: "",
  minutes: "",
  seconds: "",
};

// the date in milliseconds
const date = new Date("06/13/2022 00:00:00"); // set to application date for now
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
