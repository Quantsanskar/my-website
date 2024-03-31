// CharacterComponent.js
import React from 'react';
import styles from '../styles/WalkingAnimation.module.css';

const CharacterComponent = () => {
    return (
        <div className={styles.character}>
            {/* Your character SVG or image goes here */}
            <img src="/Images/cartoon1.png" alt="Character" />
        </div>
    );
};

export default CharacterComponent;
