import Head from 'next/head';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiCsharp, SiPython, SiJavascript, SiHtml5, SiCss3, SiMysql, SiPhp, SiLua } from 'react-icons/si';

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
             I have completed my Second-Year finishing with both a 1st Class in both years. I love to brainstorm ideas and bring them to life using my programming and problem-solving skills.
             This portfolio serves as a personal archive on the projects I am proud to showcase to others. Just like this website which is also developed by me!</p>
          <div>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer">
              <FaLinkedin size={24} /> LinkedIn
            </a> 
            <a href="mailto:your.email@example.com">
              <FaEnvelope size={24} /> Email
            </a> 
            <a href="https://github.com/your-github" target="_blank" rel="noreferrer">
              <FaGithub size={24} /> GitHub
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2>Programming Languages</h2>
          <ul>
            <li><SiCsharp size={24} /> C#</li>
            <li><SiPython size={24} /> Python</li>
            <li><SiJavascript size={24} /> Java</li>
            <li><SiHtml5 size={24} /> HTML</li>
            <li><SiCss3 size={24} /> CSS</li>
            <li><SiJavascript size={24} /> JavaScript</li>
            <li><SiMysql size={24} /> SQL</li>
            <li><SiPhp size={24} /> PHP</li>
            <li><SiLua size={24} /> Lua</li>
          </ul>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2>My Projects</h2>
          <div className="projects">
            <div className="project">
              <img src="/images/placeholder.png" alt="Project 1" />
              <h3>Project Title 1</h3>
              <p>A short description of the project.</p>
              <a href="https://github.com/your-github/project1" target="_blank" rel="noreferrer">View Project</a>
            </div>
            <div className="project">
              <img src="/images/placeholder.png" alt="Project 2" />
              <h3>Project Title 2</h3>
              <p>A short description of the project.</p>
              <a href="https://github.com/your-github/project2" target="_blank" rel="noreferrer">View Project</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
