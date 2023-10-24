import { useCounter } from "@/hooks";
// import CounterDisplay from "@/components/CounterDisplay";
import Counter from "@/components/CounterDisplay";
import CircularCounter from "@/components/CircularCounter";

export default function CounterPage() {
  const { count, increment, decrement } = useCounter();

  return <CircularCounter />;
}
