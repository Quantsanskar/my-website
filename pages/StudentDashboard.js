import { useState } from 'react';
import StudentNavbar from '../components/StudentNavbar';
import StudentAboutSection from "../components/StudentAboutSection";
import AdmissionForm from '../components/AdmissionForm';
import LecturesSection from '../components/LecturesSection';
import NotesSection from '../components/NotesSection';
import slug from "../pages/[slug]";


const StudentDashboard = () => {
  const [showAdmissionForm, setShowAdmissionForm] = useState(false);

  const handleContact = () => {
    setShowAdmissionForm(true);
  };

  const handleCloseAdmissionForm = () => {
    setShowAdmissionForm(false);
  };

  return (
    <div>
      <StudentNavbar onContact={handleContact} />
      {showAdmissionForm ? (
        <AdmissionForm onClose={handleCloseAdmissionForm} />
      ) : (
        <div>
          <StudentAboutSection/>
          <LecturesSection />
          <NotesSection/>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
