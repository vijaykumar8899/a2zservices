import React from "react";
import "../styles/Navbar.css"; // Import the CSS file

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">gurukrupaAtoZservices</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Realestate</li>
        <li>LIC</li>
        <li>Job Consultancy</li>
        <li>Banking Point</li>
      </ul>
    </nav>
  );
};

export default Navbar;
