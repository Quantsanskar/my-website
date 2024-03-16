// components/ThemeToggle.js
import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const body = document.body;
        if (isDarkMode) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className="theme-toggle">
            <button onClick={toggleTheme}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
    );
};

export default ThemeToggle;