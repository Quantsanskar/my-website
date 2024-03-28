import React, { useState } from 'react';
import AdmissionForm from './AdmissionForm';

const AdmissionButton = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const openForm = () => {
        setIsFormOpen(true);
     };

    const closeForm = () => {
        setIsFormOpen(false);
        document.body.classList.remove('decreased-light');
    };

    return (
        <div className="admissionButtonWrapper">
            <div className="admissionButtonContainer">
                <button onClick={openForm}>Contact Us</button>
            </div>
            {isFormOpen && <AdmissionForm onClose={closeForm} />} {/* Pass onClose as a prop */}
        </div>
    );
};

export default AdmissionButton;
