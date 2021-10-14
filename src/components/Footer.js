import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 bottom-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <address className="mx-auto flex flex-wrap items-center text-base justify-center">
          <a href="https://github.com/evperkinsjr" className="mr-5 hover:text-white">
            Github
          </a>
          <a href="https://www.linkedin.com/in/enricoperkinsjr/" className="mr-5 hover:text-white">
            LinkedIn
          </a>
        </address>
      </div>
    </footer>
  );
}