import React, { useState } from 'react';
import styles from '../styles/SignInForm.module.css';
import { useRouter } from 'next/router';
import axios from 'axios';
import passwordHash from 'password-hash';

const SignInForm = ({ isSignInOpen, closeSignIn }) => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!isSignInOpen) {
    return null; // Return null if sign-in form is not open
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Fetch all usernames and passwords from the backend
      const response = await axios.get('http://127.0.0.1:8000/api/student');
      const students = response.data;

      // Iterate through each student to find a matching username and password
      for (const student of students) {
        if (student.username === username && student.password === password) {
          // If a match is found, redirect to the student dashboard
          localStorage.setItem('username', username);
          router.push('/StudentDashboard');
          return; // Exit the loop
        }
      }

      // If no match is found, display an error message
      setError('Invalid username or password');
    } catch (error) {
      console.error('Error:', error);
      setError('An unexpected error occurred');
    }
    closeSignIn();
  };

  return (
    <div className={styles.signInOverlay}>
      <div className={styles.signInForm}>
        <button className={styles.closeSignIn} onClick={closeSignIn}>X</button>
        <h2 className={styles.signinTitle}>Sign In</h2>
        <form className={styles.signinForm} onSubmit={handleSubmit}>
          <input type="text" className={styles.signinField} placeholder="Username" required onChange={(e) => setUsername(e.target.value)} />
          <input type="password" className={styles.signinField} placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className={styles.signinSubmit}>Sign In</button>
        </form>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
};

export default SignInForm;