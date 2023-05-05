import React, {useState, useEffect}from "react";
import add from "./images/add.png";
import Todo from "./components/ToDo";
  import {db} from "./firebase"
import {query, collection, onSnapshot} from "firebase/firestore"

function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {

    const q = query(collection(db, 'todos'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {

        todosArr.push({...doc.data(), id: doc.id})
      });
      setTodos(todosArr)
    })

    return () => unsubscribe();

  }, [])

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
 