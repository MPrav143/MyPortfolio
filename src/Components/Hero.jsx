import { Download } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-[#0e1628] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-cyan-400">Praveen M</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-cyan-400 drop-shadow-md font-semibold mb-6 min-h-[2.5rem]">
            <Typewriter
              words={[
                'Aspiring Developer',
                'Problem Solver',
                'Tech Enthusiast',
                'Open Source Contributor',
                'Cloud Explorer',
                'Full Stack Learner'
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>

          <p className="text-gray-400 mb-8 max-w-lg">
            Passionate about building efficient, modern tech solutions.
          </p>

          <div className="flex flex-col gap-4 justify-center md:justify-start">
            {/* First row - Projects & Contact buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105"
              >
                View Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105"
              >
                Contact Me
              </button>
            </div>

            {/* Second row - Resume button (full width) */}
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = 'https://drive.google.com/uc?export=download&id=1iFUamv6WyYksUsd6LeH16pTg_wtdR3kA';
                link.download = 'Praveen Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="w-[75%] max-w-[300px] flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-10 py-3 rounded-lg font-medium transition-all transform hover:scale-105"
            >
              <Download size={20} />
              Download Resume
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <img 
              src="https://res.cloudinary.com/diwykgo1k/image/upload/v1748762972/PRAVEEN_tby3sa.jpg" 
              alt="Praveen M" 
              className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-cyan-400/30 object-cover shadow-xl"
            />
            <div className="absolute inset-0 rounded-full border-4 border-transparent animate-pulse shadow-[0_0_20px_5px_rgba(34,211,238,0.5)] -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
