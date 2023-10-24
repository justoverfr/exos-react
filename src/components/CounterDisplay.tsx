import React, { useState } from "react";
import "@/styles/counter.css";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(63);

  const handleMessage = (count: number) => {
    if (count < 20) return "low energy";
    if (count >= 20 && count < 70) return "stable energy";
    if (count >= 70 && count < 100) return "high energy";
    if (count === 100) return "full energy";
    return "";
  };

  return (
    <div className="container">
      <h1>{handleMessage(count)}</h1>
      <div className="circle">
        <div className="fill" style={{ height: `${count}%` }}></div>
      </div>
      <div className="count">{count}</div>
      <button onClick={() => setCount(Math.max(count - 1, 0))}>-</button>
      <button onClick={() => setCount(Math.min(count + 1, 100))}>+</button>
    </div>
  );
};

export default Counter;
