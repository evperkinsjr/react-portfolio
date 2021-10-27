import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 bottom-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <address className="mx-auto flex flex-wrap items-center text-base justify-center">
          <a href="https://github.com/evperkinsjr" className="mx-6 hover:text-white">
            <FaGithub size="40"/>
          </a>
          <a href="https://www.linkedin.com/in/enricoperkinsjr/" className="mx-6 hover:text-white">
            <FaLinkedin size="40"/>
          </a>
        </address>
      </div>
    </footer>
  );
}