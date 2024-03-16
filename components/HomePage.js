// HomePage.js
import React from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.heroContent}>
                <h1>Welcome to Our Institution</h1>
                <p>We believe in nurturing minds and shaping futures.</p>
            </div>
        </div>
    );
};

export default HomePage;
