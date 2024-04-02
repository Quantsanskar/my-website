import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import styles from '../styles/NewNotesSection.module.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const NotesSection = () => {
    const [pdfs, setPdfs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedPdf, setSelectedPdf] = useState(null);
    const [numPages, setNumPages] = useState(null);
    // const pdfViewerRef = useRef(null);
    useEffect(() => {
        // Fetch PDF data and set it to the pdfs state
        // Dummy PDF data
        const dummyPdfs = [
            {
                subject: 'Physics',
                notes: [
                    { title: 'Chapter 1 Note 1', pdfUrl: '/Notes/2 Marks ( Pharmaceutics ).pdf' },
                    { title: 'Chapter 2 Note 1', pdfUrl: '/pdfs/physics_note_2.pdf' },
                    { title: 'Chapter 2 Note 1', pdfUrl: '/pdfs/physics_note_2.pdf' },
                    { title: 'Chapter 2 Note 1', pdfUrl: '/pdfs/physics_note_2.pdf' },
                    { title: 'Chapter 2 Note 1', pdfUrl: '/pdfs/physics_note_2.pdf' },
                    { title: 'Chapter 2 Note 1', pdfUrl: '/pdfs/physics_note_2.pdf' },
                    // Add more physics notes as needed
                ]
            },
            {
                subject: 'Chemistry',
                notes: [
                    { title: 'Chapter 1 Note 1', pdfUrl: '/Notes/2 Marks ( Pharmaceutics ).pdf' },
                    { title: 'Chapter 2 Note 1', pdfUrl: '/pdfs/physics_note_2.pdf' },
                    { title: 'Chapter 2 Note 1', pdfUrl: '/pdfs/physics_note_2.pdf' },
                    { title: 'Chapter 2 Note 1', pdfUrl: '/pdfs/physics_note_2.pdf' },
                    { title: 'Chapter 2 Note 1', pdfUrl: '/pdfs/physics_note_2.pdf' },
                    { title: 'Chapter 2 Note 1', pdfUrl: '/pdfs/physics_note_2.pdf' },
                    // Add more chem notes as needed
                ]
            },
            {
                subject: 'Biology',
                notes: [
                    { title: 'Chapter 1 Note 1', pdfUrl: '/Notes/2 Marks ( Pharmaceutics ).pdf' },
                    { title: 'Chapter 2 Note 1', pdfUrl: '/pdfs/physics_note_2.pdf' },
                    { title: 'Chapter 2 Note 1', pdfUrl: '/pdfs/physics_note_2.pdf' },
                    { title: 'Chapter 2 Note 1', pdfUrl: '/pdfs/physics_note_2.pdf' },
                    { title: 'Chapter 2 Note 1', pdfUrl: '/pdfs/physics_note_2.pdf' },
                    { title: 'Chapter 2 Note 1', pdfUrl: '/pdfs/physics_note_2.pdf' },
                    // Add more bio notes as needed
                ]
            },
            {
                subject: 'Maths',
                notes: [
                    { title: 'Chapter 1 Note 1', pdfUrl: '/Notes/2 Marks ( Pharmaceutics ).pdf' },
                    { title: 'Chapter 2 Note 1', pdfUrl: '/pdfs/physics_note_2.pdf' },
                    { title: 'Chapter 2 Note 1', pdfUrl: '/pdfs/physics_note_2.pdf' },
                    { title: 'Chapter 2 Note 1', pdfUrl: '/pdfs/physics_note_2.pdf' },
                    { title: 'Chapter 2 Note 1', pdfUrl: '/pdfs/physics_note_2.pdf' },
                    { title: 'Chapter 2 Note 1', pdfUrl: '/pdfs/physics_note_2.pdf' },
                    // Add more maths notes as needed
                ]
            },
            // Add more subjects with their respective notes
        ];
        setPdfs(dummyPdfs);
    }, []);

    // Filter PDFs based on search query
    const filteredPdfs = pdfs.filter(subject =>
        subject.notes.some(note =>
            note.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    // Handle search query change
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handlePdfClick = (pdf) => {
        setSelectedPdf(pdf);
    };

    // Handle close PDF click event
    const handleClosePdf = () => {
        setSelectedPdf(null);
    };

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <div className={styles.container}>
            <h2>Notes</h2>
            <div className={styles.searchContainer}>
                <input
                    type="text"
                    placeholder="Search lecture notes..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className={styles.searchInput}
                />
            </div>
            <div className={styles.subjectContainer}>
                {filteredPdfs.map((subject, index) => (
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