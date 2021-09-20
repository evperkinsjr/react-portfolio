import React from 'react';
import "./style.css";

function About() {
    return (
        <section className="page-section">
            <h2>About Me</h2>
            <div>
                <img className="profile-photo" src="/react-portfolio/assets/profile-photo.jpg" alt="Enrico Perkins Jr"/>
                <p>Hi, I'm Enrico. I joined the UNC-Charlotte Coding Bootcamp in April 2021.</p>
                <p>I'm a digital marketer developing skills in full-stack web development.</p>
                <p>My extensive background in digital marketing helps me understand how users interact with websites and applications.</p>
                <p>Strengths include problem solving, creativity, and executing projects independently or collaboratively.</p>
                <p>I'm seeking to leverage my analytical, creative, and technical abilities to build meaningful applications.</p>
            </div>
        </section>
    );
}

export default About;