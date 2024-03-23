// StudentDashboard.js
import React from 'react';
import NotesSection from '../components/NotesSection';
import LecturesSection from '../components/LecturesSection';
import TestsSection from '../components/TestsSection';
import StudentAnalysisSection from '../components/StudentAnalysisSection';

const StudentDashboard = ({ studentName }) => {
    return (
        <div>
            <h1>Welcome, {studentName}!</h1>
            <div>
                <NotesSection />
                <LecturesSection />
                <TestsSection />
                <StudentAnalysisSection />
            </div>
        </div>
    );
};

export default StudentDashboard;
