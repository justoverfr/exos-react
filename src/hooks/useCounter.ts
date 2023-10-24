import { clamp } from "@/lib/utils";
import { useState } from "react";

export const useCounter = (
  min: number | null = null,
  max: number | null = null
) => {
  const [count, setCount] = useState(50);

  const increment = () => {
    const newCount = count + 1;
    setCount(clamp(newCount, min, max));
  };

  const decrement = () => {
    const newCount = count - 1;
    setCount(clamp(newCount, min, max));
  };

  return { count, increment, decrement };
};
