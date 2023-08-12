import React, { useState } from "react";
import Todo from "../model";
import ActiveTodoCard from "./ActiveTodoCard";
import CompletedTodoCard from "./CompletedTodoCard";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  return (
    <div className="container mx-auto flex flex-col justify-between lg:flex-row mb-5">
      <div className="w-full lg:w-1/2 h-fit lg:ml-4 lg:mr-5 mt-7 lg:border rounded-md lg:shadow-md lg:shadow-orange-500">
        <h1 className="text-3xl text-orange-600 p-4">Active Tasks</h1>
        {todos.map((todo) => (
          <ActiveTodoCard
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            completedTodos={completedTodos}
            setCompletedTodos={setCompletedTodos}
          ></ActiveTodoCard>
        ))}
      </div>

      <div className="w-full lg:w-1/2 h-fit lg:ml-5 lg:mr-4 mt-7 lg:border rounded-md lg:shadow-md lg:shadow-green-500">
        <h1 className="text-3xl text-green-600 p-4">Completed Tasks</h1>
        {completedTodos.map((todo) => (
          <CompletedTodoCard key={todo.id} todo={todo.todo}></CompletedTodoCard>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
