import React from "react";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  let navigate=useNavigate();

  const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate("/login");
  }
  return (
    <div className="startContainer">
      <nav className="navbar">
        <h1>I-notebook</h1>
          <button className="logoutButton" onClick={handleLogout}>Sign Out</button>
      </nav>
    </div>
  );
};

export default Dashboard;
