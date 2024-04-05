import { useState } from "react";
import Header from "./Header";

function HeaderWithTitle() {
  const [title, setTitle] = useState("Jay shree Ram");

  function onclickHandler() {
    setTitle(Math.random());
  }

  return (
    <>
      <button onClick={onclickHandler}>Click me to change the title</button>
      <Header title={title} />
    </>
  );
}

export default HeaderWithTitle;
