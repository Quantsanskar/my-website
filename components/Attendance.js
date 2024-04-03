// AttendancePage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/AttendancePage.module.css';

const AttendancePage = () => {
    const [students, setStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const studentsPerPage = 6;
    const [attendance, setAttendance] = useState({});

    const handleAttendanceClick = (id, type) => {
        setAttendance(prevState => ({
            ...prevState,
            [id]: type
        }));
    };


    useEffect(() => {
        // Fetch all students from backend API
        axios.get('http://localhost:8000/api/student')
            .then(response => {
                setStudents(response.data);
                setFilteredStudents(response.data);
            })
            .catch(error => console.error('Error fetching students:', error));
    }, []);

    useEffect(() => {
        // Filter students based on search query
        const filtered = students.filter(student =>
            student.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
            student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            student.clas.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredStudents(filtered);
    }, [searchQuery, students]);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };
    const markAttendance = (studentId, status) => {
        // Logic to mark attendance
        console.log(`Marking attendance for student ${studentId} as ${status}`);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Pagination
    const indexOfLastStudent = currentPage * studentsPerPage;
    const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
    const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);

    return (
        <div className={styles.attendancePage}>
            <div className={styles.searchBar}>
                <input
                    type="text"
                    className={styles.searchInput}
                    placeholder="Search by username, name, or class..."
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>
            <div className={styles.studentList}>
                {students.map(student => (
                    <div className={styles.studentCard} key={student.id}>
                        <h3>{student.name}</h3>
                        <p>Username: {student.username}</p>
                        <p>Class: {student.class}</p>
                        <button
                            className={`${styles.button} ${attendance[student.id] === 'present' ? styles.present : ''}`}
                            onClick={() => handleAttendanceClick(student.id, 'present')}
                        >
                            Present
                        </button>
                        <button
                            className={`${styles.button} ${attendance[student.id] === 'absent' ? styles.absent : ''}`}
                            onClick={() => handleAttendanceClick(student.id, 'absent')}
                        >
                            Absent
                        </button>
                    </div>
                ))}
            </div>
            <div className={styles.pagination}>
                {Array.from({ length: Math.ceil(filteredStudents.length / studentsPerPage) }, (_, index) => (
                    <button
                        key={index}
                        className={`${styles.pageNumber} ${currentPage === index + 1 ? styles.activePage : ''}`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AttendancePage;
