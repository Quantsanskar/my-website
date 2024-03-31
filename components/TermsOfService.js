// components/TermsOfService.js

import React from 'react';
import styles from '../styles/TermsOfServices.module.css';

const TermsOfService = () => {
    return (
        <div className={styles.overlay}>
            <div className={styles.termsContainer}>
                <div className={styles.termsContent}>
                    <h1>Terms of Service</h1>
                    <p>
                        Welcome to A & G Academy!

                        These terms of service ("Terms") govern your access to and use of the A & G Academy website (the "Service"), operated by A & G Academy ("us", "we", or "our").

                        By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, then you may not access the Service.

                        Content Usage

                        The content provided on the Service, including but not limited to lectures, notes, tests, and any other educational materials ("Content"), is for personal and non-commercial use only. You may not distribute, modify, reproduce, or otherwise exploit the Content without prior written permission from A & G Academy.

                        Prohibited Activities

                        You agree not to engage in any of the following prohibited activities:

                        Unauthorized distribution of Content: You may not share, distribute, or otherwise disseminate the Content provided on the Service to third parties without prior written permission.

                        Modification of Content: You may not modify, adapt, translate, reverse engineer, decompile, or disassemble any portion of the Content provided on the Service.

                        Violation of Intellectual Property Rights: You may not infringe upon the intellectual property rights, including copyrights and trademarks, associated with the Content provided on the Service.

                        Violation of Terms

                        Violation of these Terms may result in the termination of your access to the Service and may subject you to civil and criminal penalties.

                        Contact Us

                        If you have any questions about these Terms, please contact us at [contact@example.com].


                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
