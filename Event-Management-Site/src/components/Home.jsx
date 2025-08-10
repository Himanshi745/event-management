import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Prime Events</h1>
        <p>Your vision, our execution. Flawless events, every time.</p>
        <button onClick={() => window.location.href = "/events"} className="cta-button">
          Explore Events
        </button>
      </div>
    </div>
  );
};

export default Home;
