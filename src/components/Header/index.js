import React from 'react';
import {Link} from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <header>
            <h1>Enrico Perkins, Jr.</h1>
            <nav>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="../../assets/Enrico_Perkins_Resume.pdf" target="_blank">Resume</Link>
            </nav>
        </header>
    );
}

export default Navbar;