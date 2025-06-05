const experiences = [
  {
    company: "InternPe",
    role: "Python Developer Intern",
    duration: "Jun 2023 - Jul 2023",
    description: "Built Python scripts and small automation utilities to streamline workflows.",
    skills: ["Python", "Automation", "Scripting"]
  },
  {
    company: "Octanet",
    role: "Web Development Intern",
    duration: "May 2023 - Jun 2023",
    description: "Created UI components and styled responsive pages for web applications.",
    skills: ["HTML", "CSS", "JavaScript", "React"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="border-b-2 border-cyan-400 pb-1">Experience</span>
        </h2>
        
        <div className="space-y-8 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl hover:shadow-lg hover:shadow-cyan-400/10 transition-all">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-semibold text-cyan-400">{exp.role}</h3>
                <span className="text-gray-400">{exp.duration}</span>
              </div>
              <h4 className="text-lg font-medium mb-3">{exp.company}</h4>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span key={skill} className="bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;