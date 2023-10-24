import React, { useEffect, useState } from "react";
import { useCounter } from "@/hooks/useCounter";
import CircularProgressBar from "@/components/CircularProgressBar";
import "@/styles/counter.css";

const CounterPage: React.FC = () => {
  const { count, increment, decrement } = useCounter(0, 100);

  const [message, setMessage] = useState<string>("");

  const handleMessage = () => {
    if (count === 0) setMessage("No Energy");
    if (count > 0 && count < 20) setMessage("Low Energy");
    if (count >= 20 && count < 80) setMessage("Stable Energy");
    if (count >= 80 && count < 100) setMessage("High Energy");
    if (count === 100) setMessage("Full Energy");
  };

  useEffect(() => {
    handleMessage();
  }, [count]);

  return (
    <div className="main-container">
      <h1 className="status">{message}</h1>
      <div className="counter-display">
        <button className="decrement" onClick={decrement}>
          -
        </button>
        <CircularProgressBar value={count} />
        <button className="increment" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};

export default CounterPage;
