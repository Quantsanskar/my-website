import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Teachers.module.css';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    const [filteredTeachers, setFilteredTeachers] = useState([]);
    const [selectedTeacher, setSelectedTeacher] = useState(null);

    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/teacher');
                setTeachers(response.data);
            } catch (error) {
                console.error('Error fetching teachers:', error);
            }
        };

        fetchTeachers();
    }, []);

    const handleTeacherSelect = (teacher) => {
        const institutes = Array.isArray(teacher.institutes) ? teacher.institutes : [teacher.institutes];
        setFilteredTeachers(institutes);
        setSelectedTeacher(teacher);
    };

    const resetSelection = () => {
        setFilteredTeachers([]);
        setSelectedTeacher(null);
    };

    return (
        <div className={styles.teachers}>
            {!selectedTeacher && (
                <h2 className={styles.title}>Our Teachers</h2>
            )}
            {selectedTeacher && (
                <div className={styles.teacherDetails}>
                    <h3>{selectedTeacher.name}</h3>
                    <p><strong>Subject:</strong> {selectedTeacher.subject}</p>
                    <p><strong>Experience:</strong> {selectedTeacher.experience} Years</p>
                    <p><strong>Achievements:</strong> {selectedTeacher.achievements}</p>
                    <button className={styles.resetBtn} onClick={resetSelection}>Reset</button>
                </div>
            )}
            <div className={styles.teacherList}>
                {selectedTeacher ? (
                    <div className={styles.teacherDetails}>
                        <table className={styles.institutesTable}>
                            <thead>
                                <tr>
                                    <th>Institutes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredTeachers.map((institute, index) => (
                                    <tr key={index}>
                                        <td>{institute}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    teachers.map(teacher => (
                        <div key={teacher.id} className={styles.teacher} onClick={() => handleTeacherSelect(teacher)}>
                            <h3 className={styles.teacherName}>{teacher.name}</h3>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Teachers;
