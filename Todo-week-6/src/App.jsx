import { useState } from "react";

let counter = 4;

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Go to Gym",
      description: "Got to gym today",
    },
    {
      id: 2,
      title: "Go to Gym",
      description: "Got to gym today",
    },
    {
      id: 3,
      title: "Go to Gym",
      description: "Got to gym today",
    },
  ]);

  function addTodo() {
    //This is the one way to push the new todo into the existing array using array destructuring using spread operator
    setTodos([
      ...todos,
      {
        id: counter++,
        title: Math.random(),
        description: Math.random(),
      },
    ]);

    //The above work can be done in a simple understanding way by creating a new empty array and then putting all the existing todos into it and After that pushing the new todo into it
    // const newTodos = [];
    // for (let i = 0; i < todos.length; i++) {
    //   newTodos.push(todos[i]);
    // }
    // newTodos.push({
    //   id: 4,
    //   title: Math.random(),
    //   description: Math.random(),
    // });
    // setTodos(newTodos);
  }
  return (
    <div>
      <button onClick={addTodo}>Add todo</button>
      {/* {todos.map(function (todo) {
        return <Todo title={todo.title} description={todo.description} />;
      })} */}
      {/* the above map method can also be written as below using arrow function for
      shortcut */}
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
}
export default App;
