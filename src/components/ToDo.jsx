import React from "react";
import trashbin from "../images/trashbin.png";

const Todo = ({ todo }) => {
  return (
    <li className={todo.completed ? "listdone" : "list"}>
      <div className="container">
        <input type="checkbox" checked={todo.completed ? "checked" : ""} />
        <p className={todo.completed ? "textdone" : ""}>{todo.text} </p>
      </div>
      <button>
        <img src={trashbin} />
      </button>
    </li>
  );
};

export default Todo;
