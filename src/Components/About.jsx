import { ChevronRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="border-b-2 border-cyan-400 pb-1">About Me</span>
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Bio</h3>
            <p className="text-gray-300 mb-6">
              Hi, I'm Praveen M (aka Mr. Stark / Jarvis) — a final-year Computer Science and Engineering student at Karpagam College of Engineering, graduating in 2024. I'm a passionate tech enthusiast and aspiring DevOps professional, currently mastering the MERN Stack, DSA, System Design, and DevOps through daily learning and practice.
              <br /><br />
              I've built impactful projects like a Task Manager App with login and premium calendar UI, and a multi-level Maze Game with database integration. I'm also working on a sustainability-focused project in smart resource conservation for home appliances.
              <br /><br />
              Beyond development, I actively organize technical events like El Codios and DesignForge, serve as Treasurer of the Software Development Club, and mentor juniors in PC assembly and hardware setup. I'm preparing for placements with a solid DSA routine.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Leadership</h3>
            <div className="ml-6">
              <div className="flex items-start gap-2">
                <ChevronRight className="text-cyan-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <div className="flex items-baseline gap-2">
                    <h4 className="font-medium text-white">Treasurer</h4>
                    <span className="text-sm text-cyan-400 font-medium">2023 - 2024</span>
                  </div>
                  <p className="text-gray-400 ml-4 mt-1">Software Development Club @ KCE</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Languages</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Tamil', 'English', 'Telugu', 'Hindi', 'Japanese (learning)', 'German (learning)'].map((lang) => (
                <span key={lang} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                  {lang}
                </span>
              ))}
            </div>
            
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Hobbies</h3>
            <div className="flex flex-wrap gap-2">
              {['Anime', 'Poetry', 'Cycling', 'Board Games'].map((hobby) => (
                <span key={hobby} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;