import React from 'react';
import { useRouter } from 'next/router';
import MainNavbar from '../components/MainNavbar';
import MainFooter from '../components/MainFooter';
import '../styles/InstitutesPage.module.css';

const InstitutesPage = () => {
  const router = useRouter();

  const handleClick = () => {
    // Redirect to the home page
    router.push('/home');
  };

  return (
    <div className="institutes-page">
      <MainNavbar />
      <div className="content">
        <h2>List of Institutes</h2>
        <ul>
          {/* Display list of institutes */}
          <li>A & G Academy</li>
          {/* Add more institutes here */}
        </ul>
        {/* Add navigation links or buttons for each institute */}
        <button onClick={handleClick}>A & G Academy</button>
      </div>
      <MainFooter />
    </div>
  );
};

export default InstitutesPage;
