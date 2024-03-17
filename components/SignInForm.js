// SignInForm.js
import React, { useState } from 'react';
import styles from '../styles/SignInForm.module.css';

const SignInForm = ({ onClose }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle sign-in logic
        console.log('Username:', username);
        console.log('Password:', password);
        onClose(); // Close the sign-in form
    };

    return (
        <div className={styles.signInOverlay}>
            <div className={styles.signInContainer}>
                <button className={styles.closeButton} onClick={onClose}>X</button>
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit} className={styles.signInForm}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={styles.inputField}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.inputField}
                    />
                    <button type="submit" className={styles.signInButton}>Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default SignInForm;
