import React from "react";
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent) => void;
}

const InputFeild: React.FC<Props> = ({ todo, setTodo, handleAddTodo }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-9/12 lg:w-1/2 mx-auto">
        <form
          className="flex mt-7"
          onSubmit={(e) => {
            handleAddTodo(e);
          }}
        >
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Enter a Todo"
            className="w-full h-12 bg-black text-white pl-3 rounded-l-md"
          ></input>

          <button
            type="submit"
            className="h-12 bg-black text-white font-semibold ml-1 px-5 rounded-r-md"
          >
            Go
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputFeild;
