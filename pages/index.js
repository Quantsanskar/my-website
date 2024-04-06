// index.js
import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
// import { useRouter } from 'next/navigation';
import { useRouter } from 'next/router';
// import { useHistory } from 'react-router-dom';
import '../styles/MainPage.css'; // Import the CSS file







const Index = () => {

    const router = useRouter();



    const handleContactClick = () => {
        router.push('/contact');
    };
    const handleNavigateToAandG=()=>{
        router.push('/home');
    };
    return (
        <>
            <div id="heading-container">
                <header className="navbar">
                    <h1 className="logo">StudyPhora</h1>
                    <nav>
                        <a href="#home">Home</a>
                        <a href="#features">Features</a>
                        <a href="#why-choose">Why Choose StudyPhora</a>
                        <a href="#contact">Contact</a>
                        <div className="dropdown">
                            <a href="#" className="dropbtn">Institutes</a>
                            <div className="dropdown-content">
                                <a onClick={handleNavigateToAandG}>A & G Academy</a>
                                <a href="institute2.html">Institute 2</a>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
            <div className="hero" id="home">
                <h1>Welcome to the Future of Education</h1>
                <p>Unlock endless possibilities with our innovative and personalized learning experiences.</p>
            </div>
            <section id="join-us" className="join-us">
                <h2>Join Us Today</h2>
                <p>Embark on a transformative learning experience. Join EduSphere and unlock a world of knowledge and opportunities.</p>
                
            </section>
            <section id="features" className="features">
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
            </section>
            <section id="why-choose" className="why-choose">
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
            </section>
            <section id="contact" className="cta">
                <h2>Get in Touch</h2>
                <p>Have questions or need assistance? Feel free to contact us. We're here to help!</p>
                <button onClick={handleContactClick}>Contact Us</button>
            </section>
            <section id="testimonials" className="testimonial-section">
                <h2>What Our Students Say</h2>
                <div className="testimonial">
                    <p className="testimonial-text">"StudyPhora has truly revolutionized my approach to learning. The interactive lessons and supportive instructors have helped me excel in my studies."</p>
                    <p className="testimonial-author">John Doe</p>
                </div>
                <div className="testimonial">
                    <p className="testimonial-text">"The personalized learning experience at StydyPhora has made all the difference in my academic journey. I highly recommend it to anyone seeking quality education."</p>
                    <p className="testimonial-author">Jane Smith</p>
                </div>
            </section>
        </>
    );
}

export default Index;
