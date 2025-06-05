import React from 'react';
import {  Code, Users, Award } from 'react-feather';

const Achievements = () => {
  const achievementCategories = [
    {
      title: "Scholastic Achievements",
      icon: <Award className="text-amber-400" size={24} />,
      items: [
        "Participated in III Review of K-Eureka 2024",
        "SIH 2024 Participant",
        "Scored 61.82 in JEE MAIN",
        "Scored Centum in Physics at State level",
        "Completed Rashtrabasha Praveen",
        "Completed Spoken Hindi Grade IV"
      ],
      bgColor: "bg-gradient-to-br from-amber-900/30 to-amber-800/20",
      borderColor: "border-amber-700"
    },
    {
      title: "Technical Achievements",
      icon: <Code className="text-emerald-400" size={24} />,
      items: [
        "Solved 350+ DSA problems on LeetCode",
        "Participated in Internet of Things Using Raspberry Pi Workshop",
        "Secured Second place in STUDENT INNOVATION CONTEST 2023 at KCE for 'EDUGUIDE'",
        "Responsive Web Designing using Bootstrap with Dynamic Web Design using JavaScript"
      ],
      bgColor: "bg-gradient-to-br from-emerald-900/30 to-emerald-800/20",
      borderColor: "border-emerald-700"
    },
    {
      title: "Leadership & Events",
      icon: <Users className="text-sky-400" size={24} />,
      items: [
        "Conducted Hackathon Event in Dhruva 2025",
        "Conducted Skit & Mime Event in Dhruva 2025",
        "Treasurer in Software Development Club, KCE",
        "Mentoring juniors in PC assembling and hardware setup"
      ],
      bgColor: "bg-gradient-to-br from-sky-900/30 to-sky-800/20",
      borderColor: "border-sky-700"
    },
    {
      title: "Certifications & Courses",
      icon: <Award className="text-purple-400" size={24} />,
      items: [
        "NPTEL Course on The Joy of Computing Python",
        "Fundamentals of DevOps On AWS",
        "NPTEL Course on Soft Skill Development",
        "Completed Learnathon",
        "Completed HTML & CSS Courses"
      ],
      bgColor: "bg-gradient-to-br from-purple-900/30 to-purple-800/20",
      borderColor: "border-purple-700"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementCategories.map((category, index) => (
            <div 
              key={index}
              className={`rounded-2xl p-6 border ${category.borderColor} ${category.bgColor} backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-gray-800 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>
              
              <ul className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex} 
                    className="flex items-start group"
                  >
                    <div className="relative mt-1 mr-3">
                      <div className={`w-3 h-3 rounded-full ${category.borderColor} border-2 group-hover:bg-current transition-colors`}></div>
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute left-0 -bottom-20 w-full h-40 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default Achievements;