import { useState } from "react";
import TodoItem from "@/components/TodoItem";
import { CalendarClock } from "lucide-react";
import "@/styles/todo.css";
import { useTodos } from "@/hooks";
import { formatDate } from "@/lib/utils";

export default function TodoPage() {
  const { todos, handleTodoChange, addTodo, removeTodo } = useTodos();

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  const todosInProgress = todos.filter((todo) => !todo.done);
  const todosDone = todos.filter((todo) => todo.done);

  const currentDate = formatDate(new Date());

  return (
    <div className="todo-form">
      <header>
        <h1>Todo</h1>
        <div className="header-right">
          <div className="header-date">
            <h2>Today</h2>
            <span>{currentDate}</span>
          </div>
          <CalendarClock color="blue" />
        </div>
      </header>

      <hr />

      <form className="todo-input" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Add a new task"
          value={inputValue}
          onChange={handleInputChange}
        />
        <input type="submit" value="+" />
      </form>

      <div className="todos-list todos-in-progress">
        {todosInProgress.map((todo) => (
          <TodoItem
            id={todo.id}
            title={todo.title}
            done={todo.done}
            onChange={handleTodoChange}
            onRemove={removeTodo}
          />
        ))}
      </div>

      <hr />

      <div className="todos-list todos-done">
        {todosDone.map((todo) => (
          <TodoItem
            id={todo.id}
            title={todo.title}
            done={todo.done}
            onChange={handleTodoChange}
            onRemove={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}
