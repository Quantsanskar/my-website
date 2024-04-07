import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import axios from 'axios'; // Import axios for making HTTP requests
import styles from '../styles/TestsSection.module.css'; // Import your CSS module file

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const TestsSection = () => {
    const [pdfs, setPdfs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedPdf, setSelectedPdf] = useState(null);
    const [numPages, setNumPages] = useState(null);

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                // Fetch student data from backend
                const response = await axios.get('http://127.0.0.1:8000/api/student');
                const student = response.data.find(item => item.username === localStorage.getItem('username'));

                if (student) {
                    // Filter tests based on student's subjects
                    const filteredTests = getFilteredTests(student.subjects);
                    setPdfs(filteredTests);
                } else {
                    throw new Error('Student not found');
                }
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        };

        // Call the fetchStudentData function only if username is available in localStorage
        const username = localStorage.getItem('username');
        if (username) {
            fetchStudentData();
        }
    }, []);

    const getFilteredTests = (studentSubjects) => {
        // Dummy PDF data
        const dummyPdfs = [
            {
                subject: 'Physics11',
                tests: [
                    { title: 'Electricity', pdfUrl: '/Notes/question paper 1.pdf' },
                    { title: 'Mechanical', pdfUrl: '/Tests/Physics_Chapter_2_Test_1.pdf' },
                    // Add more physics tests as needed
                ]
            },
            {
                subject: 'Chemistry11',
                tests: [
                    { title: 'Chapter 1 Test 1', pdfUrl: '/Tests/Chemistry_Chapter_1_Test_1.pdf' },
                    { title: 'Chapter 2 Test 1', pdfUrl: '/Tests/Chemistry_Chapter_2_Test_1.pdf' },
                    // Add more chem tests as needed
                ]
            },
            {
                subject: 'Biology11',
                tests: [
                    { title: 'Chapter 1 Test 1', pdfUrl: '/Tests/Biology_Chapter_1_Test_1.pdf' },
                    { title: 'Chapter 2 Test 1', pdfUrl: '/Tests/Biology_Chapter_2_Test_1.pdf' },
                    // Add more bio tests as needed
                ]
            },
            {
                subject: 'Maths11',
                tests: [
                    { title: 'Chapter 1 Test 1', pdfUrl: '/Tests/Maths_Chapter_1_Test_1.pdf' },
                    { title: 'Chapter 2 Test 1', pdfUrl: '/Tests/Maths_Chapter_2_Test_1.pdf' },
                    // Add more maths tests as needed
                ]
            },
            // Add more subjects with their respective tests
        ];

        // Filter tests based on the student's subjects
        const filteredTests = dummyPdfs.filter(test =>
            studentSubjects.includes(test.subject)
        );
        return filteredTests;
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handlePdfClick = (pdf) => {
        setSelectedPdf(pdf);
    };

    const handleClosePdf = () => {
        setSelectedPdf(null);
    };

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <div className={styles.container}>
            <h2>Tests</h2>
            {/* <div className={styles.searchContainer}>
                <input
                    type="text"
                    placeholder="Search test papers..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className={styles.searchInput}
                />
            </div> */}
            <div className={styles.subjectContainer}>
                {pdfs.map((subject, index) => (
                    <div key={index} className={styles.subjectSection}>
                        <h3>{subject.subject}</h3>
                        <div className={styles.testsList}>
                            {subject.tests.map((test, idx) => (
                                <div key={idx} className={styles.testItem} onClick={() => handlePdfClick(test)}>
                                    <h4>{test.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {selectedPdf && (
                <div className={styles.overlay}>
                    <div className={styles.testContainer}>
                        <button className={styles.closeBtn} onClick={handleClosePdf}>Close</button>
                        <Document
                            file={selectedPdf.pdfUrl}
                            onLoadSuccess={onDocumentLoadSuccess}
                            options={{
                                disableCopy: true,
                                disableDownload: true,
                                disablePrinting: true,
                            }}
                            onContextMenu={(e) => e.preventDefault()} // Prevent default context menu (right-click menu)
                        >
                            {Array.from(new Array(numPages), (_, index) => (
                                <Page
                                    key={`page_${index + 1}`}
                                    pageNumber={index + 1}
                                    renderTextLayer={false}
                                    renderAnnotationLayer={false}
                                />
                            ))}
                        </Document>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TestsSection;
