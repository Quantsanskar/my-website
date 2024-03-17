// pages/index.js
import React from 'react';
//import ErrorBoundary from '../components/ErrorBoundary';
import Navbar from '../components/Navbar';
import HomePage from '../components/HomePage';
import LocationSection from '../components/LocationSection';
import MentorsSection from '../components/MentorsSection';
import AdmissionButton from '../components/AdmissionButton';

const MainPage = () => {
    return (
//        <ErrorBoundary>
            <div>
                <Navbar/>
               
                <div id="about-us">
                    <HomePage />
                </div>
                <div id="location">
                    <LocationSection />
                </div>
                <div id="mentors">
                    <MentorsSection />
                </div>
                <div id="admission-button">
                    <AdmissionButton />
                </div>
            </div>
//        </ErrorBoundary>
    );
};

export default MainPage;
