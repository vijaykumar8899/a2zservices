import React from "react";
import "../styles/Home.css";

const sivanandhaswamyjiProfile: React.FC = () => {
  return (
    <div className="profile-container">
      <div className="image-container">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/touchweb-c6e16.appspot.com/o/replicate-img2.jpeg?alt=media&token=845dea8d-61a8-4aa2-a34d-398d98b49f84&_gl=1*1vhk7zf*_ga*MTQ0Njc1NzE2Ny4xNjkxNzU3NDc1*_ga_CW55HF8NVT*MTY5NzY5MzM3NS4xNzUuMS4xNjk3NjkzNDYwLjQ2LjAuMA.."
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
