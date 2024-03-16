// components/Navbar.js
import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    const handleSmoothScroll = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link href="#" className={styles.navLink}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="#" onClick={(e) => handleSmoothScroll(e, 'About Us')}>
                        About Us
                    </Link>
                </li>
                <li>
                    <Link href="#" onClick={(e) => handleSmoothScroll(e, 'location')}>
                        Location
                    </Link>
                </li>
                <li>
                    <Link href="#" onClick={(e) => handleSmoothScroll(e, 'mentors')}>
                        Our Mentors
                    </Link>
                </li>
                <li>
                    <Link href="#" onClick={(e) => handleSmoothScroll(e, 'admission-button')}>
                        Join and Apply
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;