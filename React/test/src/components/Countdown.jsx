import React from "react";

const Countdown = ({ timeLeft }) => {
  return (
    <div className="countdown">
      <div className="time-unit">
        <span className="time-value">
          {String(timeLeft.days).padStart(2, "0")}
        </span>
        <span className="time-label">Days</span>
      </div>
      <span className="time-colon">:</span>
      <div className="time-unit">
        <span className="time-value">
          {String(timeLeft.hours).padStart(2, "0")}
        </span>
        <span className="time-label">Hours</span>
      </div>
      <span className="time-colon">:</span>
      <div className="time-unit">
        <span className="time-value">
          {String(timeLeft.minutes).padStart(2, "0")}
        </span>
        <span className="time-label">Minutes</span>
      </div>
      <span className="time-colon">:</span>
      <div className="time-unit">
        <span className="time-value">
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
        <span className="time-label">Seconds</span>
      </div>
    </div>
  );
};

export default Countdown;
