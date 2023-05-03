import React from "react";
import trashbin from "../images/trashbin.png";

const Todo = ({ todo }) => {
  return (
    <li className="list">
      <div className="container">
        <input type="checkbox" />
        <p>{todo}</p>
      </div>
      <button>
        <img src={trashbin} />
      </button>
    </li>
  );
};

export default Todo;
