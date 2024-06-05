import { React, useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import StudentNavbar from '../components/StudentNavbar';
import StudentAboutSection from "../components/StudentAboutSection";
import AdmissionForm from '../components/AdmissionForm';
import LecturesSection from '../components/LecturesSection';
import NewNotesSection from '../components/NewNotesSection';
import TestsSection from '../components/TestsSection';
import Footer from '../components/Footer';
import styles from '../styles/StudentDashboard.module.css'; // Import your CSS module

const StudentDashboard = () => {
  const router = useRouter();
  const [showAdmissionForm, setShowAdmissionForm] = useState(false);
  const lecturesRef = useRef(null);
  const notesRef = useRef(null);
  const testsRef = useRef(null);

  const handleContact = () => {
    setShowAdmissionForm(true);
  };

  const handleCloseAdmissionForm = () => {
    setShowAdmissionForm(false);
  };

  const scrollToLectures = () => {
    lecturesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNotes = () => {
    notesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTests = () => {
    testsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        // Check if user is authenticated (you need to implement this logic)
        const isAuthenticated = localStorage.getItem('username'); // Example: Check for authentication token

        if (!isAuthenticated) {
          router.push('/home'); // Redirect to sign-in page if not authenticated
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    // Check authentication when the component mounts
    checkAuthentication();
  }, [router]);

  return (
    <div className={styles.container}>
      <StudentNavbar onContact={handleContact} scrollToLectures={scrollToLectures} scrollToNotes={scrollToNotes} scrollToTests={scrollToTests} />
      {showAdmissionForm ? (
        <AdmissionForm onClose={handleCloseAdmissionForm} />
      ) : (
        <div>
          {/* <StudentAboutSection /> */}
          <div ref={lecturesRef}>
            <LecturesSection />
          </div>
          <div ref={notesRef}>
            <NewNotesSection />
          </div>
          <div ref={testsRef}>
            <TestsSection />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
