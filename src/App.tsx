import React, { useState } from "react";
import InputFiled from "./components/InputFiled";
import TodoList from "./components/TodoList";

import "./App.css";

export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos([...todos, { id: Math.random(), isDone: false, todo }]);
  };

  return (
    <>
      <div className="App">
        <span className="heading">Todo List</span>
        <InputFiled handelSubmit={handelSubmit} setTodo={setTodo} todo={todo} />
        {todos?.length ? (
          <>
            <p> List</p>
            <TodoList todos={todos} setTodos={setTodos} />
          </>
        ) : null}
      </div>
    </>
  );
}

export default App;
