import React from "react";

const Welcome = ({ setShow, name }) => {
  const gobackHandler = () => {
    setShow(false);
  };
  return (
    <div className="card">
      <h1>You are welcome<br/> <i>{name}</i></h1>
      <button className="back--btn" onClick={gobackHandler}>Go back</button>
    </div>
  );
};

export default Welcome;
