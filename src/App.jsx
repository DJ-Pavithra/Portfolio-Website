import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Project from './Components/Project/Project';
import SkillCard from './Components/SkillCard';
import './App.css';
import avatar from "./assets/avatar.png";
import pic from "./assets/ReactGirl.svg";
import c from './assets/c.png';
import cpp from './assets/cpp.png';
import java from './assets/java.png';
import csharp from './assets/csharp.png';
import mysql from './assets/mysql.png';
import html from './assets/html.png';
import css from './assets/css.png';
import javascript from './assets/javascript.png';
import vs from './assets/vs.png';
import vscode from './assets/vscode.png';
import anaconda from './assets/anaconda.png';
import react from './assets/react.png';
import aspnet from './assets/aspnet.png';
import android from './assets/android.png';

const Home = () => {
  const skills = [
    { name: "C", hoverColor: "#f56c42", image: c },
    { name: "C++", hoverColor: "#42bff5", image: cpp },
    { name: "Java", hoverColor: "#f5b542", image: java },
    { name: "C#", hoverColor: "#42f56c", image: csharp },
    { name: "MySQL", hoverColor: "#f5c142", image: mysql },
    { name: "HTML", hoverColor: "#f5a742", image: html },
    { name: "CSS", hoverColor: "#42f5d1", image: css },
    { name: "JavaScript", hoverColor: "#f542b0", image: javascript },
  ];
  
  const tools = [
    { name: "Visual Studio", hoverColor: "#f56c42", image: vs },
    { name: "VS Code", hoverColor: "#42bff5", image: vscode},
    { name: "Anaconda", hoverColor: "#f5b542", image: anaconda },
    { name: "React.js", hoverColor: "#42f56c", image: react },
    { name: "ASP.NET", hoverColor: "#f5c142", image: aspnet },
    { name: "Android SDK/Studio", hoverColor: "#f5a742", image: android},
  ];

  return (
    <div className="split-container">
      <div className="split section1">
        <img src={avatar} alt="Profile" className="avatar" />
        <div className="content">
          <div className="name-container">
            <span className="name first">PAVITHRA</span>
            <span className="name last">DJ</span>
          </div>
          <div className="info">
            CSE Undergrad | Aspiring Software Developer
            <hr />
            Driven to code, learn, and create impactful tech solutions.
          </div>
        </div>
      </div>

      <div className="split section2">
        <img src={pic} alt="Illustration" className="pic" />
        <div className="about">
          I&apos;m a CSE student at<a href="https://www.ptuniv.edu.in" className="text-link" rel="noopener noreferrer">Puducherry Technological University</a>, and I love working on web applications and exploring UI/UX design. I&apos;ve picked up skills in React, ASP.NET, and Android development. Right now, I&apos;m focusing on building my skills and creating things that can make a difference in the tech world
        </div>
      </div>

      <div className="split section3">
        <div className="skills-container">
          <h2>SKILLS</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                name={skill.name}
                hoverColor={skill.hoverColor}
                imageUrl={(skill.image)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="split section4">
        <div className="tools-and-contact-container">
          <div className="tools-container">
            <h2>TOOLS & FRAMEWORKS</h2>
            <div className="skills-grid">
              {tools.map((skill, index) => (
                <SkillCard
                  key={index}
                  name={skill.name}
                  hoverColor={skill.hoverColor}
                  imageUrl={(skill.image)}
                />
              ))}
            </div>
          </div>

          <div className="contact-container">
            <h2>GET IN TOUCH</h2>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name"  placeholder="Your name"  required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" 
                  required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5"  placeholder="Your message" required></textarea>
              </div>
              <button type="submit" className="submit-button">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div className="split-container">
            <Home />
          </div>
        } />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
};

export default App;