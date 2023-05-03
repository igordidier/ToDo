import React, {useState}from "react";
import add from "./images/add.png";
import Todo from "./components/ToDo";

function App() {

  const [todos, setTodos] = useState(['Learn React', 'Grind Leetcode'])

  return (

    <div className="body">
    <div className="container">
      <div className="wrapper">
      <h1 className="title">ToDo App</h1>
      <form>
    <input type="text" placeholder="Add your ToDo"></input>
    <button>
      <img src={add}/>
    </button>
      </form> 
      <ul>
        {todos.map((todo, index) => (
           <Todo key={index} todo={todo} /> 
        ))}
      </ul>
      <p>You have {todos.length} ToDos</p>
    </div>
    </div>
    </div>
  );
}
 
export default App;
 