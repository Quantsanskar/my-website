import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import ErrorBoundary from '../components/ErrorBoundary';
import Navbar from '../components/Navbar';
import CenteredTitle from '../components/CenteredTitle';
import HomePage from '../components/HomePage';
import LocationSection from '../components/LocationSection';
import MentorsSection from '../components/MentorsSection';
import AdmissionButton from '../components/AdmissionButton';
import AdmissionForm from '../components/AdmissionForm';
import CharacterComponent from '../components/CharacterComponent';
import SignInForm from '../components/SignInForm'; // Import the SignInForm component
import Footer from '../components/Footer';


const MainPage = () => {
    const [data, setData] = useState([]);
    const [showAdmissionForm, setShowAdmissionForm] = useState(false);
    const [isSignInOpen, setIsSignInOpen] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000')
            // .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, []);

    const toggleAdmissionForm = () => {
        setShowAdmissionForm(!showAdmissionForm);
    };
    const toggleSignIn = () => {
        setIsSignInOpen(!isSignInOpen);
      };
    
      const closeSignIn = () => {
        setIsSignInOpen(false);
      };

    return (
        <ErrorBoundary>
            <div>
                <ul>
                    {data.map(item => (
                        <li key={item.id}>{item.name} - {item.description}</li>
                    ))}
                </ul>
                <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: '999' }}>
                    <Link href="/" style={{ color: 'white', backgroundColor: 'burlywood', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none' }}>
                        StudyPhora
                    </Link>
                </div>
                <Navbar />
                <CharacterComponent />
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
                    {/* Reactive element for sign-in */}
                    <div style={{ marginTop: '1rem', cursor: 'pointer', color: 'blue' }} onClick={toggleSignIn}>
                        Are you an existing student? Sign in here.
                    </div>
                    
                </div>

                <div id="location">
                    <LocationSection />
                </div>
                <div id="mentors">
                    <MentorsSection />
                </div>
                <Footer />
                <SignInForm isSignInOpen={isSignInOpen} closeSignIn={closeSignIn} />
                {showAdmissionForm && <AdmissionForm onClose={toggleAdmissionForm} />}
                
            </div>
        </ErrorBoundary>
    );
};

export default MainPage;
