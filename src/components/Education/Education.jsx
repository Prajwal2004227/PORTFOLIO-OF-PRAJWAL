import React from "react";
import { education } from "../../constants"; 

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[5vw] md:px-[10vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white tracking-wider">EDUCATION</h2>
        <div className="w-24 h-1.5 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto font-semibold">
          My academic journey in Computer Science has helped me build strong 
          foundations in programming, data structures, and AI with Software Development.
        </p>
      </div>

      {/* Education Timeline Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Center Line */}
        <div className="absolute hidden sm:block left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-600 h-full"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex flex-col sm:flex-row items-center mb-20 ${
              index % 2 === 0 ? "sm:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Dot/Logo */}
            <div className="absolute left-0 sm:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-4 border-[#8245ec] bg-white overflow-hidden shadow-[0_0_15px_rgba(130,69,236,0.5)]">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-contain p-1"
                />
              </div>
            </div>

            {/* Content Card */}
            <div className={`w-full sm:w-[45%] ml-10 sm:ml-0 ${
              index % 2 === 0 ? "sm:pr-12" : "sm:pl-12"
            }`}>
              <div className="p-6 sm:p-8 rounded-2xl border border-white/20 bg-gray-900/80 backdrop-blur-md shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02]">
                
                {/* School Logo and Info Flex Container */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="min-w-[60px] h-16 bg-white rounded-md overflow-hidden p-1">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {edu.degree}
                    </h3>
                    <h4 className="text-purple-400 text-sm font-medium mt-1">
                      {edu.school}
                    </h4>
                    <p className="text-gray-500 text-xs mt-1 uppercase tracking-wider">
                      {edu.date}
                    </p>
                  </div>
                </div>

                {/* Grade and Description */}
                <div className="space-y-3">
                  <p className="text-gray-300 text-sm font-bold bg-purple-900/30 w-fit px-3 py-1 rounded-md border border-purple-500/30">
                    Grade: {edu.grade}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {edu.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;