import { React, useState } from "react";

const Hello = ({ setShow, onsubmit }) => {
  const [name, setName] = useState("");
  const showHandler = (e) => {
    e.preventDefault();

    onsubmit(name);
    setName("");
    setShow(true);
  };
  return (
    <div className="card">
      <h1>Hello!!!👋</h1>
      <p>What is your name?</p>
      <form onSubmit={showHandler}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {name !== "" && <button>SUBMIT</button>}
      </form>
    </div>
  );
};

export default Hello;
