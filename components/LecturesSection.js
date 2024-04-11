import React, { useState, useEffect } from 'react';
import LectureVideo from '../components/LectureVideo';
import styles from '../styles/LecturesSection.module.css';
import axios from 'axios';

const LecturesSection = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredLectures, setFilteredLectures] = useState([]);
    const [studentSubjects, setStudentSubjects] = useState([]);

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const studentResponse = await axios.get('http://127.0.0.1:8000/api/student');
                const student = studentResponse.data.find(item => item.username === localStorage.getItem('username'));

                if (student) {
                    setStudentSubjects(student.subjects.split(',').map(subject => subject.trim()));

                    const filteredLectures = getFilteredLectures(student.subjects);
                    setFilteredLectures(filteredLectures);
                } else {
                    throw new Error('Student not found');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        const username = localStorage.getItem('username');
        if (username) {
            fetchStudentData();
        }
    }, []);

    const handleSearch = (e) => {
        const { value } = e.target;
        setSearchQuery(value);
        filterLectures(value);
    };

    const getFilteredLectures = (studentSubjects) => {
        // Dummy lectures data
        // Replace this with your actual lectures data
        const dummyLectures = [
            {
                subject: 'Physics11',
                chapters: [
                    {
                        name: 'Mechanics',
                        videos: [
                            { title: 'Introduction to Mechanics', videoUrl: 'https://www.youtube.com/embed/2E8IZy8aWhw?si=W79L8Pr0B0hQiOLb' },
                            { title: "Newton's Laws of Motion", videoUrl: 'https://www.youtube.com/embed/JGO_zDWmkvk?si=VMQcj6hoqoC9zE4A' },
                        ]
                    },
                    {
                        name: 'Electricity and Magnetism',
                        videos: [
                            { title: 'Electric Charges and Fields', videoUrl: 'https://www.youtube.com/watch?v=HnH0xROoDIY' },
                            { title: 'Magnetic Effects of Current', videoUrl: 'https://www.youtube.com/watch?v=caJOmrnKrg0' },
                        ]
                    },
                ]
            },
            {
                subject: 'Chemistry11',
                chapters: [
                    {
                        name: 'Organic Chemistry',
                        videos: [
                            { title: 'Introduction to Organic Chemistry', videoUrl: 'https://www.youtube.com/watch?v=qre77RG_bNI' },
                            { title: 'Alkanes and Cycloalkanes', videoUrl: 'https://www.youtube.com/watch?v=Xbq2ikJoNmo' },
                        ]
                    },
                    {
                        name: 'Inorganic Chemistry',
                        videos: [
                            { title: 'Introduction to Inorganic Chemistry', videoUrl: 'https://www.youtube.com/watch?v=Yw3KQX10Gvs' },
                            { title: 'Periodic Table Trends', videoUrl: 'https://www.youtube.com/watch?v=l5Al2lEpvQs' },
                        ]
                    },
                ]
            },
            {
                subject: 'Biology11',
                chapters: [
                    {
                        name: 'Cell Biology',
                        videos: [
                            { title: 'Introduction to Cell Biology', videoUrl: 'https://www.youtube.com/embed/8IlzKri08kk?si=elFafe6OZkD41XHK' },
                            { title: 'Cell Membrane Structure and Function', videoUrl: 'https://www.youtube.com/embed/fJfTDc3WzQ8?si=0ZjfehBNeBQShQjk' },
                        ]
                    },
                    {
                        name: 'Genetics',
                        videos: [
                            { title: 'Introduction to Genetics', videoUrl: 'https://www.youtube.com/watch?v=m-H64-ilujI' },
                            { title: 'Mendelian Genetics', videoUrl: 'https://www.youtube.com/watch?v=mhZ7_bKLm9I' },
                        ]
                    },
                ]
            },
            {
                subject: 'Maths11',
                chapters: [
                    {
                        name: 'Set',
                        videos: [
                            { title: 'Introduction to Cell Biology', videoUrl: 'https://www.youtube.com/embed/8IlzKri08kk?si=elFafe6OZkD41XHK' },
                            { title: 'Cell Membrane Structure and Function', videoUrl: 'https://www.youtube.com/embed/fJfTDc3WzQ8?si=0ZjfehBNeBQShQjk' },
                        ]
                    },
                    {
                        name: 'Realations and Functions',
                        videos: [
                            { title: 'Introduction to Genetics', videoUrl: 'https://www.youtube.com/watch?v=m-H64-ilujI' },
                            { title: 'Mendelian Genetics', videoUrl: 'https://www.youtube.com/watch?v=mhZ7_bKLm9I' },
                        ]
                    },
                ]
            },
            {
                subject: 'ComputerScience11',
                chapters: [
                    {
                        name: 'Set',
                        videos: [
                            { title: 'Introduction to Cell Biology', videoUrl: 'https://www.youtube.com/embed/8IlzKri08kk?si=elFafe6OZkD41XHK' },
                            { title: 'Cell Membrane Structure and Function', videoUrl: 'https://www.youtube.com/embed/fJfTDc3WzQ8?si=0ZjfehBNeBQShQjk' },
                        ]
                    },
                    {
                        name: 'Realations and Functions',
                        videos: [
                            { title: 'Introduction to Genetics', videoUrl: 'https://www.youtube.com/watch?v=m-H64-ilujI' },
                            { title: 'Mendelian Genetics', videoUrl: 'https://www.youtube.com/watch?v=mhZ7_bKLm9I' },
                        ]
                    },
                ]
            },
        ];

        const filteredLectures = dummyLectures.filter(lecture =>
            studentSubjects.includes(lecture.subject)
        );
        return filteredLectures;
    };

    const filterLectures = (query) => {
        const filtered = filteredLectures.filter((subject) => {
            const matchingChapters = subject.chapters.filter((chapter) =>
                chapter.videos.some((video) =>
                    video.title.toLowerCase().includes(query.toLowerCase())
                )
            );
            return matchingChapters.length > 0;
        });
        setFilteredLectures(filtered);
    };

    return (
        <div className={styles.lecturesContainer}>
            <h2 className={styles.sectionTitle}>Lectures</h2>
            {/* <input
                type="text"
                placeholder="Search by lecture name or chapter"
                className={styles.searchInput}
                value={searchQuery}
                onChange={handleSearch}
            /> */}
            {filteredLectures.map((subject, subjectIndex) => (
                <div key={subjectIndex} className={styles.subjectContainer}>
                    <h3 className={styles.subjectTitle}>{subject.subject}</h3>
                    <div className={styles.videoList}>
                        {subject.chapters.map((chapter, chapterIndex) => (
                            <div key={chapterIndex} className={styles.chapterContainer}>
                                <h4 className={styles.chapterName}>{chapter.name}</h4>
                                <div className={styles.chapterContent}>
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
