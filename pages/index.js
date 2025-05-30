import Head from 'next/head';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiCsharp, SiPython, SiJavascript, SiHtml5, SiCss3, SiMysql, SiPhp, SiLua, SiVercel, SiJson, SiNextdotjs, SiLeetcode } from 'react-icons/si';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zayn Ul-Haq - Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />
      </Head>
      
      <main>
        {/* Hero Section */}
        <section id="hero">
          <h1>Zayn Ul-Haq</h1>
          <p>Hi, My Name is Zayn Ul-Haq! I am currently a Computer Science Undergraduate studying at the Manchester Metropolitan University.
             I am in my third and final year, finishing with both a 1st Class in both years. I'm a tech lover with aspirations on joining innovating companies that 
             will help consolidate my skills and introduce me to new technologies. I love to brainstorm ideas and bring them to life using my programming and problem-solving skills.
             This portfolio serves as a personal archive on the projects I am proud to showcase to others. Just like this website which is also developed by me!</p>
          <div>
            <a href="https://www.linkedin.com/in/zayn-ul-haq-31106933b" target="_blank" rel="noreferrer">
              <FaLinkedin size={24} /> LinkedIn
            </a> 
            <a href="mailto:zayn442@hotmail.com">
              <FaEnvelope size={24} /> Email
            </a> 
            <a href="https://github.com/ZaynUH" target="_blank" rel="noreferrer">
              <FaGithub size={24} /> GitHub
            </a>
            <a href="https://leetcode.com/u/Zayn011" target="_blank" rel="noreferrer">
              <SiLeetcode size={24} /> LeetCode
            </a>
          </div>
        </section>

        {/* Curently Doing Section */}
        <section id="currently-doing">
          <h2>Currently Doing</h2>
          <p>Here’s what I’m actively working on:</p>
          <ul>
            <li>Creating a math brain game</li>
            <li>Slowing developing a Fanatsy Fighting game on Roblox</li>
          </ul>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2>Programming Languages</h2>
          <ul>
            <li><SiCsharp size={24} /> C#</li>
            <li><SiPython size={24} /> Python</li>
            <li><SiJson size={24} /> Java</li>
            <li><SiHtml5 size={24} /> HTML</li>
            <li><SiCss3 size={24} /> CSS</li>
            <li><SiJavascript size={24} /> JavaScript</li>
            <li><SiMysql size={24} /> SQL</li>
            <li><SiPhp size={24} /> PHP</li>
            <li><SiLua size={24} /> Lua</li>
            <li><SiVercel size={24} /> Vercel</li>
            <li><SiNextdotjs size={24} /> NextJS</li>
          </ul>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2>My Projects</h2>
          <div className="projects">

            <div className="project">
              <img src="/images/placeholder.png" alt="Project 1" />
              <h3>Quick POS</h3>
              <p>This project is a digital catalog designed to assist my dad in showcasing the variety of bed frames and mattresses sold in the shop. 
                It provides an organized, user-friendly interface to browse available products, compare features, and streamline the selection process for customers. 
                The catalog simplifies inventory management and enhances the shopping experience.</p>
              <a href="http://zaynwebsites.000.pe" target="_blank" rel="noreferrer">View Project</a>
            </div>

            <div className="project">
              <img src="/images/placeholder.png" alt="Project 2" />
              <h3>Home Choice Catalogue</h3>
              <p>Quick POS is a point-of-sale system developed as part of a university project I led. 
                It allows users to manage shop items efficiently, enabling features like adding and appending items to transactions. 
                Additionally, it doubles as an employee time tracking system, allowing staff to clock in and out seamlessly. 
                This dual functionality improves operational efficiency for retail environments.</p>
              <a href="https://zaynuh.github.io/Home-Choice-Catalogue" target="_blank" rel="noreferrer">View Project</a>
            </div>

            <div className="project">
              <img src="/images/placeholder.png" alt="Project 3" />
              <h3>Data Structures Repository</h3>
              <p>This repository includes implementations of different data structures to showcase my understanding on their functionality and uses. 
                 This includes data structures like: Stacks, Queues, LinkedLists, Trees, Binary Trees and many more.
              </p>
              <a href="https://zaynuh.github.io/Home-Choice-Catalogue" target="_blank" rel="noreferrer">View Project</a>
            </div>

            <div className="project">
              <img src="/images/placeholder.png" alt="Project 4" />
              <h3>Battleships</h3>
              <p>A module inside my third year was to create multiple battleships game in varrying programming languages 
                within a Console Application. 
              </p>
              <a href="https://github.com/ZaynUH/Battleships" target="_blank" rel="noreferrer">View Project</a>
            </div>

            <div className="project">
              <img src="/images/placeholder.png" alt="Project 5" />
              <h3>Battleships</h3>
              <p>My Final Year project in which i participated in the module Human Centred Computing. This project is a medical annotation tool which can be used 
                as a multi-purpose Annotation Tool, in which account creation exists to store work. Will be updated frequently to add features.
              </p>
              <a href="https://github.com/ZaynUH/Battleships" target="_blank" rel="noreferrer">View Project</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
