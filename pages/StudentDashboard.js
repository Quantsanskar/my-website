import { useState } from 'react';
import StudentNavbar from '../components/StudentNavbar';
import StudentAboutSection from "../components/StudentAboutSection";
import AdmissionForm from '../components/AdmissionForm';


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
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
