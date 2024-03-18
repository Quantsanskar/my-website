// AdminForm.js
import React, { useState } from 'react';
import styles from '../styles/AdminForm.module.css';

const AdminForm = ({ isFormOpen, closeForm }) => {
    const [adminUser, setAdminUser] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic for handling form submission here
        console.log('Admin User:', adminUser);
        console.log('Password:', password);
        // Close the form after submission
        closeForm();
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
                        value={adminUser}
                        onChange={(e) => setAdminUser(e.target.value)}
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
