import { AddTodoForm, TodoList, TodoSummary } from "./components";
import { useTodos } from "./hooks";

function App() {
  const {
    todos,
    addTodo,
    handleCompletedChange,
    handleDelete,
    deleteAllCompleted,
  } = useTodos();

  return (
    <main className="pt-10 h-screen flex flex-col items-center">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <div className="flex flex-col items-center py-5 min-w-[40%]">
        <AddTodoForm onSubmit={addTodo} />
        <TodoList
          todos={todos}
          onCompleteChange={handleCompletedChange}
          onDelete={handleDelete}
        />
      </div>
      {todos.length > 0 && (
        <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompleted} />
      )}
    </main>
  );
}

export default App;
