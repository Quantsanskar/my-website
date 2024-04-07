import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import axios from 'axios'; // Import axios for making HTTP requests
import styles from '../styles/NewNotesSection.module.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const NotesSection = () => {
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
                    // Filter notes based on student's subjects
                    const filteredNotes = getFilteredNotes(student.subjects);
                    setPdfs(filteredNotes);
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

    const getFilteredNotes = (studentSubjects) => {
        // Dummy PDF data
        const dummyPdfs = [
            {
                subject: 'Physics11',
                notes: [
                    { title: 'Chapter 1 Note 1', pdfUrl: '/Notes/2 Marks ( Pharmaceutics ).pdf' },
                    { title: 'Chapter 2 Note 1', pdfUrl: '/pdfs/physics_note_2.pdf' },
                    // Add more physics notes as needed
                ]
            },
            {
                subject: 'Chemistry11',
                notes: [
                    { title: 'Chapter 1 Note 1', pdfUrl: '/Notes/2 Marks ( Pharmaceutics ).pdf' },
                    { title: 'Chapter 2 Note 1', pdfUrl: '/pdfs/physics_note_2.pdf' },
                    // Add more chem notes as needed
                ]
            },
            {
                subject: 'Biology11',
                notes: [
                    { title: 'Chapter 1 Note 1', pdfUrl: '/Notes/2 Marks ( Pharmaceutics ).pdf' },
                    { title: 'Chapter 2 Note 1', pdfUrl: '/pdfs/physics_note_2.pdf' },
                    // Add more bio notes as needed
                ]
            },
            {
                subject: 'Maths11',
                notes: [
                    { title: 'Chapter 1 Note 1', pdfUrl: '/Notes/2 Marks ( Pharmaceutics ).pdf' },
                    { title: 'Chapter 2 Note 1', pdfUrl: '/pdfs/physics_note_2.pdf' },
                    // Add more maths notes as needed
                ]
            },
            // Add more subjects with their respective notes
        ];

        // Filter notes based on the student's subjects
        const filteredNotes = dummyPdfs.filter(note =>
            studentSubjects.includes(note.subject)
        );
        return filteredNotes;
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
            <h2>Notes</h2>
            {/* <div className={styles.searchContainer}>
                <input
                    type="text"
                    placeholder="Search lecture notes..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className={styles.searchInput}
                />
            </div> */}
            <div className={styles.subjectContainer}>
                {pdfs.map((subject, index) => (
                    <div key={index} className={styles.subjectSection}>
                        <h3>{subject.subject}</h3>
                        <div className={styles.notesList}>
                            {subject.notes.map((note, idx) => (
                                <div key={idx} className={styles.noteItem} onClick={() => handlePdfClick(note)}>
                                    <h4>{note.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {selectedPdf && (
                <div className={styles.overlay}>
                    <div className={styles.noteContainer}>
                        <button className={styles.closeBtn} onClick={handleClosePdf}>Close</button>
                        <Document
                            file={selectedPdf.pdfUrl}
                            onLoadSuccess={onDocumentLoadSuccess}
                            options={{
                                disableCopy: true,
                                disableDownload: true,
                                disablePrinting: true,
                                disableScreenshot: true,
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

export default NotesSection;
