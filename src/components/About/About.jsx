import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/Pass.jpeg';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hello 👋 I'm
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Prajwal Raj A R
          </h2>

          {/* Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Full-Stack Developer',
                'MERN Stack Developer',
                'React & Node.js Developer',
                'Problem Solver',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>

          {/* Updated About Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-6 mt-6 leading-relaxed">
            I'm a passionate Full-Stack Developer who builds scalable,
            high-performance web applications using the MERN stack.
            I enjoy transforming complex problems into clean, user-friendly solutions.
            Built 5+ real-world projects and continuously improving my skills
            in modern web technologies.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1Eh98zK0EyA59pX74Zj10jxJrNOBTZKaa/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-6 text-lg font-bold transition duration-300 transform hover:scale-105 hover:shadow-xl"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 10px 30px rgba(130,69,236,0.4)',
            }}
          >
            DOWNLOAD CV
          </a>

        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] 
            rounded-full p-2 bg-gradient-to-r from-purple-500 to-pink-500"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Prajwal Raj A R"
              className="w-full h-full rounded-full object-cover"
            />
          </Tilt>
        </div>

      </div>
    </section>
  );
};

export default About;
