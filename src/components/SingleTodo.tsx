import React, { useEffect, useRef, useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
// import { Draggable } from 'react-beautiful-dnd';

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
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
  return (
    <>
      <form
        key={index}
        className="todos__single"
        onSubmit={(e) => handleEdit(e, todo.id)}
      >
        {edit ? (
          <>
            <input
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              className="todos__single--text"
              ref={inputRef}
            />
            <button className="save" type="submit">
              Save
            </button>
          </>
        ) : todo.isDone ? (
          <s className="todos__single--text">{todo.todo}</s>
        ) : (
          <span className="todos__single--text">{todo.todo}</span>
        )}
        <div className="icons">
          <span
            onClick={() => {
              // if (!edit && !todo.isDone) {
              setEdit(!edit);
              // }
            }}
            className="icon"
          >
            {" "}
            <AiFillEdit />
          </span>
          <span onClick={() => handleDelete(todo.id)} className="icon">
            <AiFillDelete />
          </span>
          <span onClick={() => handleDone(todo.id)} className="icon">
            {/* <MdDone /> */}
            <input
              type="checkbox"
              checked={todo.isDone}
              onChange={() => {
                handleDone(todo.id);
              }}
            />
          </span>
        </div>
      </form>
    </>
  );
};
export default SingleTodo;
