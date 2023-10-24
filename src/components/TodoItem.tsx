import { TodoBase } from "@/types";

interface Todo extends TodoBase {
  onChange: (id: number, checked: boolean) => void;
  onRemove: (id: number) => void;
}

export default function TodoItem({
  id,
  title,
  done,
  onChange,
  onRemove,
}: Todo) {
  return (
    <div className="todo-item">
      <label className="container">
        <input
          type="checkbox"
          checked={done}
          onChange={(e) => onChange(id, e.target.checked)}
        />
        <span className="checkmark"></span>
      </label>
      <span className="todo-item-title">{title}</span>
      <span className="remove-todo" onClick={() => onRemove(id)}>
        X
      </span>
    </div>
  );
}
