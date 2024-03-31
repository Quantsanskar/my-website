import { React, useState, useRef } from 'react';
import StudentNavbar from '../components/StudentNavbar';
import StudentAboutSection from "../components/StudentAboutSection";
import AdmissionForm from '../components/AdmissionForm';
import LecturesSection from '../components/LecturesSection';
import NewNotesSection from '../components/NewNotesSection';

import slug from "../pages/[slug]";
import TestsSection from '../components/TestsSection';


const StudentDashboard = () => {
  const [showAdmissionForm, setShowAdmissionForm] = useState(false);

  const handleContact = () => {
    setShowAdmissionForm(true);
  };

  const handleCloseAdmissionForm = () => {
    setShowAdmissionForm(false);
  };
  const lecturesRef = useRef(null);
  const notesRef = useRef(null);
  const testsRef = useRef(null);

  const scrollToLectures = () => {
    lecturesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNotes = () => {
    notesRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToTests = () => {
    testsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <StudentNavbar onContact={handleContact} scrollToLectures={scrollToLectures} scrollToNotes={scrollToNotes} scrollToTests={scrollToTests}/>
      {showAdmissionForm ? (
        <AdmissionForm onClose={handleCloseAdmissionForm} />
      ) : (
        <div>
          <StudentAboutSection />
          <div ref={lecturesRef}>
            <LecturesSection />
          </div>
          <div ref={notesRef}>
            <NewNotesSection />
          </div>
          <div ref={testsRef}>
            <TestsSection />
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
