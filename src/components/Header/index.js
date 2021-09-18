import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to="/">Enrico Perkins, Jr.</Link>
            <div>
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Me</Link>
                    </li>
                    <li>
                        <Link to="https://evperkinsjr.github.io/portfolio-website/assets/documents/Enrico_Perkins_Resume.pdf">Resume</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;