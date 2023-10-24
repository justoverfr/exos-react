// CircularCounter.tsx

import React, { useState, useEffect } from "react";
import "@/styles/CircularCounter.css";

const CircularCounter: React.FC = () => {
  const [count, setCount] = useState<number>(70);
  const [message, setMessage] = useState<string>("");
  const [offset, setOffset] = useState<number>(0);

  const radius = 70;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const offset = circumference - (count / 100) * circumference;
    setOffset(offset);
    handleMessage();
  }, [count, circumference]);

  const handleMessage = () => {
    if (count === 0) setMessage("No Energy");
    if (count > 0 && count < 20) setMessage("Low Energy");
    if (count >= 20 && count < 70) setMessage("Stable Energy");
    if (count >= 70 && count < 100) setMessage("High Energy");
    if (count === 100) setMessage("Full Energy");
  };

  return (
    <div className="container">
      <h1>{message}</h1>

      <svg className="progress-ring" width="150" height="150">
        <defs>
          <radialGradient id="radial-gradient">
            <stop offset="0%" stop-color="green" />
            <stop offset="50%" stop-color="yellow" />
            <stop offset="100%" stop-color="red" />
          </radialGradient>

          <mask id="mask">
            <circle
              className="progress-ring__circle-mask"
              stroke="white"
              strokeWidth="8"
              fill="transparent"
              r={radius}
              cx="75"
              cy="75"
              strokeDasharray={`${circumference} ${circumference}`}
              strokeDashoffset={offset}
              transform="rotate(-90 75 75)"
            />
          </mask>
        </defs>

        <circle
          className="progress-ring__circle-bg"
          stroke="grey"
          strokeWidth="8"
          fill="transparent"
          r={radius}
          cx="75"
          cy="75"
        />
        <circle
          className="progress-ring__circle"
          stroke="url(#radial-gradient)"
          strokeWidth="8"
          fill="transparent"
          r={radius}
          cx="75"
          cy="75"
          mask="url(#mask)"
        />
      </svg>
      <div className="count">{count}</div>
      <button onClick={() => setCount(Math.max(count - 1, 0))}>-</button>
      <button onClick={() => setCount(Math.min(count + 1, 100))}>+</button>
    </div>
  );
};

export default CircularCounter;
