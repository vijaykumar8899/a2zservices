import React, { useState } from "react";
import "../styles/Popup.css";

const Popup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleRouteClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setShowPopup(false);
  };

  return (
    <div className={`popup ${showPopup ? "show" : "hide"}`}>
      <div className="popup-content">
        <button className="close-button" onClick={handleClosePopup}>
          ×
        </button>
        <div className="route-container">
          <div className="row">
            <div className="route">
              <h2>Realestate</h2>
              <p>Checkout ready house deals</p>
              <a href="/route1" onClick={handleRouteClick}>
                Go to Route 1
              </a>
            </div>
            <div className="route">
              <h2>LIC</h2>
              <p>Get information about your LIC today</p>
              <a href="/route2" onClick={handleRouteClick}>
                Go to Route 2
              </a>
            </div>
          </div>
          <div className="row">
            <div className="route">
              <h2>Job Consultancy</h2>
              <p>Latest job related information</p>
              <a href="/route3" onClick={handleRouteClick}>
                Go to Route 3
              </a>
            </div>
            <div className="route">
              <h2>Banking Point</h2>
              <p>Checkout our banking services today</p>
              <a href="/route4" onClick={handleRouteClick}>
                Go to Route 4
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
