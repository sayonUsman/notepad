import React, { useState } from "react";
import Todo from "../model";
import { IconContext } from "react-icons";
import { BiSolidEditAlt } from "react-icons/Bi";
import { AiFillDelete } from "react-icons/Ai";
import { MdDone } from "react-icons/Md";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const ActiveTodoCard: React.FC<Props> = ({
  todo,
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) => {
  const [isEdited, setIsEdited] = useState<boolean>(false);
  const [editedTodo, setEditedTodo] = useState<string>(todo.todo);

  const handleEditedTodo = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, todo: editedTodo } : todo
      )
    );
    setIsEdited(false);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: number) => {
    const newTodo = todos.filter((todo) => todo.id === id);
    setCompletedTodos([...completedTodos, newTodo[0]]);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <form onSubmit={(e) => handleEditedTodo(e, todo.id)}>
      <div className="h-16 flex justify-between items-center rounded-sm border shadow-md shadow-zinc-900 m-7">
        {isEdited ? (
          <input
            type="text"
            defaultValue={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
            className="bg-black text-white rounded-sm ml-4 pl-1"
          ></input>
        ) : (
          <p className="pl-4 font-semibold">{todo.todo}</p>
        )}

        <div className="flex">
          <IconContext.Provider value={{ size: "27" }}>
            <span
              onClick={() => {
                setIsEdited(!isEdited);
              }}
            >
              <BiSolidEditAlt></BiSolidEditAlt>
            </span>
          </IconContext.Provider>

          <IconContext.Provider value={{ size: "27" }}>
            <span className="px-2" onClick={() => handleDelete(todo.id)}>
              <AiFillDelete></AiFillDelete>
            </span>
          </IconContext.Provider>

          <IconContext.Provider value={{ size: "27" }}>
            <span className="pr-4" onClick={() => handleDone(todo.id)}>
              <MdDone></MdDone>
            </span>
          </IconContext.Provider>
        </div>
      </div>
    </form>
  );
};

export default ActiveTodoCard;
