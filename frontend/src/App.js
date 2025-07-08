import './App.css';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Sakura from './components/Sakura/Sakura';
import FormModal from './Modal/FormModal';
import React from 'react';
import { useState } from 'react';



function App() {
  const year = new Date().getFullYear();
  const age = year - 2003;
  const[showModal, setShowModal] =  useState(false);

  
  return (
    <div className="App">
      <Sakura />
      {/** Main Section */}
      <div className="main">
        <div className="description">
          <div>
            <h1 className="name">hi, i'm kristin ! </h1>


            <p>
              frontend and backend developer. currently, my main goal is to
              improve my css skills !!!!{' '}
            </p>

            <button className = "button" onClick={() => setShowModal(true)}>Contact Me</button>
            {showModal && <FormModal onClose={() => setShowModal(false)} />}
          </div>
          <div className="image">
            <img
              className="profile"
              src="honey.jpg"
              alt="Logo"
              width={230}
              height={230}
            />
          </div>
        </div>
      </div>
      {/** About Section */}
      <div>
        <h3 className="about">About Me</h3>
        <p>
          i'm a {age} year old from melbourne, australia. when i'm not coding, i enjoy playing with my dog, drinking matcha and going outside to touch some grass ! 
        </p>
      </div>

      {/** Education Section */}

      <div>
        <h3 className="education">Education</h3>
        <Education
          logo="MonashLogo.jpg"
          university="Monash University"
          degree="Bachelor of Information Technology"
          date="2021 - 2025"
        />
        <div>
          <Education
            logo="killester-college-favicon.png"
            university="Killester College"
            degree="VCE"
            date="2015 - 2020"
          />
        </div>
      </div>

      {/** Experience Section */}
      <div>
        <h3>Experience</h3>
        <Experience />
      </div>

      {/** Skills Section */}
      <div className="skills">
        <h3>Skills</h3>
        <Skills />
      </div>

      {/** Projects Section */}
      <div>
        <Projects />
      </div>
      <div>
        my socials
        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/kristin-do/"
          target="_blank"
        >
          <img
            className="linked"
            width="44"
            height="44"
            src="linkedin.png"
            alt="linkedin--v1"
          />
        </a>
        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/kristin-do/"
          target="_blank"
        >
          <img
            className="git"
            width="44"
            height="44"
            src="git.png"
            alt="linkedin--v1"
          />
        </a>
      </div>
    </div>
  );
}

export default App;
