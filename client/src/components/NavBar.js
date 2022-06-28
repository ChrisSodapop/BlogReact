import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/BlogReact">React</Link>
        </li>
        <li>
          <Link to="/Angular">Angular</Link>
        </li>
        <li>
          <Link to="/WildCodeSchool">WildCodeSchool</Link>
        </li>
        <li>
          <Link to="/Autre">Autre</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
