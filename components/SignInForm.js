// SignInForm.js
import React, { useState } from 'react';
import styles from '../styles/SignInForm.module.css';

const SignInForm = ({ isSignInOpen, closeSignIn }) => {
    if (!isSignInOpen) {
      return null; // Return null if sign-in form is not open
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle sign-in logic
        console.log('Username:', username);
        console.log('Password:', password);
        onClose(); // Close the sign-in form
    };

    return (
        <div className={styles.signInOverlay}>
          <div className={styles.signInForm}>
            <button className={styles.closeSignIn} onClick={closeSignIn}>X</button>
            <h2 className={styles.signinTitle} >Sign In</h2>
            <form className={styles.signinForm}>
              <input type="text" className={styles.signinField} placeholder="Username" />
              <input type="password" className={styles.signinField} placeholder="Password" />
              <button type="submit" className={styles.signinSubmit}>Sign In</button>
            </form>
          </div>
        </div>
    );
};


export default SignInForm;
