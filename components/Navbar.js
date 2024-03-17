// Navbar.js
import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleSignIn = () => {
    setIsSignInOpen(!isSignInOpen);
  };

  const closeSignIn = () => {
    setIsSignInOpen(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu(); // Close the menu after scrolling
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <div className={isOpen ? styles.menuIconOpen : styles.menuIconBar}></div>
        <div className={isOpen ? styles.menuIconOpen : styles.menuIconBar}></div>
        <div className={isOpen ? styles.menuIconOpen : styles.menuIconBar}></div>
      </div>
      <ul className={isOpen ? `${styles.navList} ${styles.open}` : styles.navList}>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink} onClick={() => scrollToSection('about-us')}>
            About Us
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink} onClick={() => scrollToSection('location')}>
            Location
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink} onClick={() => scrollToSection('mentors')}>
            Our Mentors
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink} onClick={() => scrollToSection('admission-button')}>
            Join and Apply
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink} onClick={toggleSignIn}>
            Sign In as Student
          </a>
        </li>
      </ul>
      {isOpen && <button className={styles.closeButton} onClick={closeMenu}>Close</button>}
      {isSignInOpen && (
        <div className={styles.signInOverlay}>
          <div className={styles.signInForm}>
            <button className={styles.closeSignIn} onClick={closeSignIn}>X</button>
            <h2>Sign In</h2>
            <form>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button type="submit">Sign In</button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
