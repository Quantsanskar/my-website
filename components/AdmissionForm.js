// AdmissionForm.js
import React from 'react';
import styles from '../styles/globals.css';

const AdmissionForm = ({ onClose }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log('Form submitted!');
        onClose(); // Close the form
    };

    return (
        <div className="admissionFormOverlay">
            <div className="admissionFormContainer">
                <button className="closeButton" onClick={onClose}>X</button>
                <h2 className="formTitle">Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className="formGroup">
                        <input type="text" id="name" name="name" placeholder="Your Name" required />
                    </div>
                    <div className="formGroup">
                        <input type="email" id="email" name="email" placeholder="Your Email" required />
                    </div>
                    <div className="formGroup">
                        <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" required />
                    </div>
                    <div className="formGroup">
                        <textarea id="message" name="message" rows="4" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" className="submitButton">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AdmissionForm;
