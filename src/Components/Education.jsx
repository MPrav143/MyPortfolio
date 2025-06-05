import { GraduationCap } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Karpagam College of Engineering",
      year: "2023 - Current",
      details: "GPA: 7.2/10.0"
    },
    {
      id: 2,
      degree: "Higher Secondary Education",
      institution: "St. Paul's Matriculation Higher Secondary School",
      year: "2021 - 2023",
      details: "Percentage: 86.67%"
    }
  ];

  return (
    <section 
      id="education" 
      className="py-20 text-white relative"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/diwykgo1k/image/upload/v1748800126/Education_crzdje.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0e1628]/90 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="border-b-2 border-cyan-400 pb-2">Education</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu) => (
            <div 
              key={edu.id} 
              className="
                bg-gray-900/80 border border-cyan-400/20 rounded-xl p-6 
                hover:border-cyan-400/40 transition-all duration-300
                hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/10
                backdrop-blur-sm
              "
            >
              <div className="flex items-start gap-4">
                <div className="bg-cyan-400/10 p-3 rounded-full">
                  <GraduationCap className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-400">{edu.degree}</h3>
                  <p className="text-gray-300 mt-1">{edu.institution}</p>
                  <p className="text-gray-400 text-sm mt-2">{edu.year}</p>
                  <p className="text-gray-300 mt-3">{edu.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;