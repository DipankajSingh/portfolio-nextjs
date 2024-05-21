// Language.jsx

import React from 'react';

export default function Language({ lang }) {
    const backgroundColors = ['#f44900', 'red', 'blue', 'green', 'purple', '#ff0037'];
    const currentBackgroundColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
    return (
        <li style={{ backgroundColor: currentBackgroundColor }} className={`w-max px-4 py-1 rounded-full`}>
            {lang}
        </li>
    );
}
