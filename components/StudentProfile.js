import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import styles from '../styles/StudentProfile.module.css';

const Profile = () => {
    const [student, setStudent] = useState(null);

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                // Fetch student data from the backend
                const response = await axios.get('http://localhost:8000/api/student'); // Update URL accordingly
                const loggedInStudent = response.data.find(student => student.username === localStorage.getItem('username'));

                if (loggedInStudent) {
                    setStudent(loggedInStudent);
                } else {
                    throw new Error('Student not found');
                }
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        };

        // Call fetchStudentData function when the component mounts
        fetchStudentData();
    }, []);

    return (
        <div className={styles.profileContainer}>
           
            <div className={styles.profileDetails}>
                <h2>Student Profile</h2>
                {student && (
                    <div className={styles.details}>
                        <p><strong>Name:</strong> {student.name}</p>

                        <p><strong>Class:</strong> {student.clas}</p>
                        <p><strong>Stream:</strong> {student.stream}</p>
                        <p><strong>Subjects:</strong> {student.subjects}</p>
                        <p><strong>Phone Number:</strong> {student.mobile}</p>


                        <p><strong>Email:</strong> {student.email}</p>


                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
