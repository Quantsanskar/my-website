// Navbar.js
import React, { useState } from 'react';
import SignInForm from '../components/SignInForm';
import AdminForm from '../components/AdminForm';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isAdminFormOpen, setIsAdminFormOpen] = useState(false);

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

  const toggleAdminForm = () => {
    setIsAdminFormOpen(!isAdminFormOpen);
  };

  const closeAdminForm = () => {
    setIsAdminFormOpen(false);
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
        {/* <li className={styles.navItem}>
          <a href="#" className={styles.navLink} onClick={() => scrollToSection('about-us')}>
            About Us
          </a>
        </li> */}
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
        {/* <li className={styles.navItem}>
          <a href="#" className={styles.navLink} onClick={() => scrollToSection('admission-button')}>
            Join and Apply
          </a>
        </li> */}
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink} onClick={toggleSignIn}>
            Sign In as Student
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink} onClick={toggleAdminForm}>
            Admin Access
          </a>
        </li>
      </ul>
      {isOpen && <button className={styles.closeButton} onClick={closeMenu}>X</button>}
      <SignInForm isSignInOpen={isSignInOpen} closeSignIn={closeSignIn} />
      {isAdminFormOpen && <AdminForm isFormOpen={isAdminFormOpen} closeForm={closeAdminForm} />}
    </nav>
  );
};

export default Navbar;
