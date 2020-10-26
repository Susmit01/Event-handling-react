import React, { useState } from "react";

function App() {
  const [headingText, setHeadingtext] = useState("Hi ");
  const [isMouseOver, setMouseOver] = useState(false);
  function handleClick() {
    setHeadingtext("Submitted");
  }
  function handleMouse() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        onMouseOver={handleMouse}
        onMouseOut={handleMouseOut}
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
