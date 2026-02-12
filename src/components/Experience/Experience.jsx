import React from "react";
import { experiences } from "../../constants"; 

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[5vw] md:px-[10vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white tracking-wider">EXPERIENCE</h2>
        <div className="w-24 h-1.5 bg-purple-600 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          A collection of my work experience and the roles I have taken in
          various organizations.
        </p>
      </div>

      {/* Experience Timeline Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Center Line (Hidden on mobile, visible sm+) */}
        <div className="absolute hidden sm:block left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-600 h-full"></div>

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative flex flex-col sm:flex-row items-center mb-20 ${
              index % 2 === 0 ? "sm:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Dot/Logo */}
            <div className="absolute left-0 sm:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-4 border-purple-500 bg-white overflow-hidden shadow-[0_0_15px_rgba(130,69,236,0.5)]">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-contain p-1"
                />
              </div>
            </div>

            {/* Content Card */}
            <div className={`w-full sm:w-[45%] ml-10 sm:ml-0 ${
              index % 2 === 0 ? "sm:pr-12" : "sm:pl-12"
            }`}>
              <div className="p-6 rounded-2xl border border-gray-700 bg-gray-900/80 backdrop-blur-lg shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start gap-4 mb-4">
                  <div className="min-w-[64px] h-16 bg-white rounded-lg overflow-hidden p-1 shadow-inner">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {experience.role}
                    </h3>
                    <p className="text-purple-400 font-medium text-sm mt-1">
                      {experience.company}
                    </p>
                    <p className="text-gray-500 text-xs mt-1 uppercase tracking-tighter">
                      {experience.date}
                    </p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {experience.desc}
                </p>

                <div>
                  <h5 className="text-xs font-semibold text-gray-300 uppercase tracking-widest mb-3">
                    Skills Used
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-purple-900/30 text-purple-300 px-3 py-1 text-[10px] font-medium rounded-full border border-purple-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;