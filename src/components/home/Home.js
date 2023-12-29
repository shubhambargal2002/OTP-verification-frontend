import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="startContainer">
      <nav className="navbar">
        <h1>I-notebook</h1>
        <div>
          <Link to="/login">
            <button className="logoutButton">Sign In</button>
          </Link>
          <Link to="/register">
            <button className="logoutButton">Sign Up</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Home;
