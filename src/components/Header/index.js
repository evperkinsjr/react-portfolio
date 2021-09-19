import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <header>
            <h1>Enrico Perkins, Jr.</h1>
            <nav>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="#contact">Contact Me</Link>
                <Link to="assets/documents/Enrico_Perkins_Resume.pdf">Resume</Link>
            </nav>
        </header>
    );
}

export default Navbar;