import React, { FC } from "react";
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
  return (
    <div className="todos">
      {todos?.map((todo, index) => (
        <SingleTodo
          index={index}
          todos={todos}
          todo={todo}
          key={todo.id}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
