import { ComponentPropsWithoutRef, FC, MouseEventHandler } from "react";
import { Todo } from "../../types/todo";
import { Button } from "../";
import { Trash2 } from "lucide-react";

interface TodoItemProps extends ComponentPropsWithoutRef<"div"> {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: MouseEventHandler<HTMLButtonElement>;
}

export const TodoItem: FC<TodoItemProps> = ({
  todo,
  onCompletedChange,
  onDelete,
}) => {
  return (
    <div key={todo.id} className="flex py-2 pl-2 border-b">
      <label>
        <input
          onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
          type="checkbox"
          className="scale-150 mr-2"
          checked={todo.completed}
        />
      </label>
      <span className={todo.completed ? "line-through" : ""}>{todo.title}</span>
      <Button onClick={onDelete} className={"ml-auto mr-[15px] text-red-600"}>
        <Trash2 size={25} />
      </Button>
    </div>
  );
};
