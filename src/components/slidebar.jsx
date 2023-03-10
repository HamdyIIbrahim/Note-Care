import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setColor } from "./reduxToolkit/reducer";

function Slidebar() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [show, setShow] = useState(true);
  function changeColor(e) {
    dispatch(setColor(e.target.value));
    Navigate('/createnote');
    console.log(e.target.value);
  }
  function toggle(e) {
    e.preventDefault();
    setShow(!show);
  }
  return (
    <div className="slideContainer">
      <h2>
        <Link to="/" className="linklogo">
          Note Care
        </Link>
      </h2>
      <Link to='/createnote' onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="black"
          className="bi bi-plus-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
        </svg>
      </Link>
      <div className="dropColors" style={{ display: show ? "none" : "" }}>
        <button className="color" value="coral" onClick={changeColor}>
          {" "}
        </button>
        <button className="color" value="blueviolet" onClick={changeColor}>
          {" "}
        </button>
        <button className="color" value="maroon" onClick={changeColor}>
          {" "}
        </button>
        <button className="color" value="mediumblue" onClick={changeColor}>
          {" "}
        </button>
      </div>
    </div>
  );
}

export default Slidebar;
