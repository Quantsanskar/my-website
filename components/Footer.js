// components/Footer.js

import {React} from 'react';
import styles from '../styles/Footer.module.css';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <nav>
                <ul className={styles.footerNav}>
                    <li className={styles.footerNavItem}>
                        <Link href="/terms" className={styles.footerNavLink}>Terms of Service</Link>
                    </li>
                    <li className={styles.footerNavItem}>
                        <Link href="/privacy" className={styles.footerNavLink}>Privacy Policy</Link>
                    </li>
                    
                    
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
