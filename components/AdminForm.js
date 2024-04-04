// AdminForm.js
'use client'
import React, { useState } from 'react';
import styles from '../styles/AdminForm.module.css';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const AdminForm = ({ isFormOpen, closeForm }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          // Fetch all usernames and passwords from the backend
          const response = await axios.get('http://127.0.0.1:8000/api/admin');
          const admins = response.data;
    
          // Iterate through each student to find a matching username and password
          for (const admin of admins) {
            if (admin.username === username && admin.password === password) {
              
              router.push('/admin');
              return; // Exit the loop
            }
          }
          // If no match is found, display an error message
          setError('Invalid username or password');
        } catch (error) {
          console.error('Error:', error);
          setError('An unexpected error occurred');
        }
      };

    return (
        <div className={`${styles.adminFormOverlay} ${isFormOpen ? styles.showForm : ''}`}>
            <form className={styles.adminForm} onSubmit={handleSubmit}>
                <button className={styles.closeButton} type="button" onClick={closeForm}>X</button>
                <h2 className={styles.formTitle}>Admin Access</h2>
                <div className={styles.formGroup}>
                    <input
                        type="text"
                        className={styles.inputField}
                        placeholder="Admin User"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <input
                        type="password"
                        className={styles.inputField}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className={styles.submitButton}>Submit</button>
            </form>
        </div>
    );
};

export default AdminForm;
