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


const MainPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/mymodels/')
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, []);
    const [showAdmissionForm, setShowAdmissionForm] = useState(false);

    const toggleAdmissionForm = () => {
        setShowAdmissionForm(!showAdmissionForm);
    };


    return (
        <ErrorBoundary>
            <div>
                <ul>
                    {data.map(item => (
                        <li key={item.id}>{item.name} - {item.description}</li>
                    ))}
                </ul>
                <Navbar/>
                <CharacterComponent/>
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
