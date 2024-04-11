import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import axios from 'axios';
import styles from '../styles/TestsSection.module.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const TestsSection = () => {
    const [pdfs, setPdfs] = useState([]);
    const [selectedPdf, setSelectedPdf] = useState(null);
    const [numPages, setNumPages] = useState(null);

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/student');
                const student = response.data.find(item => item.username === localStorage.getItem('username'));

                if (student) {
                    const filteredTests = getFilteredTests(student.subjects);
                    setPdfs(filteredTests);
                } else {
                    throw new Error('Student not found');
                }
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        };

        const username = localStorage.getItem('username');
        if (username) {
            fetchStudentData();
        }
    }, []);

    const getFilteredTests = (studentSubjects) => {
        const dummyPdfs = [
            {
                subject: 'Physics11',
                chapters: [
                    {
                        title: 'Chapter 1',
                        tests: [
                            { title: 'Test 1', pdfUrl: '/Tests/Physics_Chapter_1_Test_1.pdf' },
                            { title: 'Test 2', pdfUrl: '/Tests/Physics_Chapter_1_Test_2.pdf' },
                        ]
                    },
                    {
                        title: 'Chapter 2',
                        tests: [
                            { title: 'Test 1', pdfUrl: '/Tests/Physics_Chapter_2_Test_1.pdf' },
                            { title: 'Test 2', pdfUrl: '/Tests/Physics_Chapter_2_Test_2.pdf' },
                        ]
                    },
                ]
            },
            {
                subject: 'Chemistry11',
                chapters: [
                    {
                        title: 'Chapter 1',
                        tests: [
                            { title: 'Test 1', pdfUrl: '/Tests/Physics_Chapter_1_Test_1.pdf' },
                            { title: 'Test 2', pdfUrl: '/Tests/Physics_Chapter_1_Test_2.pdf' },
                        ]
                    },
                    {
                        title: 'Chapter 2',
                        tests: [
                            { title: 'Test 1', pdfUrl: '/Tests/Physics_Chapter_2_Test_1.pdf' },
                            { title: 'Test 2', pdfUrl: '/Tests/Physics_Chapter_2_Test_2.pdf' },
                        ]
                    },
                ]
            },
            {
                subject: 'Maths11',
                chapters: [
                    {
                        title: 'Chapter 1',
                        tests: [
                            { title: 'Test 1', pdfUrl: '/Tests/Physics_Chapter_1_Test_1.pdf' },
                            { title: 'Test 2', pdfUrl: '/Tests/Physics_Chapter_1_Test_2.pdf' },
                        ]
                    },
                    {
                        title: 'Chapter 2',
                        tests: [
                            { title: 'Test 1', pdfUrl: '/Tests/Physics_Chapter_2_Test_1.pdf' },
                            { title: 'Test 2', pdfUrl: '/Tests/Physics_Chapter_2_Test_2.pdf' },
                        ]
                    },
                ]
            },
            {
                subject: 'ComputerScience11',
                chapters: [
                    {
                        title: 'Chapter 1',
                        tests: [
                            { title: 'Test 1', pdfUrl: '/Tests/Physics_Chapter_1_Test_1.pdf' },
                            { title: 'Test 2', pdfUrl: '/Tests/Physics_Chapter_1_Test_2.pdf' },
                        ]
                    },
                    {
                        title: 'Chapter 2',
                        tests: [
                            { title: 'Test 1', pdfUrl: '/Tests/Physics_Chapter_2_Test_1.pdf' },
                            { title: 'Test 2', pdfUrl: '/Tests/Physics_Chapter_2_Test_2.pdf' },
                        ]
                    },
                ]
            },
            {
                subject: 'Biology11',
                chapters: [
                    {
                        title: 'Chapter 1',
                        tests: [
                            { title: 'Test 1', pdfUrl: '/Tests/Physics_Chapter_1_Test_1.pdf' },
                            { title: 'Test 2', pdfUrl: '/Tests/Physics_Chapter_1_Test_2.pdf' },
                        ]
                    },
                    {
                        title: 'Chapter 2',
                        tests: [
                            { title: 'Test 1', pdfUrl: '/Tests/Physics_Chapter_2_Test_1.pdf' },
                            { title: 'Test 2', pdfUrl: '/Tests/Physics_Chapter_2_Test_2.pdf' },
                        ]
                    },
                ]
            },
            // Add more subjects and chapters as needed
        ];

        const filteredTests = dummyPdfs.filter(test =>
            studentSubjects.includes(test.subject)
        );
        return filteredTests;
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
            <div className={styles.subjectContainer}>
                {pdfs.map((subject, index) => (
                    <div key={index} className={styles.subjectSection}>
                        <h3>{subject.subject}</h3>
                        {subject.chapters.map((chapter, idx) => (
                            <div key={idx} className={styles.chapterContainer}>
                                <h4>{chapter.title}</h4>
                                <div className={styles.testsList}>
                                    {chapter.tests.map((test, testIdx) => (
                                        <div key={testIdx} className={styles.testItem} onClick={() => handlePdfClick(test)}>
                                            <p>{test.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
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
                            onContextMenu={(e) => e.preventDefault()}
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
