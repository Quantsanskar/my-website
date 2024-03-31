// components/PrivacyPolicy.js

import React from 'react';
import styles from '../styles/PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
    return (
        <div className={styles.overlay}>
            <div className={styles.policyContainer}>
                <div className={styles.policyContent}>
                    <h1>Privacy Policy</h1>
                    <p>
                        At A & G Academy, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our services.

                        Information We Collect

                        We may collect personal information such as your name, email address, phone number, postal address, and other relevant details when you register for our coaching programs, attend events, or interact with our website.

                        How We Use Your Information

                        We use the information we collect to:

                        Provide and personalize our coaching services
                        Communicate with you about our programs, events, and updates
                        Process payments and enrollments
                        Improve our website and services
                        Respond to inquiries and provide customer support
                        Comply with legal obligations
                        Data Security

                        We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.

                        Third-Party Disclosure

                        We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or as necessary to provide our services. We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you.

                        Your Choices

                        You have the right to access, correct, or delete your personal information at any time. You may also opt out of receiving promotional communications from us by following the unsubscribe instructions provided in our emails.

                        Children's Privacy

                        Our services are not directed to individuals under the age of 13, and we do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us so that we can delete the information.

                        Changes to This Policy

                        We may update this Privacy Policy from time to time, and any changes will be posted on this page. Your continued use of our website or services after any changes indicate your acceptance of the updated policy.

                        Contact Us

                        If you have any questions or concerns about our Privacy Policy or our practices regarding your personal information, please contact us at [contact@example.com].
                    </p>
                    {/* Add more privacy policy content here */}
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
