import React, { useState } from 'react';
import Link from 'next/link';
import ErrorBoundary from '../components/ErrorBoundary';
import Navbar from '../components/Navbar';
import CenteredTitle from '../components/CenteredTitle';
import HomePage from '../components/HomePage';
import LocationSection from '../components/LocationSection';
import MentorsSection from '../components/MentorsSection';
import AdmissionButton from '../components/AdmissionButton';
import AdmissionForm from '../components/AdmissionForm';

const MainPage = () => {
    const [showAdmissionForm, setShowAdmissionForm] = useState(false);

    const toggleAdmissionForm = () => {
        setShowAdmissionForm(!showAdmissionForm);
    };


    return (
        <ErrorBoundary>
            <div>
                <Navbar />
                <CenteredTitle />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <div style={{ marginBottom: '1rem' }}>
                        <HomePage />
                    </div>
                    <AdmissionButton onClick={toggleAdmissionForm} />
                </div>

                <div id="location">

                    <LocationSection />
                </div>
                <div id="mentors">
                    <MentorsSection />
                </div>
                {showAdmissionForm && <AdmissionForm onClose={toggleAdmissionForm} />}

            </div>
        </ErrorBoundary >
    );
};

export default MainPage;
