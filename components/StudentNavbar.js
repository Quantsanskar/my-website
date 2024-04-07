// Navbar.js
'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdmissionForm from '../components/AdmissionForm';
import styles from '../styles/StudentNavbar.module.css';
const Navbar = ({ scrollToLectures, scrollToNotes, scrollToTests }) => {
    const router = useRouter();


    const handleLogout = () => {
        router.push('/home');
        localStorage.clear();
        
    };
    const [isFormOpen, setIsFormOpen] = useState(false);

    const openForm = () => {
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
        document.body.classList.remove('decreased-light');
    };
    const handleProfile = () => {
        router.push('/studentProfile');
    }



    return (
        <div className={styles.navbarContainer}>
            <button className={styles.navbarButton} onClick={handleProfile}>Profile</button>
            <button className={styles.navbarButton} onClick={scrollToLectures}>Lectures</button>
            <button className={styles.navbarButton} onClick={scrollToNotes}>Notes</button>
            <button className={styles.navbarButton} onClick={scrollToTests}>Tests</button>

            <button className={styles.navbarButton} onClick={handleLogout}>Log Out</button>
            <button className={styles.navbarButton} onClick={openForm}>Contact</button>
            {isFormOpen && <div className={styles.admissionFormContainer}><AdmissionForm onClose={closeForm} /></div>}
        </div>
    );
};

export default Navbar;
