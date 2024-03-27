import { useState } from 'react';
import StudentNavbar from '../components/StudentNavbar';
import StudentAboutSection from "../components/StudentAboutSection";
import AdmissionForm from '../components/AdmissionForm';
import LecturesSection from '../components/LecturesSection';


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
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
