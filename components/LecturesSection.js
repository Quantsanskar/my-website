// LecturesSection.js

import React from 'react';
import LectureVideo from '../components/LectureVideo'; // Assuming you have a LectureVideo component for displaying individual videos
import styles from '../styles/LecturesSection.module.css'; // Import CSS module for styling

const LecturesSection = () => {
    // Dummy lecture data for demonstration
    const lectures = [
        {
            subject: 'Physics',
            chapters: [
                {
                    name: 'Mechanics',
                    videos: [
                        { title: 'Introduction to Mechanics', videoUrl: 'https://www.youtube.com/embed/2E8IZy8aWhw?si=W79L8Pr0B0hQiOLb' },
                        { title: 'Newton\'s Laws of Motion', videoUrl: 'https://www.youtube.com/embed/JGO_zDWmkvk?si=VMQcj6hoqoC9zE4A' },
                        // Add more videos for Mechanics chapter
                    ]
                },
                {
                    name: 'Electricity and Magnetism',
                    videos: [
                        { title: 'Electric Charges and Fields', videoUrl: 'https://www.youtube.com/watch?v=HnH0xROoDIY' },
                        { title: 'Magnetic Effects of Current', videoUrl: 'https://www.youtube.com/watch?v=caJOmrnKrg0' },
                        // Add more videos for Electricity and Magnetism chapter
                    ]
                },
                // Add more chapters for Physics subject
            ]
        },
        {
            subject: 'Chemistry',
            chapters: [
                {
                    name: 'Organic Chemistry',
                    videos: [
                        { title: 'Introduction to Organic Chemistry', videoUrl: 'https://www.youtube.com/watch?v=qre77RG_bNI' },
                        { title: 'Alkanes and Cycloalkanes', videoUrl: 'https://www.youtube.com/watch?v=Xbq2ikJoNmo' },
                        // Add more videos for Organic Chemistry chapter
                    ]
                },
                {
                    name: 'Inorganic Chemistry',
                    videos: [
                        { title: 'Introduction to Inorganic Chemistry', videoUrl: 'https://www.youtube.com/watch?v=Yw3KQX10Gvs' },
                        { title: 'Periodic Table Trends', videoUrl: 'https://www.youtube.com/watch?v=l5Al2lEpvQs' },
                        // Add more videos for Inorganic Chemistry chapter
                    ]
                },
                // Add more chapters for Chemistry subject
            ]
        },
        {
            subject: 'Biology',
            chapters: [
                {
                    name: 'Cell Biology',
                    videos: [
                        { title: 'Introduction to Cell Biology', videoUrl: 'https://www.youtube.com/embed/8IlzKri08kk?si=elFafe6OZkD41XHK' },
                        { title: 'Cell Membrane Structure and Function', videoUrl: 'https://www.youtube.com/embed/fJfTDc3WzQ8?si=0ZjfehBNeBQShQjk' },
                        // Add more videos for Cell Biology chapter
                    ]
                },
                {
                    name: 'Genetics',
                    videos: [
                        { title: 'Introduction to Genetics', videoUrl: 'https://www.youtube.com/watch?v=m-H64-ilujI' },
                        { title: 'Mendelian Genetics', videoUrl: 'https://www.youtube.com/watch?v=mhZ7_bKLm9I' },
                        // Add more videos for Genetics chapter
                    ]
                },
                // Add more chapters for Biology subject
            ]
        },
        // Add more subjects as needed
    ];

    return (
        <div className={styles.lecturesContainer}>
            <h2>Lectures</h2>
            {lectures.map((subject, subjectIndex) => (
                <div key={subjectIndex}>
                    <h3>{subject.subject}</h3>
                    <div className={styles.subjectContainer}>
                        {subject.chapters.map((chapter, chapterIndex) => (
                            <div key={chapterIndex} className={styles.chapterContainer}>
                                <h4>{chapter.name}</h4>
                                <div className={styles.videoList}>
                                    {chapter.videos.map((video, videoIndex) => (
                                        <LectureVideo key={videoIndex} title={video.title} videoUrl={video.videoUrl} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LecturesSection;
