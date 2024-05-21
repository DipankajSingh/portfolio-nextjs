// components/AboutMe.jsx

import React from 'react';

const AboutMe = () => {
    return (
        <section className='px-10 text-2xl font-mono mt-8'>
            <h2 className="text-center text-5xl font-semibold font-nunito mx-4">About Me</h2>
            <p className='mt-3'>
                I'm a self-taught full-stack web developer with a passion for building innovative solutions.
                Originally from a small village, I discovered my love for coding at a young age and have been immersed in the world of software development for the past four years.
            </p>
            <p>
                My journey has been one of self-directed learning and perseverance. Despite facing challenges, my drive to learn and create has always fueled my passion for technology.
                I'm currently pursuing a BCA degree, further solidifying my knowledge of computer science fundamentals.
            </p>
            <p className='mt-4'>
                With a focus on full-stack development, I'm proficient in <strong>javascript</strong> and <strong>react</strong>, and other modern web, mobile and backend technologies.
                I've built a variety of web apps and applications, honing my skills in crafting intuitive user interfaces, designing robust backends, and optimizing for performance.
            </p>
            <p>
                I thrive on challenges and am constantly seeking out new ways to learn and grow as a developer. I'm excited about the opportunity to apply my skills and knowledge to real-world projects and collaborate with a talented team.
            </p>
        </section>
    );
};

export default AboutMe;
