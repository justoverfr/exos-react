import { Tag as TagIcon } from "lucide-react";
import "./tag.css";

interface TagProps {
  label: string;
}

export function Tag({ label }: TagProps) {
  return (
    <div className="tag-component">
      <TagIcon size={15} />
      <span className="label">{label}</span>
    </div>
  );
}
