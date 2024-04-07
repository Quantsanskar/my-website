import React from 'react';
import styles from '../styles/LectureVideo.module.css';

const LectureVideo = ({ title, videoUrl }) => {
    return (
        <div className={styles.videoItem}>
            <h3 className={styles.videoTitle}>{title}</h3>
            <div className={styles.videoPlayer}>
                <iframe
                    title={title}
                    width="560"
                    height="315"
                    src={videoUrl}
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default LectureVideo;
