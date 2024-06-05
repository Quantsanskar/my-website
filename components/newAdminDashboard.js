// AdminDashboard.js

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/AdminDashboard.module.css'; // Import CSS file for styling

const AdminDashboard = () => {
  const router = useRouter();

  const [greeting, setGreeting] = useState('');

  const handleLogout = () => {
    router.push('/home');
    localStorage.clear();
  };

  useEffect(() => {
    const currentTime = new Date().getHours();
    let greeting = '';
    if (currentTime < 12) {
      greeting = 'Good Morning';
    } else if (currentTime < 18) {
      greeting = 'Good Afternoon';
    } else if (currentTime < 21) {
      greeting = 'Good Evening';
    } else if (currentTime < 24) {
      greeting = 'Good Night'
    }

    setGreeting(greeting); // Update the greeting state
  }, []);
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        // Check if user is authenticated (you need to implement this logic)
        const isAuthenticated = localStorage.getItem('username'); // Example: Check for authentication token

        if (!isAuthenticated) {
          router.push('/home'); // Redirect to sign-in page if not authenticated
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Check authentication when the component mounts
    checkAuthentication();
  }, [router]);

  return (
    <div className={styles.adminDashboard}>
      <div className={styles.navbarContainer}> {/* Enclosing container for the navbar */}
        <div className={styles.greeting}>{greeting}</div>
        <nav className={styles.navbar}>
          <ul className={styles.navbarList}>
            <li onClick={() => router.push('/attendance')}>Attendance</li>
            <li>Students List</li>
            <li>Teachers List</li>
            <li onClick={()=> router.push('/AdminUploadMarks')}>Upload Marks</li>
            <button className={styles.navbarLogOutButton} onClick={handleLogout}>Log Out</button>
          </ul>
        </nav>
      </div>
      {/* <div className={styles.mainContent}>
         Your fancy content goes here 
      </div> */}
    </div>
  );
};

export default AdminDashboard;
