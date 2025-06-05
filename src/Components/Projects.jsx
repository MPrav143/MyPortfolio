import React from 'react';


const projects = [
  {
    title: "Face Recognition System",
    description: "Recognizes faces from saved datasets with high accuracy.",
    technologies: ["Python", "OpenCV", "Tkinter"],
    image: "https://res.cloudinary.com/diwykgo1k/image/upload/v1748763285/face_recognition_gnoa0v.jpg",
    date: "June 2023",
    url: "https://github.com/yourusername/face-recognition" // Replace with actual URL
  },
  {
    title: "FlimOrbit",
    description: "Displays movie ratings, release info, and posters from TMDB API.",
    technologies: ["React", "TMDB API", "CSS"],
    image: "https://res.cloudinary.com/diwykgo1k/image/upload/v1748763285/movie_finder_jbpi02.jpg",
    date: "August 2023",
    url: "https://mprav143.github.io/FlimOrbit/" // Replace with actual URL
  },
  {
    title: "Weather App",
    description: "Fetches and displays live weather data by location.",
    technologies: ["React", "Tailwind CSS", "Weather API"],
    image: "https://res.cloudinary.com/diwykgo1k/image/upload/v1748763286/weather_gmgnoa.jpg",
    date: "October 2023",
    url: "https://github.com/yourusername/weather-app" // Replace with actual URL
  }
];

const Projects = () => {
  const handleViewProject = (url) => {
    // You can add additional logic here if needed
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="border-b-2 border-cyan-400 pb-1">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-cyan-400/10 transition-all transform hover:-translate-y-1 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-cyan-400">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-400">{project.date}</span>
                </div>
                
                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleViewProject(project.url)}
                  className="mt-auto w-full bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-400 py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;