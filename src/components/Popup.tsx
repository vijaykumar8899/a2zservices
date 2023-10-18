import React, { useState } from "react";
import "../styles/Popup.css";

const Popup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={`popup ${showPopup ? "show" : "hide"}`}>
      <div className="popup-content">
        <button className="close-button" onClick={handleClosePopup}>
          ×
        </button>
        <div className="container">
          <h2>Container 1</h2>
          <p>Content for container 1</p>
          <a href="/route1">Go to Route 1</a>
        </div>
        <div className="container">
          <h2>Container 2</h2>
          <p>Content for container 2</p>
          <a href="/route2">Go to Route 2</a>
        </div>
        <div className="container">
          <h2>Container 3</h2>
          <p>Content for container 3</p>
          <a href="/route3">Go to Route 3</a>
        </div>
        <div className="container">
          <h2>Container 4</h2>
          <p>Content for container 4</p>
          <a href="/route4">Go to Route 4</a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
