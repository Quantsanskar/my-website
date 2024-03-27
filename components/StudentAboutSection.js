// StudentAboutSection.js

import React from 'react';
import styles from '../styles/StudentAboutSection.module.css';

const AboutSection = () => {
    return (
        <div className={styles.aboutContainer}>
            <h2>About</h2>
            <div className={styles.aboutContent}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut posuere urna.
                    Integer sed augue tortor. Sed in arcu non justo venenatis posuere.
                    Sed ac eros vehicula, fermentum leo a, suscipit odio.
                </p>
                <p>
                    Praesent volutpat ex vel justo ultrices, id consequat felis scelerisque.
                    Duis vel libero quis sapien iaculis ullamcorper. Integer non felis a sapien vestibulum consectetur.
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                    Nulla eu eros eget nulla consequat scelerisque. Sed vehicula lectus vel nisi posuere, non pharetra est dignissim.
                    Integer laoreet ex ut nisl bibendum, sed tincidunt ipsum lacinia.
                </p>
            </div>
        </div>
    );
};

export default AboutSection;
