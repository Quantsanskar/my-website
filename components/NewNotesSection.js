import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import axios from 'axios';
import styles from '../styles/NewNotesSection.module.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const NotesSection = () => {
    const [pdfs, setPdfs] = useState([]);
    const [selectedPdf, setSelectedPdf] = useState(null);
    const [numPages, setNumPages] = useState(null);

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/student');
                const student = response.data.find(item => item.username === localStorage.getItem('username'));

                if (student) {
                    const filteredNotes = getFilteredNotes(student.subjects);
                    setPdfs(filteredNotes);
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

    const getFilteredNotes = (studentSubjects) => {
        const dummyPdfs = [
            {
                subject: 'Physics11',
                chapters: [
                    {
                        title: 'Chapter 1',
                        notes: [
                            { title: 'Note 1', pdfUrl: '/Notes/2 Marks ( Pharmaceutics ).pdf' },
                            { title: 'Note 2', pdfUrl: '/pdfs/physics_note_2.pdf' },
                        ]
                    },
                    {
                        title: 'Chapter 2',
                        notes: [
                            { title: 'Note 1', pdfUrl: '/Notes/2 Marks ( Pharmaceutics ).pdf' },
                            { title: 'Note 2', pdfUrl: '/pdfs/physics_note_2.pdf' },
                        ]
                    },
                ]
            },
            {
                subject: 'Chemistry11',
                chapters: [
                    {
                        title: 'Chapter 1',
                        notes: [
                            { title: 'Note 1', pdfUrl: '/Notes/2 Marks ( Pharmaceutics ).pdf' },
                            { title: 'Note 2', pdfUrl: '/pdfs/physics_note_2.pdf' },
                        ]
                    },
                    {
                        title: 'Chapter 2',
                        notes: [
                            { title: 'Note 1', pdfUrl: '/Notes/2 Marks ( Pharmaceutics ).pdf' },
                            { title: 'Note 2', pdfUrl: '/pdfs/physics_note_2.pdf' },
                        ]
                    },
                ]
            },
            // Add more subjects and chapters as needed
        ];

        const filteredNotes = dummyPdfs.filter(note =>
            studentSubjects.includes(note.subject)
        );
        return filteredNotes;
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
            <div className={styles.subjectContainer}>
                {pdfs.map((subject, index) => (
                    <div key={index} className={styles.subjectSection}>
                        <h3>{subject.subject}</h3>
                        {subject.chapters.map((chapter, idx) => (
                            <div key={idx} className={styles.chapterContainer}>
                                <h4>{chapter.title}</h4>
                                <div className={styles.notesContainer}>
                                    {chapter.notes.map((note, noteIdx) => (
                                        <div key={noteIdx} className={styles.noteItem} onClick={() => handlePdfClick(note)}>
                                            <p>{note.title}</p>
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

export default NotesSection;
