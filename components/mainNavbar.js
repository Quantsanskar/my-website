import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import '../styles/mainNavbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Agency</li>
        <li>Location</li>
        <li>Owners</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
