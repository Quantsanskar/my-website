// AdminDashboard.js

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/AdminDashboard.module.css'; // Import CSS file for styling

const AdminDashboard = () => {
  const router = useRouter();
  const [greeting, setGreeting] = useState('');

  const handleLogout = () => {
    router.push('/home');
  };

  useEffect(() => {
    const currentTime = new Date().getHours();
    let greeting = '';
    if (currentTime < 12) {
      greeting = 'Good Morning';
    } else if (currentTime < 18) {
      greeting = 'Good Afternoon';
    } else {
      greeting = 'Good Evening';
    }
    setGreeting(greeting); // Update the greeting state
  }, []);

  return (
    <div className={styles.adminDashboard}>
      <div className={styles.navbarContainer}> {/* Enclosing container for the navbar */}
        <div className={styles.greeting}>{greeting}</div>
        <nav className={styles.navbar}>
          <ul className={styles.navbarList}>
            <li onClick={() => router.push('/attendance')}>Attendance</li>
            <li>Students List</li>
            <li>Teachers List</li>
            <li>Upload Marks</li>
            <button className={styles.navbarLogOutButton} onClick={handleLogout}>Log Out</button>
          </ul>
        </nav>
      </div>
      <div className={styles.mainContent}>
        {/* Your fancy content goes here */}
      </div>
    </div>
  );
};

export default AdminDashboard;
