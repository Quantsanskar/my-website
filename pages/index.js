// pages/index.js
import React from 'react';
import Navbar from '../components/Navbar';
import HomePage from '../components/HomePage';
import LocationSection from '../components/LocationSection';
import MentorsSection from '../components/MentorsSection';
import AdmissionButton from '../components/AdmissionButton';
import ThemeToggle from '../components/ThemeToggle';

const MainPage = () => {
    return (
        <div>
            <Navbar />
            <ThemeToggle />
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
    );
};

export default MainPage;