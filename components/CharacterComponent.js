// CharacterComponent.js
import React from 'react';
import styles from '../styles/WalkingAnimation.module.css';
import Image from 'next/image';

const CharacterComponent = () => {
    return (
        <div className={styles.character}>
            {/* Your character SVG or image goes here */}
            <Image src="/Images/cartoon1.png" alt="Character" width={500} height={1000}/>
        </div>
    );
};

export default CharacterComponent;
