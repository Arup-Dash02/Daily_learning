// import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import HeaderWithTitle from "./Components/HeaderWithTitle";

function App() {
  // const [title, setTitle] = useState("hjkhkjhkk"); //title state is initalized with hjkhkjhkk

  // function onclickHandler() {
  //   setTitle(Math.random());
  // }
  return (
    <>
      {/* <button onClick={onclickHandler}>Click me to change the title</button>
      <Header title={title}></Header> */}
      {/* int the above approach as we define our state in the App section it rerenders each time when something change in the state.As it is a parent element,when it rerenders all the child elements are unnecessarily rerenders.But we only want to rerender the only top most header.So here is the another approach where we define the state in the particular state. */}
      <HeaderWithTitle/>
      <Header title={"Hari Narayan"}></Header>
    </>
  );
}

export default App;
