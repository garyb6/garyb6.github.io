import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
    image: 'https://placehold.co/600x400/1a1a3a/00f7ff?text=E-Commerce+Platform',
    category: 'fullstack',
    demoLink: '#',
    sourceLink: '#',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A responsive task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: 'https://placehold.co/600x400/1a1a3a/7b2cf9?text=Task+Management',
    category: 'frontend',
    demoLink: '#',
    sourceLink: '#',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS']
  },
  {
    id: 3,
    title: 'API Gateway Service',
    description: 'A scalable API gateway service that handles authentication, rate limiting, and request routing for microservices architecture.',
    image: 'https://placehold.co/600x400/1a1a3a/ff2e63?text=API+Gateway',
    category: 'backend',
    demoLink: '#',
    sourceLink: '#',
    technologies: ['Node.js', 'Express', 'Redis', 'Docker']
  }
];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      
      <div className="project-filters">
        <button
          className={`filter-button ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          All
        </button>
        <button
          className={`filter-button ${activeFilter === 'frontend' ? 'active' : ''}`}
          onClick={() => setActiveFilter('frontend')}
        >
          Frontend
        </button>
        <button
          className={`filter-button ${activeFilter === 'backend' ? 'active' : ''}`}
          onClick={() => setActiveFilter('backend')}
        >
          Backend
        </button>
        <button
          className={`filter-button ${activeFilter === 'fullstack' ? 'active' : ''}`}
          onClick={() => setActiveFilter('fullstack')}
        >
          Full Stack
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card" data-category={project.category}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map(tech => (
                  <span key={tech} className="technology-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  View Demo
                </a>
                <a href={project.sourceLink} target="_blank" rel="noopener noreferrer">
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 