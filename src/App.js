import React, { useCallback, useMemo, useState } from "react";

import "./App.css";
import Demo from "./components/demo/Demo";
import DemoList from "./components/demo_list/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
  const [show, setShow] = useState(false);
  const [letshow, setLetShow] = useState(false);
  const [count, setCont] = useState(25);

  console.log("app");

  const showHandler = () => {
    setShow((prevState) => !prevState);
  };

  const demoHandler = useCallback(() => {
    setLetShow((prevState) => !prevState);
    setCont((prevState) => prevState + 1);
  }, []);

  // const user = {
  //   name: 'Alina',
  //   age: 21
  // }

  const user = useMemo(() => {
    return {
      name: "alina",
      age: count,
    };
  }, [count]);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {show && <p>This is new</p>}
      <Button onClick={showHandler}>Click me</Button>
      <DemoList />
      <Demo onClick={demoHandler} {...user} />
    </div>
  );
}

export default App;
