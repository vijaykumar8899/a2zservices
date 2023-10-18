// Navbar.tsx

import React from "react";
import "../styles/Navbar.css"; // Import the CSS file

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">Your Logo</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
