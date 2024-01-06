import React, { FC, useEffect, useState } from "react";
import SingleTodo from "./SingleTodo";
import "./styles.css";

export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

type TodoListProps = {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
};
const TodoList: FC<TodoListProps> = ({ todos, setTodos }) => {
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState<Array<Todo>>(todos);
  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);
  const handleTodoCompleted = () => {
    setFilteredTodos(todos.filter((todo) => todo.isDone));
    setFilter("completed");
  };
  const handleTodoIncompleted = () => {
    setFilteredTodos(todos.filter((todo) => !todo.isDone));
    setFilter("incompleted");
  };
  const handleTodoAll = () => {
    setFilteredTodos(todos);
    setFilter("all");
  };
  return (
    <div>
      <div className="todo__list__btns">
        <button
          className={`todo__list__btn ${
            filter === "completed" ? "active" : ""
          } `}
          onClick={handleTodoCompleted}
        >
          completed
        </button>
        <button
          className={`todo__list__btn ${
            filter === "incompleted" ? "active" : ""
          }`}
          onClick={handleTodoIncompleted}
        >
          incompleted
        </button>
        <button
          className={`todo__list__btn ${filter === "all" ? "active" : ""}`}
          onClick={handleTodoAll}
        >
          all
        </button>
      </div>
      <div className="todos">
        {filteredTodos?.map((todo, index) => (
          <SingleTodo
            index={index}
            todos={todos}
            todo={todo}
            key={todo.id}
            setTodos={setTodos}
          />
        ))}
        {/* {isCompleted &&
          completedTodos?.map((todo, index) => (
            <SingleTodo
              index={index}
              todos={todos}
              todo={todo}
              key={todo.id}
              setTodos={setTodos}
            />
          ))} */}
      </div>
    </div>
  );
};

export default TodoList;
