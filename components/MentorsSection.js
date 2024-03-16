import React from 'react';
import styles from './MentorsSection.module.css';

const MentorsSection = () => {
    const mentors = [
        {
            name: 'John Doe',
            qualification: 'Ph.D. in Computer Science',
            experience: '10 years',
            achievements: 'Published 20+ research papers',
        },
        // Add more mentors here...
    ];

    return (
        <section className={styles.mentorsSection}>
            <div className={styles.mentorsContent}>
                <h2>Our Mentors</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Qualification</th>
                            <th>Experience</th>
                            <th>Achievements</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mentors.map((mentor, index) => (
                            <tr key={index}>
                                <td>{mentor.name}</td>
                                <td>{mentor.qualification}</td>
                                <td>{mentor.experience}</td>
                                <td>{mentor.achievements}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MentorsSection;
