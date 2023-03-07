import React from "react";
import { Link } from "react-router-dom";

function Slidebar() {
  return (
    <div className="slideContainer">
      <h2><Link to="/" className="linklogo">Note Care</Link></h2>
        <Link to="/createnote">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="black"
          class="bi bi-plus-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
        </svg>
        </Link>
      <div>
        
      </div>
    </div>
  );
}

export default Slidebar;
