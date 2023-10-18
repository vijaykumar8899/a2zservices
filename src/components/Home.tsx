import React from "react";
import "../styles/Home.css";

const sivanandhaswamyjiProfile: React.FC = () => {
  return (
    <div className="profile-container">
      <div className="image-container">
        <img
          src="..\assets\img2.jpeg"
          alt="image"
          className="sivanandhaswamy-image"
        />
      </div>
      <div className="bio-container">
        <div className="bio-heading">About Sadguru Sivananda Murthy</div>
        <div className="bio-content">
          Sri Sadguru Sivananda Murthy (1928-2015) was a renowned spiritual
          leader and philanthropist from India. He was born into a wealthy
          zamindari family in Rajahmundry, Andhra Pradesh, but renounced all his
          worldly possessions to pursue a spiritual path. He was drawn to
          Shaivism, and chose Warangal as his base, where he established his
          ashram, Gurudham.
        </div>
      </div>
    </div>
  );
};

export default sivanandhaswamyjiProfile;
