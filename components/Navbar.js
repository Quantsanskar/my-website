
import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
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
      </ul>
      {isOpen && <button className={styles.closeButton} onClick={closeMenu}>Close</button>}
    </nav>
  );
};

export default Navbar;
