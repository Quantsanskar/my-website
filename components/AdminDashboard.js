import React, { useState } from 'react';
import styles from '../styles/Attendance.module.css';

const students = [
    { id: 1, erpId: 'ERP001', name: 'John Doe' },
    { id: 2, erpId: 'ERP002', name: 'Jane Smith' },
    { id: 3, erpId: 'ERP003', name: 'Hari Kishan' },
    { id: 4, erpId: 'ERP004', name: 'Jatin Sharma' },
    { id: 5, erpId: 'ERP005', name: 'Apaar' },
    { id: 6, erpId: 'ERP006', name: 'Ramu Kaka' },
    { id: 7, erpId: 'ERP007', name: 'Sara Johnson' },
    { id: 8, erpId: 'ERP008', name: 'Michael Clark' },
    { id: 9, erpId: 'ERP009', name: 'Emily Brown' },
    { id: 10, erpId: 'ERP010', name: 'Daniel Wilson' },
    { id: 11, erpId: 'ERP011', name: 'Sophia Martinez' },
    { id: 12, erpId: 'ERP012', name: 'Ethan Taylor' },
    { id: 13, erpId: 'ERP013', name: 'Olivia Garcia' },
    { id: 14, erpId: 'ERP014', name: 'Mia Hernandez' },
    { id: 15, erpId: 'ERP015', name: 'Benjamin Lopez' },
    { id: 16, erpId: 'ERP016', name: 'Ella Martinez' },
    { id: 17, erpId: 'ERP017', name: 'Liam Jackson' },
    { id: 18, erpId: 'ERP018', name: 'Charlotte Thompson' },
    { id: 19, erpId: 'ERP019', name: 'Alexander White' },
    { id: 20, erpId: 'ERP020', name: 'Ava Lee' }
];


const Attendance = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const itemsPerPage = 5;

    // Initialize attendance state for each student
    const initialAttendanceState = students.map(() => '');
    const [attendance, setAttendance] = useState(initialAttendanceState);

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.erpId.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredStudents.slice(indexOfFirstItem, indexOfLastItem);

    const markAttendance = (index, status) => {
        const newAttendance = [...attendance]; // Create a copy of the current attendance array
        newAttendance[index] = status; // Update the status of the student at the specified index
        setAttendance(newAttendance); // Set the updated attendance array
    };

    const handleSubmit = () => {
        // Handle submission logic here
        console.log('Attendance submitted:', attendance);
    };

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className={styles.attendanceContainer}>
            <h2>Student Attendance</h2>
            <input
                type="text"
                placeholder="Search by name or ERP ID"
                className={styles.searchInput}
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <div className={styles.attendanceList}>
                {currentItems.map((student, index) => (
                    <div key={student.id} className={styles.student}>
                        <span>{student.erpId}</span>
                        <span>{student.name}</span>
                        <div>
                            <button
                                className={`${styles.button} ${attendance[indexOfFirstItem + index] === 'present' ? styles.present : ''}`}
                                onClick={() => markAttendance(indexOfFirstItem + index, 'present')}
                            >
                                Present
                            </button>
                            <button
                                className={`${styles.button} ${attendance[indexOfFirstItem + index] === 'absent' ? styles.absent : ''}`}
                                onClick={() => markAttendance(indexOfFirstItem + index, 'absent')}
                            >
                                Absent
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.pagination}>
                {filteredStudents.length > itemsPerPage && (
                    <ul className={styles.paginationList}>
                        {Array.from({ length: Math.ceil(filteredStudents.length / itemsPerPage) }, (_, i) => (
                            <li key={i} className={currentPage === i + 1 ? styles.active : ''}>
                                <button onClick={() => paginate(i + 1)}>{i + 1}</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className={styles.submitContainer}>
                <button type="submit" className={styles.submitButton} onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Attendance;
