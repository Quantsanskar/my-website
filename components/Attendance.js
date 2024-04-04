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

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSubmit = async () => {
        try {
            // Retrieve details of absent students from backend API
            const absentStudentDetails = await axios.get('http://localhost:8000/api/student');

            // Extract mobile numbers and names of absent students
            const absentStudentsData = absentStudentDetails.data;

            // Filter absent students based on attendance status
            const absentStudents = Object.keys(attendance)
                .filter(id => attendance[id] === 'absent')
                .map(id => absentStudentsData.find(student => student.id === id));

            // Send messages to absent students
            for (const student of absentStudents) {
                await axios.post('http://localhost:8000/api/send_sms/+917289939775/"fghfhyfhyjjyvjy"', {
                    phoneNumber: '7289939775',
                    message: `Your ward Sanskar is absent today.`
                });
                console.log(`Message sent to ${student.name}`);
            }
        } catch (error) {
            console.error('Failed to send messages to absent students:', error);
        }
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
                {currentStudents.map(student => (
                    <div className={styles.studentCard} key={student.id}>
                        <h3>{student.name}</h3>
                        <p>Username: {student.username}</p>
                        <p>Class: {student.clas}</p>
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
            <div className={styles.submitButtonContainer}>
                <button className={styles.submitButton} onClick={handleSubmit}>Send Messages to Absent Students</button>
            </div>
        </div>
    );
};

export default AttendancePage;
