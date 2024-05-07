// import React, { useEffect, useState } from "react";
// // import { useState } from "react";
// import "./App.css";

// function App() {
//   const [render, setRender] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setRender(false);
//     }, 10000);
//   }, []);

//   return <>{render ? <MyComponent /> : <div></div>}</>;
// }

// // function MyComponent() {
// //   const [count, setCount] = useState(0);

// //   const incrementCount = () => {
// //     setCount(count + 1);
// //   };
// //   return (
// //     <div>
// //       <p>{count}</p>
// //       <button onClick={incrementCount}>Increment</button>
// //     </div>
// //   );
// // }

// // function MyComponent() {
// //   useEffect(() => {
// //     console.error("Component mounted");
// //     // --------------------New IMPORTANT concept---------------------
// //     // 1.We can return only a function from useEffect hook;Do not return any other value other than function.
// //     // 2.When the component executes first time then the above code runs and return code will not execute.When the dependecy changes from dependency array of useEffect then at first the return code execute to cleanup the code and then the above code executes for again mount.
// //     // This basically means return code executes when unmount happens and help to cleanup the code
// //     return () => {
// //       console.log("component unmounted");
// //     };
// //   }, []);

// //   return <div>From inside MyComponent</div>;
// // }

// //class based component
// class MyComponent extends React.Component {
//   componentDidMount() {
//     console.log("component mounted");
//   }

//   componentWillUnmount() {
//     console.log("component unmounted");
//   }

//   render() {
//     return <div>hi there</div>;
//   }
// }

// export default App;

//--------------------------------------CUSTOM HOOKS----------------------------------
// import axios from "axios";
// import { useEffect, useState } from "react";

// //A hook is effectively a function
// //You can give any name to the custom hook but start with use
// function useTodos() {
//   const [todos, setTodos] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
//       setTodos(res.data.todos);
//       setLoading(false);
//     });
//   }, []);

//   return { todos, loading };
// }

// function App() {
//   //we can do the above logic very short creating a custom hook which can hit the backend and directly gives us list of todos
//   //Lets see how can we do this
//   const { todos, loading } = useTodos();
//   if (loading) {
//     return <div>loading...</div>;
//   }
//   return (
//     <>
//       {todos.map((todo) => {
//         return <Track todo={todo} />;
//       })}
//     </>
//   );
// }

// function Track({ todo }) {
//   return (
//     <div>
//       {todo.title}
//       <br />
//       {todo.description}
//     </div>
//   );
// }

// export default App;

//----------------------------------Examaple-----------------------------------
// import axios from "axios";
// import { useEffect, useState } from "react";

// function useTodos(n) {
//   const [todos, setTodos] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // here setInterval give a number to the value.we can use it to stopn or clear the interval
//     const value = setInterval(() => {
//       axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
//         setTodos(res.data.todos);
//         setLoading(false);
//       });
//     }, n * 1000);

//     axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
//       setTodos(res.data.todos);
//       setLoading(false);
//     });

//     //here dependecy should be n. Beacuse when we change the value of n it will not re-run.
//     //But the problem here is when we change the value of n;The interval will be running and after that due to dependecy array it will again start the loop which is not required.
//     //so here when the n changes,at First we have clear the old interval.

//     //so we have to create a cleanup function
//     return () => {
//       clearInterval(value);
//     };
//   }, [n]);

//   return { todos, loading };
// }

// function App() {
//   const { todos, loading } = useTodos(5);
//   if (loading) {
//     return <div>loading...</div>;
//   }
//   return (
//     <>
//       {todos.map((todo) => {
//         return <Track todo={todo} />;
//       })}
//     </>
//   );
// }

// function Track({ todo }) {
//   return (
//     <div>
//       {todo.title}
//       <br />
//       {todo.description}
//     </div>
//   );
// }

// export default App;

//----------------------------------------useIsOnline hook----------------------------------
// import { useEffect, useState } from "react";

// function useIsOnline() {
//   const [isOnline, setIsOnline] = useState(window.navigator.onLine);

//   useEffect(() => {
//     window.addEventListener("online", () => {
//       setIsOnline(true);
//     });

//     window.addEventListener("offline", () => {
//       setIsOnline(false);
//     });
//   }, []);

//   return isOnline;
// }

// function App() {
//   const isOnline = useIsOnline();

//   if (isOnline) {
//     return "You are Online.";
//   }
//   return "You are offline, Please connect to the Internet.";
// }

// export default App;

//------------------------------useMousePointer() hook----------------------------------
// import { useEffect, useState } from "react";

// function useMousePointer() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     setPosition({ x: e.clientX, y: e.clientY });
//   };

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return position;
// }

// function App() {
//   const mousePointer = useMousePointer();
//   return (
//     <>
//       Your mouse pointer is {mousePointer.x} {mousePointer.y}
//     </>
//   );
// }

// export default App;

//-----------------------------------useInterval() hook-----------------------------
// import { useEffect, useState } from "react";

// function useInterval(fn, timeout) {
//   //why we are doing this?
//   //Because app can rerender.when app get rerender it will also call for useInterval hook,which tends to restart the clock.So to protect the setInterval clock we have to put this in the useEffect hook
//   useEffect(() => {
//     setInterval(() => {
//       fn();
//     }, timeout);
//   }, []);
// }

// function App() {
//   const [count, setCount] = useState(0);

//   useInterval(() => {
//     setCount((c) => c + 1);
//   }, 1000);

//   return <>Timer is at {count}</>;
// }

// export default App;

//------------------------------useDebounce() hook------------------
import { useEffect, useState } from "react";

function useDebounce(value, timeout) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    let timeoutNumber = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);

    return () => {
      clearTimeout(timeoutNumber);
    };
  }, [value]);

  return debouncedValue;
}

function App() {
  const [inputvalue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputvalue, 500);

  return (
    <>
      <div>The Debounced value is {debouncedValue}</div>
      <input
        type="text"
        value={inputvalue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
      />
    </>
  );
}

export default App;
