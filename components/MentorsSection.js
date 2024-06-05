// Mentors.js
import React from 'react';
import styles from './MentorsSection.module.css';

const Mentors = () => {
    const teachers = [
        { id: 1, name: 'John Doe', subject: 'Mathematics', experience: '10 years' },
        { id: 2, name: 'Jane Smith', subject: 'Physics', experience: '8 years' },
        { id: 3, name: 'Alice Johnson', subject: 'Biology', experience: '12 years' },
        // Add more teachers as needed
    ];

    return (
        <div className={styles.mentors}>
            <h2 className={styles.title}>Our Mentors</h2>
            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Subject</th>
                            <th>Experience</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teachers.map(teacher => (
                            <tr key={teacher.id}>
                                <td>{teacher.name}</td>
                                <td>{teacher.subject}</td>
                                <td>{teacher.experience}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Mentors;
