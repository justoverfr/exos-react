import React from "react";
import "../styles/counter.css";

interface Props {
  value: number;
}

const CircularProgressBar: React.FC<Props> = ({ value }) => {
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="circular-bar-container">
      <svg width="200" height="200">
        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke="hsl(180, 100%, 90%)"
          strokeWidth="10"
          fill="transparent"
        />
        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke="url(#conic)"
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 100 100)"
        />
        <defs>
          <linearGradient id="conic">
            <stop offset="0%" stopColor="blue" />
            <stop offset="100%" stopColor="cyan" />
          </linearGradient>
        </defs>
      </svg>
      <div className="value">{value}</div>
    </div>
  );
};

export default CircularProgressBar;
