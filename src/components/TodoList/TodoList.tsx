import { ComponentPropsWithoutRef, FC, Fragment } from "react";
import { Todo } from "../../types/todo";
import { TodoItem } from "..";

interface TodoListProps extends ComponentPropsWithoutRef<"div"> {
  todos: Todo[];
  onCompleteChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export const TodoList: FC<TodoListProps> = ({
  todos,
  onCompleteChange,
  onDelete,
}) => {
  const todosSorted = todos.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? 1 : -1;
  });

  return (
    <Fragment>
      <div className="w-full">
        {todosSorted.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCompletedChange={onCompleteChange}
            onDelete={() => onDelete(todo.id)}
          />
        ))}
      </div>
      {todos.length === 0 && (
        <div className="text-gray-500 text-center mt-5 text-xl">
          No todos yet. Add a new one above
        </div>
      )}
    </Fragment>
  );
};
