import { useState } from 'react';
import './Skills.css'; // Import your CSS styles
const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillsData = {
    programming: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'C', level: 75 },
      { name: 'C++', level: 70 }
    ],
    web: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'React', level: 85 },
      { name: 'Tailwind CSS', level: 80 }
    ],
    tools: [
      { name: 'VS Code', level: 95 },
      { name: 'MySQL', level: 85 },
      { name: 'PyCharm', level: 80 },
      { name: 'Git', level: 90 }
    ],
    soft: [
      { name: 'Optimistic', level: 90 },
      { name: 'Critical Thinking', level: 85 },
      { name: 'Team Player', level: 95 },
      { name: 'Active Listening', level: 88 }
    ]
  };

  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills</h2>
      
      <div className="skills-grid">
        {/* Programming Skills */}
        <div className="skills-category">
          <h3>Programming</h3>
          <ul>
            {skillsData.programming.map((skill) => (
              <li 
                key={skill.name}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <span className="skill-name">{skill.name}</span>
                {(hoveredSkill === skill.name) && (
                  <div className="skill-details">
                    <span className="skill-percent">{skill.level}%</span>
                    <div className="skill-progress">
                      <div 
                        className="skill-progress-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Web Development Skills */}
        <div className="skills-category">
          <h3>Web Development</h3>
          <ul>
            {skillsData.web.map((skill) => (
              <li 
                key={skill.name}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <span className="skill-name">{skill.name}</span>
                {(hoveredSkill === skill.name) && (
                  <div className="skill-details">
                    <span className="skill-percent">{skill.level}%</span>
                    <div className="skill-progress">
                      <div 
                        className="skill-progress-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Tools */}
        <div className="skills-category">
          <h3>Tools</h3>
          <ul>
            {skillsData.tools.map((skill) => (
              <li 
                key={skill.name}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <span className="skill-name">{skill.name}</span>
                {(hoveredSkill === skill.name) && (
                  <div className="skill-details">
                    <span className="skill-percent">{skill.level}%</span>
                    <div className="skill-progress">
                      <div 
                        className="skill-progress-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Soft Skills */}
        <div className="skills-category">
          <h3>Soft Skills</h3>
          <ul>
            {skillsData.soft.map((skill) => (
              <li 
                key={skill.name}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <span className="skill-name">{skill.name}</span>
                {(hoveredSkill === skill.name) && (
                  <div className="skill-details">
                    <span className="skill-percent">{skill.level}%</span>
                    <div className="skill-progress">
                      <div 
                        className="skill-progress-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
     
    </div>
  );
};

export default Skills;