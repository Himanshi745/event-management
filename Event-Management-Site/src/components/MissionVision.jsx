import React from "react";
import "./MissionVision.css"; // Link to your CSS file

const MissionVision = () => {
  return (
    <div className="mission-vision-container">
      {/* Mission */}
      <div className="mv-row">
        <div className="mv-title">
          <span className="mv-icon">🎯</span>
          <h3>Our Mission</h3>
        </div>
        <div className="mv-content">
          <p>
            To craft extraordinary events that inspire, engage, and leave a lasting impression—while ensuring flawless execution and maximum client satisfaction.
          </p>
        </div>
      </div>

      {/* Vision */}
      <div className="mv-row">
        <div className="mv-title">
          <span className="mv-icon">👁️</span>
          <h3>Our Vision</h3>
        </div>
        <div className="mv-content">
          <p>
            To become a nationally recognized leader in the event industry by setting new standards of excellence, creativity, and professionalism.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
