import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Enrico.
          </h1>
          <p className="mb-8 leading-relaxed">
          I'm a full stack developer with a digital marketing background. I recently earned a Full Stack Development certificate from UNC-Charlotte, where I developed skills in JavaScript, MERN Stack, MySQL, and Python. An innovative problem solver focused on helping the user take the desired action. I'm excited to leverage my analytical, creative, and technical abilities to deliver meaningful solutions.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-md lg:w-5/12 md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./assets/profile-photo.jpg"
          />
        </div>
      </div>
    </section>
  );
}