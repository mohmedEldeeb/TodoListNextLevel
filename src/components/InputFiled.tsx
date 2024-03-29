import React from "react";
import "./styles.css";

type InpoutFiledProps = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handelSubmit: (e: React.FormEvent) => void;
};

const InputFiled: React.FC<InpoutFiledProps> = ({
  todo,
  setTodo,
  handelSubmit,
}) => {
  return (
    <form className="input" onSubmit={handelSubmit}>
      <input
        type="text"
        placeholder="entar task"
        className="input__box"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button type="submit" className="input__submit">
        Submit{" "}
      </button>
    </form>
  );
};
export default InputFiled;
