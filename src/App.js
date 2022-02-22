import React, { useState, useEffect } from "react";
import Dice from "./images/icon-dice.svg";
import Underline from "./images/pattern-divider-desktop.svg";
import axios from "axios";
import './App.css';

function App() {
  const [advice, setAdvice] = useState("");
  const [id, setID] = useState("");

  useEffect(() => {
    axios.get("https://api.adviceslip.com/advice").then((response) => {
      setAdvice(response.data.slip.advice);
      setID(response.data.slip.id);
    });
  }, []);

  const handleClick = () => {
    axios.get("https://api.adviceslip.com/advice").then((response) => {
      setAdvice(response.data.slip.advice);
      setID(response.data.slip.id);
    });

    console.log("clicked");
  };

  return (
    <div className="container">
      {/* card container */}
      <div className="card-container">
        {/* card header */}
        <span className="card-container_header">ADVICE #{id}</span>

        {/* card content */}
        <div className="card-container_content">"{advice}"</div>

        {/* card underscore  */}
        <img src={Underline} alt="" className="underscore" />

        {/* card toggle button */}  
        <button onClick={handleClick} className="card-button">
          <img src={Dice} alt="dice" />
        </button>
      </div>
    </div>
  );
}

export default App;
