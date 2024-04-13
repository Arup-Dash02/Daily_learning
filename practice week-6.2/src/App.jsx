// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";

// function App() {
//   const [number, setNumber] = useState(1);

//   return (
//     <div>
//       <button onClick={() => setNumber(1)}>1</button>
//       <button onClick={() => setNumber(2)}>2</button>
//       <button onClick={() => setNumber(3)}>3</button>
//       <button onClick={() => setNumber(4)}>4</button>
//       <Todo id={number} />
//     </div>
//   );
// }

// function Todo({ id }) {
//   const [todo, setTodo] = useState({});

//   //use useEffect here
//   useEffect(() => {
//     // fetch(`https://sum-server.100xdevs.com/todo?id=${id}`).then(async function (
//     //   res
//     // ) {
//     //   const json = await res.json();
//     //   setTodo(json.todo);
//     // });

//     //using axios------------------------------------------------------
//     axios
//       .get(`https://sum-server.100xdevs.com/todo?id=${id}`)
//       .then((response) => {
//         setTodo(response.data.todo);
//       });
//   }, [id]);

//   return (
//     <div>
//       <h1>{todo.title}</h1>
//       <h4>{todo.description}</h4>
//     </div>
//   );
// }

// export default App;

//------------------------------------------------Next example----------------------------
// import { useEffect, useMemo, useState } from "react";

// function App() {
//   const [counter, setCounter] = useState(0);
//   const [inputValue, setInputValue] = useState(1);
//   function handleCount() {
//     setCounter(counter + 1);
//   }

// let count = 0;
// for (let i = 1; i <= inputValue; i++) {
//   count += i;
// }
//here the above expensive logic is rerendering as we clicking in counter button but it should not be rerender because, logically here the input value is not changed
//so here useMemo comes into picture(I know useEffect can be used)
//---------------------Approach-1(using useEffect)----------------------------
// const [finalValue, setFinalValue] = useState(0);
// useEffect(() => {
//   let count = 0;
//   for (let i = 1; i <= inputValue; i++) {
//     count += i;
//   }
//   setFinalValue(count);
// }, [inputValue]);
//---------------------Approach-2(using useMemo)-------------------------------
//here the best part is we don't have to maintain another state variable and it is also so close to useEffect
//   let count = useMemo(() => {
//     let finalCount = 0;
//     for (let i = 0; i < inputValue; i++) {
//       finalCount += i;
//     }
//     return finalCount;
//   }, [inputValue]);

//   return (
//     <div>
//       <input
//         onChange={function (e) {
//           console.log(e.target.value);
//           setInputValue(e.target.value);
//         }}
//       ></input>
//       <p>Sum is {finalValue}</p>
//       <button onClick={handleCount}>Counter {counter}</button>
//     </div>
//   );
// }

// export default App;

//----------------------------------useCallback understand----------------------------
// 'useCallback' is a hook in react, apopular js library for building user interfaces. It is used to memoize functions, which can help in optimizing the performance of your application, especially in cases involving child components that rely on reference equality to prevent unnecessary renderToStaticMarkup.
// import { useCallback } from "react";
// import { memo } from "react";
// import { useState } from "react";

// var a = 1;
// function App() {
//   const [counter, setCounter] = useState(0);

//   // var a = {
//   //   sum: 1,
//   // };
//   //here render happening when we clicking the counter button but it should not. Because the value a is not changing
//   //we can solve this problem by using useCallback hook
//   var a=useCallback(()=>{
//     //anything
//   },[])

//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCounter(counter + 1);
//         }}
//       >
//         Counter {counter}
//       </button>
//       <Demo a={a} />
//     </div>
//   );
// }

// const Demo = memo(function ({ a }) {
//   console.log("rerender");
//   return <div>hi there</div>;
// });

// export default App;

//---------------learn useCallback using given assignment-------------------
import { memo, useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // function inputFunction() {
  //   console.log("Hii there");
  // }
  //react is not smart enough to know that this function is not changed so it renders each time the button is clicked
  // so we can wrap this function inside the useCallback
  const inputFunction = useCallback(() => {
    console.log("Hii there");
  },[]);
  return (
    <div>
      <ButtonComponent inputFunction={inputFunction} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me {count}
      </button>
    </div>
  );
}

const ButtonComponent = memo(({ inputFunction }) => {
  console.log("child render");

  return (
    <div>
      <button>Button Clicked</button>
    </div>
  );
});

export default App;
