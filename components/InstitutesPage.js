import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/mainNavbar';
import Footer from '../components/mainFooter';
import '../styles/InstitutesPage.module.css';

const InstitutesPage = () => {
  const router = useRouter();

  const handleClick = () => {
    // Redirect to the home page
    router.push('/home');
  };

  return (
    <div className="institutes-page">
      <Navbar />
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
      <Footer />
    </div>
  );
};

export default InstitutesPage;
