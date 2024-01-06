import React, { useEffect, useRef, useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

type SingleTodoType = {
  index: number;
  todo: Todo;
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
};

const SingleTodo: React.FC<SingleTodoType> = ({
  index,
  todo,
  setTodos,
  todos,
}) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <>
      <form className="todos__single">
        {edit ? (
          <>
            <input
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              className="todos__single--text"
              ref={inputRef}
            />
          </>
        ) : todo.isDone ? (
          <s className="todos__single--text">{todo.todo}</s>
        ) : (
          <span className="todos__single--text">{todo.todo}</span>
        )}
        <div>
          <span className="icon">
            {" "}
            <AiFillEdit />
          </span>
          <span className="icon">
            <AiFillDelete />
          </span>
          <span className="icon">
            <MdDone />
          </span>
        </div>
      </form>
    </>
  );
};
export default SingleTodo;
