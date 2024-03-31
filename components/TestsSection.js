// TestsSection.js
import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import styles from '../styles/TestsSection.module.css'; // Import your CSS module file

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const TestsSection = () => {
    const [pdfs, setPdfs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedPdf, setSelectedPdf] = useState(null);
    const [numPages, setNumPages] = useState(null);

    useEffect(() => {
        // Fetch PDF data and set it to the pdfs state
        // Dummy PDF data
        const dummyPdfs = [
            {
                subject: 'Physics',
                tests: [
                    { title: 'Electricity', pdfUrl: '/Notes/question paper 1.pdf' },
                    { title: 'Mechanical', pdfUrl: '/Tests/Physics_Chapter_2_Test_1.pdf' },
                    { title: 'Chapter 3 Test 1', pdfUrl: '/Tests/Physics_Chapter_2_Test_1.pdf' },
                    { title: 'Chapter 4 Test 1', pdfUrl: '/Tests/Physics_Chapter_2_Test_1.pdf' },
                    { title: 'Chapter 4 Test 1', pdfUrl: '/Tests/Physics_Chapter_2_Test_1.pdf' },
                    { title: 'Chapter 4 Test 1', pdfUrl: '/Tests/Physics_Chapter_2_Test_1.pdf' },
                    // Add more physics tests as needed
                ]
            },
            {
                subject: 'Chemistry',
                tests: [
                    { title: 'Chapter 1 Test 1', pdfUrl: '/Tests/Chemistry_Chapter_1_Test_1.pdf' },
                    { title: 'Chapter 2 Test 1', pdfUrl: '/Tests/Chemistry_Chapter_2_Test_1.pdf' },
                    { title: 'Chapter 2 Test 1', pdfUrl: '/Tests/Chemistry_Chapter_2_Test_1.pdf' },
                    { title: 'Chapter 2 Test 1', pdfUrl: '/Tests/Chemistry_Chapter_2_Test_1.pdf' },
                    { title: 'Chapter 2 Test 1', pdfUrl: '/Tests/Chemistry_Chapter_2_Test_1.pdf' },
                    { title: 'Chapter 2 Test 1', pdfUrl: '/Tests/Chemistry_Chapter_2_Test_1.pdf' },
                    // Add more chem tests as needed
                ]
            },
            {
                subject: 'Biology',
                tests: [
                    { title: 'Chapter 1 Test 1', pdfUrl: '/Tests/Chemistry_Chapter_1_Test_1.pdf' },
                    { title: 'Chapter 2 Test 1', pdfUrl: '/Tests/Chemistry_Chapter_2_Test_1.pdf' },
                    { title: 'Chapter 2 Test 1', pdfUrl: '/Tests/Chemistry_Chapter_2_Test_1.pdf' },
                    { title: 'Chapter 2 Test 1', pdfUrl: '/Tests/Chemistry_Chapter_2_Test_1.pdf' },
                    { title: 'Chapter 2 Test 1', pdfUrl: '/Tests/Chemistry_Chapter_2_Test_1.pdf' },
                    { title: 'Chapter 2 Test 1', pdfUrl: '/Tests/Chemistry_Chapter_2_Test_1.pdf' },
                    // Add more chem tests as needed
                ]
            },
            {
                subject: 'Maths',
                tests: [
                    { title: 'Chapter 1 Test 1', pdfUrl: '/Tests/Chemistry_Chapter_1_Test_1.pdf' },
                    { title: 'Chapter 1 Test 1', pdfUrl: '/Tests/Chemistry_Chapter_1_Test_1.pdf' },
                    { title: 'Chapter 1 Test 1', pdfUrl: '/Tests/Chemistry_Chapter_1_Test_1.pdf' },
                    { title: 'Chapter 1 Test 1', pdfUrl: '/Tests/Chemistry_Chapter_1_Test_1.pdf' },
                    { title: 'Chapter 1 Test 1', pdfUrl: '/Tests/Chemistry_Chapter_1_Test_1.pdf' },
                    { title: 'Chapter 2 Test 1', pdfUrl: '/Tests/Chemistry_Chapter_2_Test_1.pdf' },
                    // Add more chem tests as needed
                ]
            },
            // Add more subjects with their respective tests
        ];
        setPdfs(dummyPdfs);
    }, []);

    // Filter PDFs based on search query
    const filteredPdfs = pdfs.filter(subject =>
        subject.tests.some(test =>
            test.title.toLowerCase().includes(searchQuery.toLowerCase())
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
            <h2>Tests</h2>
            <div className={styles.searchContainer}>
                <input
                    type="text"
                    placeholder="Search test papers..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className={styles.searchInput}
                />
            </div>
            <div className={styles.subjectContainer}>
                {filteredPdfs.map((subject, index) => (
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
