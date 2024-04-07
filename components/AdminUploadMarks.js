// UploadMarks.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/AdminUploadMarks.module.css';

const UploadMarks = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch list of students from API
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/student');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  // Filter students based on search term
  useEffect(() => {
    const filtered = students.filter(student => {
      return (
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.clas.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredStudents(filtered);
  }, [searchTerm, students]);

  // Group students by class
  const groupedStudents = filteredStudents.reduce((acc, student) => {
    const { clas: studentClass } = student;
    if (!acc[studentClass]) {
      acc[studentClass] = [];
    }
    acc[studentClass].push(student);
    return acc;
  }, {});

  return (
    <div className={styles.uploadMarksContainer}>
      <h2>Upload Marks</h2>
      <input
        type="text"
        placeholder="Search by name, username, or class"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {Object.entries(groupedStudents).map(([classKey, classStudents]) => (
        <div key={classKey} className={styles.classSection}>
          <h3>Class {classKey}</h3>
          <div className={styles.studentSections}>
            {classStudents.map(student => (
              <div key={student.id} className={styles.studentSection}>
                <h4>{student.name}</h4>
                <p>Username: {student.username}</p>
                <div className={styles.marksForm}>
                  <input type="text" placeholder="Topic" />
                  <input type="text" placeholder="Total Marks" />
                  <input type="text" placeholder="Marks Obtained" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button className={styles.submitButton}>Submit</button>
    </div>
  );
};

export default UploadMarks;
