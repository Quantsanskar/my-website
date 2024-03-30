// NotesSection.js
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import styles from '../styles/NotesSection.module.css';

const PDFViewer = dynamic(() => import('@react-pdf/renderer').then(module => module.PDFViewer), {
  ssr: false
});

const NotesSection = () => {
  const [pdfs, setPdfs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPdf, setSelectedPdf] = useState(null); // Track the selected PDF
  const router = useRouter();

  useEffect(() => {
    // Fetch PDF data and set it to the pdfs state
    // Dummy PDF data
    const dummyPdfs = [
      {
        subject: 'Physics',
        notes: [
          { title: 'Chapter 1 Note 1', pdfUrl: '/Notes/2 Marks ( Pharmaceutics ).pdf' },
          { title: 'Chapter 2 Note 1', pdfUrl: '/pdfs/physics_note_2.pdf' },
          // Add more physics notes as needed
        ]
      },
      {
        subject: 'Chemistry',
        notes: [
          { title: 'Chapter 1 Note 1', pdfUrl: '/Notes/2 Marks ( Pharmaceutics ).pdf' },
          { title: 'Chapter 2 Note 1', pdfUrl: '/pdfs/physics_note_2.pdf' },
          // Add more physics notes as needed
        ]
      },
      {
        subject: 'Biology',
        notes: [
          { title: 'Chapter 1 Note 1', pdfUrl: '/Notes/2 Marks ( Pharmaceutics ).pdf' },
          { title: 'Chapter 2 Note 1', pdfUrl: '/pdfs/physics_note_2.pdf' },
          // Add more physics notes as needed
        ]
      },
      {
        subject: 'Maths',
        notes: [
          { title: 'Chapter 1 Note 1', pdfUrl: '/Notes/2 Marks ( Pharmaceutics ).pdf' },
          { title: 'Chapter 2 Note 1', pdfUrl: '/pdfs/physics_note_2.pdf' },
          // Add more physics notes as needed
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
    console.log('Selected PDF:', pdf);
    setSelectedPdf(pdf);
  };


  // Handle close PDF click event
  const handleClosePdf = () => {
    setSelectedPdf(null);
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
            <PDFViewer
              className={styles.noteIframe}
              document={{
                url: selectedPdf.pdfUrl,
                options: {
                  cMapUrl: 'cmaps/',
                  cMapPacked: true,
                  ...(selectedPdf.disableDownload && { disableDownload: true }), // Disable download option
                  ...(selectedPdf.disablePrinting && { disablePrinting: true }) // Disable printing option
                }
              }}
            />
          </div>
        </div>
      )}
    </div>
  );

};

export default NotesSection;
