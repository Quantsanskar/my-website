// components/Footer.js

import {React} from 'react';
import styles from '../styles/Footer.module.css';


const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <nav>
                <ul className={styles.footerNav}>
                    <li className={styles.footerNavItem}>
                        <a href="/terms" className={styles.footerNavLink}>Terms of Service</a>
                    </li>
                    <li className={styles.footerNavItem}>
                        <a href="/privacy" className={styles.footerNavLink}>Privacy Policy</a>
                    </li>
                    
                    
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
