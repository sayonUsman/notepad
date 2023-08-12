import React, { useState } from "react";
import InputFeild from "../../components/InputFeild";
import Todo from "../../model";
import TodoList from "../../components/TodoList";

const Home: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="bg-white text-black font-Neucha">
      <div className="min-h-screen">
        <h1 className="text-center text-5xl uppercase font-semibold pt-12">
          Notepad
        </h1>

        <InputFeild
          todo={todo}
          setTodo={setTodo}
          handleAddTodo={handleAddTodo}
        ></InputFeild>

        <TodoList todos={todos} setTodos={setTodos}></TodoList>
      </div>
    </div>
  );
};

export default Home;
