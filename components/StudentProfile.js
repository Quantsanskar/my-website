// StudentProfile.js

import React, { useState, useEffect } from 'react';
import styles from '../styles/StudentProfile.module.css';

const Profile = () => {
    // List of random profile image URLs
    const profileImages = [

        'https://tse2.mm.bing.net/th?id=OIP.4gTf3rPL53ihJ4QdiP8FzwHaJ4&pid=Api&P=0&h=180'

        // Add more image URLs as needed
    ];

    // Randomly select a profile image URL
    const randomImage = profileImages[Math.floor(Math.random() * profileImages.length)];
    // Dummy student data
    const [student, setStudent] = useState({
        name: 'Elina Smith',
        age: 20,
        course: 'Computer Science',
        address: '123 Main St, City',
        phoneNumber: '123-456-7890',
        attendancePercentage: 85,
        performanceRate: 8.5,
    });

    useEffect(() => {
        // Fetch student data from the backend here if needed
    }, []);

    return (
        <div className={styles.profileContainer}>
            <div className={styles.profileHeader}>
                <div className={styles.profileImage} style={{ backgroundImage: `url(${randomImage})` }}></div> {/* Circular frame for profile image */}
            </div>
            <div className={styles.profileDetails}>
                <h2>Student Profile</h2>
                <div className={styles.details}>
                    <p><strong>Name:</strong> {student.name}</p>
                    <p><strong>Age:</strong> {student.age}</p>
                    <p><strong>Course:</strong> {student.course}</p>
                    <p><strong>Address:</strong> {student.address}</p>
                    <p><strong>Phone Number:</strong> {student.phoneNumber}</p>
                    <p><strong>Attendance Percentage:</strong> {student.attendancePercentage}%</p>
                    <p><strong>Overall Performance:</strong> {student.performanceRate}/10</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
