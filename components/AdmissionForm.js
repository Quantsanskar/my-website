import React, { useState } from 'react';
import axios from 'axios';

const AdmissionForm = ({ onClose }) => {
    const [loading, setLoading] = useState(false); // State to track loading status

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading state to true

        const email = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            body: e.target.message.value
        };

        try {
            // Send form data to the backend API using Axios
            const response = await axios.post('http://127.0.0.1:8000/api/send-email/', email);

            if (response.status === 200) {
                console.log('Form submitted successfully');
            } else {
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setLoading(false); // Set loading state to false after form submission completes
            onClose(); // Close the form
        }
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
                    <button type="submit" className="submitButton">
                        {loading ? <Spinner /> : 'Submit'} {/* Display loading spinner while loading */}
                    </button>
                </form>
            </div>
        </div>
    );
};

const Spinner = () => (
    <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
    </div>
);

export default AdmissionForm;
