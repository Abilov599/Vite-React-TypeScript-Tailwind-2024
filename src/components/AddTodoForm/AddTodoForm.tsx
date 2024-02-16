import { ComponentPropsWithoutRef, FC, FormEvent, useState } from "react";
import { Button } from "..";

interface AddTodoFormProps
  extends Omit<ComponentPropsWithoutRef<"form">, "onSubmit"> {
  onSubmit: (value: string) => void;
}

export const AddTodoForm: FC<AddTodoFormProps> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    onSubmit(inputValue);
    setInputValue("");
  }

  return (
    <form className="flex justify-center w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="rounded-md grow border-2 border-gray-300 p-2"
        placeholder="What needs to be done?"
      />
      <Button
        type="submit"
        className={"p-3 ml-1 text-white rounded-md bg-green-600"}
      >
        Add
      </Button>
    </form>
  );
};
