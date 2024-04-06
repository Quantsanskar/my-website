import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import '../styles/mainNavbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/agency">Agency</Link></li>
        <li><Link to="/location">Location</Link></li>
        <li><Link to="/owners">Owners</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
