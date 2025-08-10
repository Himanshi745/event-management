import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../App.css';
import './Navbar.css';
import logo from '../p.png';

function Navbar({ScrollToCategory}) {
  // const goHome = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  const navigate = useNavigate();


  return (
    <nav className="navbar">
      <img src={logo} className="logo" onClick={()=> navigate("/")} style={{ cursor: "pointer" }} alt="PrimeEvents" />
      <ul className="nav-links">
        <li><a onClick={() => navigate("/events")}>Events</a></li>
        <li><a onClick={() => navigate("/about")}>AboutUs</a></li>
        <li><a onClick={() => navigate("/contact")}>ContactUs</a></li>
        <li><a onClick={() => navigate("/register")}>Register</a></li>
        <li><a onClick={() => navigate("/signup")}>Signup</a></li>
        <li><a onClick={() => navigate("/login")}>Login</a></li>
        <li><a onClick={() => navigate("/admin/add-event")} style={{color: "#FFD700", fontWeight: "bold"}}>Admin Panel</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
