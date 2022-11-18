import "./App.css";
import { useState } from "react";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";

function App() {
  const [show, setShow] = useState(false);
  const [name, setName]= useState("Tony")


  const submitHandler = (name) => {
    setName(name)
  }
  return (
    <div className="App">
      {!show && <Hello setShow={setShow} onsubmit={submitHandler} />}
      {show && <Welcome setShow={setShow} name={name} />}
    </div>
  );
}

export default App;
