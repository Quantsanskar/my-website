// components/LocationSection.js
import React from 'react';
import styles from './LocationSection.module.css';

const LocationSection = () => {
    return (
        <section className={styles.locationSection}>
            <div className={styles.locationContent}>
                <h2>Our Location</h2>
                <div>
                    {/* Embed the Google Maps iframe here */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28017.63764564516!2d77.28195081083981!3d28.680005322746302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfca835be6e7b%3A0x9815aa5b0451ee8f!2sShahdaraDelhi%2C%20110032!5e0!3m2!1sen!2sin!4v1679076182177!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <p>
                    Our institution is conveniently located in the heart of Shahdara, Delhi, providing easy access to students from various parts of the city. Our modern facilities and state-of-the-art infrastructure create an ideal learning environment for our students.
                </p>
            </div>
        </section>
    );
};

export default LocationSection;
