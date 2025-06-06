import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">GB</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Gary Bennett</h1>
          <h2>Software Engineer</h2>
          <p>Building innovative solutions with modern technologies</p>
          <a href="#contact" className="cta-button">Get in Touch</a>
        </div>
      </section>

      <section id="about" className="about">
        <div className="section-content">
          <h2>About Me</h2>
          <p>
            I'm a passionate software engineer with expertise in building scalable applications
            and solving complex problems. With a strong foundation in both frontend and backend
            development, I create efficient and user-friendly solutions that make a difference.
          </p>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="section-content">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul>
                <li><i className="fab fa-react"></i> React</li>
                <li><i className="fab fa-js"></i> TypeScript</li>
                <li><i className="fab fa-html5"></i> HTML5/CSS3</li>
                <li><i className="fab fa-js"></i> JavaScript</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <ul>
                <li><i className="fab fa-node-js"></i> Node.js</li>
                <li><i className="fab fa-python"></i> Python</li>
                <li><i className="fas fa-database"></i> SQL</li>
                <li><i className="fas fa-server"></i> REST APIs</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Tools & Others</h3>
              <ul>
                <li><i className="fab fa-git-alt"></i> Git</li>
                <li><i className="fab fa-docker"></i> Docker</li>
                <li><i className="fab fa-aws"></i> AWS</li>
                <li><i className="fas fa-code-branch"></i> CI/CD</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="section-content">
          <h2>Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Project One</h3>
              <p>A full-stack web application built with React and Node.js</p>
              <div className="project-links">
                <a href="#" target="_blank" rel="noopener noreferrer">View Demo</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Source Code</a>
              </div>
            </div>
            <div className="project-card">
              <h3>Project Two</h3>
              <p>An AI-powered data analysis tool using Python</p>
              <div className="project-links">
                <a href="#" target="_blank" rel="noopener noreferrer">View Demo</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Source Code</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="section-content">
          <h2>Get in Touch</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>Email: gary.bennett6@outlook.com</p>
              <p>Location: Whitley Bay, Tyne & Wear, United Kingdom</p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/gary-bennett-041605230/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
                <a href="https://github.com/garyb6" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Message" required></textarea>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Gary Bennett. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App; 