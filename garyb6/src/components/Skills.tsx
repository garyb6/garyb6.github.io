import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact, 
  faJs, 
  faHtml5, 
  faCss3Alt, 
  faNodeJs, 
  faPython, 
  faGitAlt, 
  faDocker, 
  faAws, 
  faLinux, 
  faFigma 
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';

const skills = {
  frontend: [
    { name: 'React', icon: faReact },
    { name: 'TypeScript', icon: faJs },
    { name: 'JavaScript', icon: faJs },
    { name: 'HTML5', icon: faHtml5 },
    { name: 'CSS3', icon: faCss3Alt },
    { name: 'Tailwind CSS', icon: faCss3Alt }
  ],
  backend: [
    { name: 'Node.js', icon: faNodeJs },
    { name: 'Python', icon: faPython },
    { name: 'Express', icon: faNodeJs },
    { name: 'MongoDB', icon: faDatabase },
    { name: 'PostgreSQL', icon: faDatabase },
    { name: 'Redis', icon: faDatabase }
  ],
  tools: [
    { name: 'Git', icon: faGitAlt },
    { name: 'Docker', icon: faDocker },
    { name: 'AWS', icon: faAws },
    { name: 'Linux', icon: faLinux },
    { name: 'VS Code', icon: faCode },
    { name: 'Figma', icon: faFigma }
  ]
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, categorySkills]) => (
          <div key={category} className="skill-category">
            <h3 className="category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <ul className="skill-list">
              {categorySkills.map(skill => (
                <li key={skill.name} className="skill-item">
                  <FontAwesomeIcon icon={skill.icon} size="lg" />
                  <span className="skill-name">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 