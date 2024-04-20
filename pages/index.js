import React, { useState } from 'react';
import { useRouter } from 'next/router';
import '../styles/MainPage.css'; // Import the CSS file
import AdmissionForm from '../components/AdmissionForm';
import Link from 'next/link'; // Import Link from next/link
import Image from 'next/image'; // Import Image from next/image

const Index = () => {
    const router = useRouter();
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Track the state of the menu

    const openForm = () => {
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
        document.body.classList.remove('decreased-light');
    };

    // Toggle the menu state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <>
            <header className={`navbar ${isMenuOpen ? 'active' : ''}`}> {/* Add active class when menu is open */}
                <div className="container">
                    {/* <h1 onClick={()=> router.push('/')} className="logo">StudyPhora</h1> */}
                    <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}> {/* Add active class when menu is open */}
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                    <nav className={`${isMenuOpen ? 'active' : ''}`}> {/* Add active class when menu is open */}
                        <Link href="/">Home</Link>
                        <a href="#features">Features</a>
                        <a href="#why-choose">WhyUs</a>
                        <a href="#contact">Contact</a>
                        <Link href="/teachers">Teachers</Link>
                        <div className="dropdown">
                            <Link href="#" className="dropbtn">Institutes</Link>
                            <div className="dropdown-content">
                                <Link href="/home" >A & G Academy</Link>
                                <Link href="/Institute2">Institute 2</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            <section className="logo-section">
                <div className="container">
                <Image src="/Images/FINAL.png" alt="StudyPhora Logo" width={400} height={400} /> {/* Use Image for optimization */}
                    <h2 className="tagline">`Transforming Institutes, Transforming Future`</h2>
                </div>
            </section>

            <section className="hero" id="home">
                <div className="container">
                    <h1>Welcome to the Future of Education</h1>
                    <p>Unlock endless possibilities with our innovative and personalized learning experiences.</p>
                </div>
            </section>

            <section className="join-us" id="join-us">
                <div className="container">
                    <h2>Join Us Today</h2>
                    <p>Embark on a transformative learning experience. Join EduSphere and unlock a world of knowledge and opportunities.</p>
                </div>
            </section>

            <section className="features" id="features">
                <div className="container">
                    <div className="feature">
                        <h3>Feature 1</h3>
                        <p>Explore the power of interactive learning modules designed to enhance your understanding.</p>
                    </div>
                    <div className="feature">
                        <h3>Feature 2</h3>
                        <p>Connect with industry experts and mentors for personalized guidance and insights.</p>
                    </div>
                    <div className="feature">
                        <h3>Feature 3</h3>
                        <p>Flexible scheduling to accommodate your lifestyle and make learning fit seamlessly into your routine.</p>
                    </div>
                </div>
            </section>

            <section className="why-choose" id="why-choose">
                <div className="container">
                    <h2>Why Choose StudyPhora</h2>
                    <div className="reason">
                        <h3>Exceptional Instructors</h3>
                        <p>Learn from industry experts and passionate instructors dedicated to your success.</p>
                    </div>
                    <div className="reason">
                        <h3>Interactive Learning Environment</h3>
                        <p>Engage in a dynamic online platform that fosters collaboration and interaction.</p>
                    </div>
                    <div className="reason">
                        <h3>Flexible Scheduling</h3>
                        <p>Customize your learning schedule to fit your lifestyle and commitments.</p>
                    </div>
                </div>
            </section>

            <section className="cta" id="contact">
                <div className="container">
                    <h2>Get in Touch</h2>
                    <p>Have questions or need assistance? Feel free to contact us. We&apos;re here to help!</p>
                    <button onClick={openForm}>Contact Us</button>
                </div>
            </section>

            <section className="testimonial-section" id="testimonials">
                <div className="container">
                    <h2>What Our Students Say</h2>
                    <div className="testimonial">
                        <p className="testimonial-text">&quot;StudyPhora has truly revolutionized my approach to learning. The interactive lessons and supportive instructors have helped me excel in my studies.&quot;</p>
                        <p className="testimonial-author">John Doe</p>
                    </div>
                    <div className="testimonial">
                        <p className="testimonial-text">&quot;The personalized learning experience at StydyPhora has made all the difference in my academic journey. I highly recommend it to anyone seeking quality education.&quot;</p>
                        <p className="testimonial-author">Jane Smith</p>
                    </div>
                </div>
            </section>

            {isFormOpen && <AdmissionForm onClose={closeForm} />}
        </>
    );
}

export default Index;
