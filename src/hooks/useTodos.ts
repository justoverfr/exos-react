import { useState } from "react";
import { TodoBase } from "@/types";

export const useTodos = (initialTodos: TodoBase[] = []) => {
  if (initialTodos === null) initialTodos = [];

  const [todos, setTodos] = useState(initialTodos);
  const [currentId, setCurrentId] = useState(initialTodos.length + 1);

  const handleTodoChange = (id: number, checked: boolean) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: checked } : todo
    );
    setTodos(updatedTodos);
  };

  const addTodo = (title: string) => {
    const newTodo = { id: currentId, title, done: false };
    setTodos([...todos, newTodo]);
    setCurrentId(currentId + 1);
  };

  const removeTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return { todos, handleTodoChange, addTodo, removeTodo };
};
