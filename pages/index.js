import React from 'react';
import { useRouter } from 'next/router';
import MainNavbar from "../components/mainNavbar"; // Corrected naming convention
import '../styles/MainPage.css';
import InstitutesPage from '../components/InstitutesPage';
import MainFooter from "../components/mainFooter"; // Corrected naming convention

const MainPage = () => {
    const router = useRouter();

    const handleNavigateToInstitutes = () => {
        router.push('/institutes'); // Navigate to InstitutesPage
    };

    return (
        <div className="content">
            {/* Content of the main page goes here */}
            <h2>StudyPhora</h2>
            <div className="services-section">
                <h2>Our Services</h2>
                <p>Explore our range of services:</p>
                {/* Use arrow function or callback function */}
                <button onClick={handleNavigateToInstitutes}>Institutes</button>
            </div>
            {/* Render MainFooter component */}
            <MainFooter />
        </div>
    );
};

export default MainPage;