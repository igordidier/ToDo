import React from "react";
import add from "./images/add.png";

function App() {



  return (
    <div className="Container">
      <div className="Wrapper">
      <h1>ToDo App</h1>
      <form>
    <input type="text" placeholder="Add your ToDo"></input>
    <button>
      <img src={add}/>
    </button>
      </form>
    </div>
    </div>
  );
}

export default App;
 