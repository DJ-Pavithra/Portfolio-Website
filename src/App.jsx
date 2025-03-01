/* eslint-disable react/no-unescaped-entities */
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Project from './Components/Project/Project';
import SkillCard from './Components/SkillCard';
import './App.css';
import avatar from "./assets/avatar.png";
import pic from "./assets/About.svg";
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
import Contact from './Contact';
import { useTheme } from './context/ThemeContext';
import { Linkedin, Github,Mail} from 'lucide-react';
import particlesConfig from './particles-config';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { FaGraduationCap, FaLaptopCode, FaBriefcase, FaCertificate } from 'react-icons/fa';
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
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    
    <div className="split-container">
      <div className="split section1">
        <Particles id="particles" init={particlesInit} options={particlesConfig}></Particles>
        <img src={avatar} alt="Profile" className="avatar" />
        <div className="content">
          <div className="name-content">
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
      <h2 className="section-title">About Me</h2>
      
      <div className="about-container">
        <div className="profile-image-container">
          <img src={pic} alt="Profile" className="pic" />
          <div className="social-links">
            <a href="https://github.com/DJ-Pavithra" className="social-icon" aria-label="GitHub">
              <Github className="fab fa-github"></Github>
            </a>
            <a href="https://www.linkedin.com/in/pavithra-djanaguiraman-864097334/" className="social-icon" aria-label="LinkedIn">
              <Linkedin className="fab fa-linkedin"></Linkedin>
            </a>
            <a href="mailto:djpavithra2005@gmail.com" className="social-icon" aria-label="Email">
              <Mail className="fas fa-envelope"></Mail>
            </a>
          </div>
        </div>
        
        <div className="about">
          <p className="about-text">
            I'm a CSE student at <a href="https://www.ptuniv.edu.in" className="text-link" rel="noopener noreferrer">Puducherry Technological University</a>, 
            passionate about web applications and UI/UX design. I've developed skills in React, ASP.NET, and Android development. 
            Currently, I'm focused on enhancing my technical expertise and creating innovative solutions that can make a meaningful impact in the tech world.
          </p>
          
          <div className="key-details">
            <div className="detail-item">
              <FaGraduationCap className="detail-icon" />
              <div>
                <h3>Education</h3>
                <p>B.Tech in Computer Science & Engineering</p>
                <p>Puducherry Technological University (2022-2026)</p>
              </div>
            </div>
            
            <div className="detail-item">
              <FaLaptopCode className="detail-icon" />
              <div>
                <h3>Technical Skills</h3>
                <div className="skills-container">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">ASP.NET</span>
                  <span className="skill-tag">Android</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">UI/UX</span>
                  <span className="skill-tag">HTML/CSS</span>
                </div>
              </div>
            </div>
            
            <div className="detail-item">
              <FaBriefcase className="detail-icon" />
              <div>
                <h3>Experience</h3>
                <p>Web Development Intern - Atal Incubation Center(AICPEC)</p>
              </div>
            </div>
            
            <div className="detail-item">
              <FaCertificate className="detail-icon" />
              <div>
                <h3>Certifications</h3>
                <p>SQL Intermediate</p>
                <p>Type Writing-Junior</p>
              </div>
            </div>
          </div>
          
          <div className="personal-interests">
            <h3>When I'm not coding...</h3>
            <p>I enjoy Competitive programming (LeetCode, CodeChef),Board Games (like Carrom), exploring new tech. I'm also passionate about creating accessible digital experiences that solve real-world problems.</p>
          </div>
          
          <a href="/resume.pdf" className="resume-button">Download Resume</a>
        </div>
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

            <Contact/>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="app-container" data-theme={isDarkMode ? 'dark' : 'light'}>
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