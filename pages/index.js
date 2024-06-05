import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { useRouter } from 'next/router';
import '../styles/MainPage.css'; // Import the CSS file
import AdmissionForm from '../components/AdmissionForm';

const Index = () => {
    const router = useRouter();
    const [isFormOpen, setIsFormOpen] = useState(false);

    const openForm = () => {
        setIsFormOpen(true);
    };

    const closeForm = () => {
        setIsFormOpen(false);
        document.body.classList.remove('decreased-light');
    };

    const handleNavigateToAandG = () => {
        router.push('/home');
    };

    return (
        <>
            <header className="navbar">
                <div className="container">
                    {/* <h1 onClick={()=> router.push('/')} className="logo">StudyPhora</h1> */}
                    <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}> {/* Add active class when menu is open */}
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                    <nav className={isMenuOpen ? 'active' : ''}>
                        <Link href="/">Home</Link>
                        <a href="#features">Features</a>
                        <a href="#why-choose">WhyUs</a>
                        <a href="#contact">Contact</a>
                        <Link href="/founders">Our Team</Link>
                        <div className="dropdown">
                            <Link href="#">Institutes
                            </Link>
                            <div className="dropdown-content">
                                <Link href="/home">A & G Academy
                                </Link>



                                <h1 className="logo">StudyPhora</h1>
                                <nav>
                                    <a href="#home">Home</a>
                                    <a href="#features">Features</a>
                                    <a href="#why-choose">WhyUs</a>
                                    <a href="#contact">Contact</a>
                                    <div className="dropdown">
                                        <a href="#" className="dropbtn">Institutes</a>
                                        <div className="dropdown-content">
                                            <a onClick={handleNavigateToAandG}>A & G Academy</a>
                                            <a href="institute2.html">Institute 2</a>

                                        </div>
                                    </div>
                                </nav>

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
                    <p>Have questions or need assistance? Feel free to contact us. We're here to help!</p>
                    <button onClick={openForm}>Contact Us</button>
                </div>
            </section>

            <section className="testimonial-section" id="testimonials">
                <div className="container">
                    <h2>What Our Students Say</h2>
                    <div className="testimonial">
                        <p className="testimonial-text">"StudyPhora has truly revolutionized my approach to learning. The interactive lessons and supportive instructors have helped me excel in my studies."</p>
                        <p className="testimonial-author">John Doe</p>
                    </div>
                    <div className="testimonial">
                        <p className="testimonial-text">"The personalized learning experience at StydyPhora has made all the difference in my academic journey. I highly recommend it to anyone seeking quality education."</p>
                        <p className="testimonial-author">Jane Smith</p>
                    </div>
                </div>
            </section>

            {isFormOpen && <AdmissionForm onClose={closeForm} />}
        </>
    );
}

export default Index;
