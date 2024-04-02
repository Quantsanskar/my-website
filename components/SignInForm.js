// SignInForm.js
import React, { useState } from 'react';
import styles from '../styles/SignInForm.module.css';
import { useRouter } from 'next/router';

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
      const response = await fetch('http://127.0.0.1:8000/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        // Redirect to student dashboard on successful authentication
        router.push('/StudentDashboard');
      } else {
        setError(data.error || 'Invalid username or password');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An unexpected error occurred');
    }
    closeSignIn(); // Close the sign-in form
  };

  return (
    <div className={styles.signInOverlay}>
      <div className={styles.signInForm}>
        <button className={styles.closeSignIn} onClick={closeSignIn}>X</button>
        <h2 className={styles.signinTitle} >Sign In</h2>
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
