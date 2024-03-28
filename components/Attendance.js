// Attendance.js
import React, { useState } from 'react';
import styles from '../styles/Attendance.module.css';

const students = [
    { id: 1, erpId: 'ERP001', name: 'John Doe' },
    { id: 2, erpId: 'ERP002', name: 'Jane Smith' },
    { id: 3, erpId: 'ERP003', name: 'Hari Kishan' },
    { id: 4, erpId: 'ERP004', name: 'Jatin Sharma' },
    { id: 5, erpId: 'ERP005', name: 'Apaar Chutiya' },
    { id: 6, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 7, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 8, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 9, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 10, erpId: 'ERP007', name: 'Ramu Kaka' }
    // Add more students as needed
];

const Attendance = () => {
    const [attendance, setAttendance] = useState(new Array(students.length).fill('')); // Initialize attendance array

    const markAttendance = (index, status) => {
        const newAttendance = [...attendance];
        newAttendance[index] = status;
        setAttendance(newAttendance);
    };

    const handleSubmit = () => {
        // Handle submission logic here
        console.log('Attendance submitted:', attendance);
    };

    return (
        <div className={styles.attendanceContainer}>
            <h2>Student Attendance</h2>
            <div className={styles.attendanceList}>
                {students.map((student, index) => (
                    <div key={student.id} className={styles.student}>
                        <span>{student.erpId}</span>
                        <span>{student.name}</span>
                        <div>
                            <button
                                className={`${styles.button} ${attendance[index] === 'present' ? styles.present : ''}`}
                                onClick={() => markAttendance(index, 'present')}
                            >
                                Present
                            </button>
                            <button
                                className={`${styles.button} ${attendance[index] === 'absent' ? styles.absent : ''}`}
                                onClick={() => markAttendance(index, 'absent')}
                            >
                                Absent
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.submitContainer}>
                <button type="submit" className={styles.submitButton}>Submit</button>

            </div>
        </div>
    );
};

export default Attendance;
