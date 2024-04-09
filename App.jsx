import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  //At first we have define a state named todos and intialized it to an empty array

  useEffect(() => {
    //int this arrow function we can not define async so we have to use .then() because it returns promise
    //to do async with useEffect, there is a library called useAsyncEffect is used
    //Here we need to update the todos in every 10 seconds
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos").then(async function (res) {
        const json = await res.json();
        setTodos(json.todos);
      });
    }, 10000);
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.key}
          title={todo.title}
          description={todo.description}
        />
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </div>
  );
}

export default App;
