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
    const [absentStudentList, setAbsentStudentList] = useState([]);

    const handleAttendanceClick = (id, type) => {
        setAttendance(prevState => ({
            ...prevState,
            [id]: type
        }));
        // Update absentStudentList in local storage
        if (type === 'absent') {
            const student = students.find(student => student.id === id);
            setAbsentStudentList(prevAbsentStudents => [...prevAbsentStudents, { id: student.id, name: student.name, mobile: student.mobile }]);
            localStorage.setItem('absentStudents', JSON.stringify(absentStudentList));
        }
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
            // Retrieve absent student details from local storage
            const absentStudentList = JSON.parse(localStorage.getItem('absentStudents'));

            // Check if absentStudentList is not null or undefined
            if (absentStudentList !== null && typeof absentStudentList === 'object') {
                // Convert absentStudentList into an array
                const absentStudentsArray = Object.values(absentStudentList);

                // Check if absentStudentsArray is an array
                if (Array.isArray(absentStudentsArray)) {
                    // Send messages to absent students
                    for (const student of absentStudentsArray) {
                        // Ensure that student data includes the 'mobile' property
                        if (student.mobile) {
                            await axios.post(`http://localhost:8000/api/send_sms`, {
                                to: student.mobile,
                                body: `Your ward ${student.name} is absent today.`
                            });
                            console.log(`Message sent to ${student.name}`);
                        } else {
                            console.error(`Mobile number not found for student ${student.name}`);
                        }
                    }

                    // Clear absent student list from local storage
                    localStorage.removeItem('absentStudents');
                } else {
                    console.error('Absent student list is not an array');
                }
            } else {
                console.error('Absent student list is null or undefined');
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
