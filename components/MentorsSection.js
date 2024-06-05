import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './MentorsSection.module.css';

const Mentors = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/teacher');
                const filteredTeachers = response.data.filter(teacher => teacher.institutes.includes('A&G Academy'));
                setTeachers(filteredTeachers);
            } catch (error) {
                console.error('Error fetching teachers:', error);
            }
        };

        fetchTeachers();
    }, []);

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
