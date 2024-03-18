import React from 'react';
import styles from '../components/LocationSection.module.css';

const LocationSection = () => {
    return (
        <section className={styles.locationSection}>
            <div className={styles.locationContent}>
                <h2 className={styles.locationHeading}>Our Location</h2>
                <div className={styles.locationMap}>
                    {/* Embed the Google Maps iframe here */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.163692538011!2d77.28017107375516!3d28.68474958171065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc79a4cdd965%3A0xd9307e97e901c566!2sA%26G%20Academy!5e0!3m2!1sen!2sin!4v1710753969133!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title='Our Location'>
                    </iframe>
                </div>
                <p className={styles.locationDetails}>
                    Our institution is conveniently located in the heart of Shahdara, Delhi, providing easy access to students from various parts of the city. Our modern facilities and state-of-the-art infrastructure create an ideal learning environment for our students.
                </p>
                <div className={styles.locationImage}></div> {/* Add .locationImage class to the div */}
            </div>
        </section>
    );
};

export default LocationSection;
