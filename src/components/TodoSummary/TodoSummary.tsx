import { FC } from "react";
import { Todo } from "../../types/todo";
import { Button } from "..";

interface TodoSummaryProps {
  todos: Todo[];
  deleteAllCompleted: () => void;
}

export const TodoSummary: FC<TodoSummaryProps> = ({
  todos,
  deleteAllCompleted,
}) => {
  const completedTodos = todos.filter((todo) => todo.completed);
  return (
    <div className="text-center space-y-2">
      <p className="text-base font-medium">
        {completedTodos.length}/{todos.length} todos completed
      </p>
      {completedTodos.length > 0 && (
        <Button
          onClick={deleteAllCompleted}
          className="p-3 rounded bg-red-600 text-white"
        >
          Delete all completed
        </Button>
      )}
    </div>
  );
};
