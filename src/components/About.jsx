import React from 'react';
import AboutImage from '../assets/hero-image.png';

const About = () => {
  return (
    <section className="relative bg-black text-white pt-12 pb-20">
      {/* Invisible anchor for scroll alignment */}
      <span id="about" className="absolute -top-24" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20" data-aos="fade-up">
        {/* About Me Title */}
        <h2 className="text-4xl font-bold text-center mb-10" data-aos="fade-down">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-10">
          {/* Image */}
          <img
            src={AboutImage}
            alt="About"
            className="w-52 h-64 rounded object-cover mb-6 md:mb-0"
            data-aos="zoom-in"
          />

          {/* Description + Skills */}
          <div className="flex-1" data-aos="fade-left">
            <p className="text-base mb-6 leading-relaxed text-gray-300">
              I am a passionate dumb-stack developer that focuses on building
              modern and responsive dump web applications. With a weak foundation
              in both frontend and backend technologies, I strive to create
              stupid but simple efficient user experiences.
            </p>

            {/* Skill Bars */}
            <div className="space-y-4">
              <Skill label="HTML & CSS" width="w-8/12" />
              <Skill label="React JS" width="w-5/12" />
              <Skill label="Node JS" width="w-3/12" />
            </div>

            {/* Stats */}
            <div className="mt-8 flex justify-center gap-8 md:gap-14 text-center text-sm flex-wrap">
              <Stat count="6+" label="Months Exp" />
              <Stat count="1+" label="Projects" />
              <Stat count="1+" label="Clients" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skill Component
const Skill = ({ label, width }) => (
  <div className="flex items-center gap-3" data-aos="fade-right">
    <span className="text-sm w-[90px]">{label}</span>
    <div className="flex-1 bg-gray-800 rounded-full h-2">
      <div
        className={`bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full ${width} transform transition-transform duration-300 hover:scale-105`}
      />
    </div>
  </div>
);

// Stat Component
const Stat = ({ count, label }) => (
  <div data-aos="fade-up">
    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 transform transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_6px_#34d399] cursor-default">
      {count}
    </h3>
    <p className="text-sm">{label}</p>
  </div>
);

export default About;



/*
import React from 'react'
import AboutImage from '../assets/hero-image.png'


const About = () => {
  return (
    <div className='bg-black text-white py-20' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <img src={AboutImage} alt="" 
                className='w-72 h-80 rounded object-cover mb-8 md:mb-0'/>
                <div className='flex-1'>
                    <p className='text-lg mb-8'>
                    I am a passionate dumb-stack developer that focus on building
                    modern and responsive dump web applications. With a weak foundation
                    in both frontend and backend technologies, I strive to create 
                    stupid but simple efficient user experiences.
                </p>
                <div className='space-y-4'>
                    <div className='flex items-center'>
                        <label htmlFor="htmlandcss" className="w-2/12">HTML & CSS</label>
                        <div className="grow bg-gray-800 rounded-full h-2.5">
                            <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                            transform transition-transform duration-300 hover:scale-105 w-9/12">
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <label htmlFor="htmlandcss" className="w-2/12">React JS</label>
                        <div className="grow bg-gray-800 rounded-full h-2.5">
                            <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                            transform transition-transform duration-300 hover:scale-105 w-6/12">
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <label htmlFor="htmlandcss" className="w-2/12">Node JS</label>
                        <div className="grow bg-gray-800 rounded-full h-2.5">
                            <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                            transform transition-transform duration-300 hover:scale-105 w-4/12">
                            </div>
                        </div>
                    </div>
                </div>
              
                <div className="mt-12 flex justify-between text-center">
                    <div>
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text
                        bg-gradient-to-r from-green-400 to-blue-500 transform transition-transform duration-300
hover:scale-110 hover:drop-shadow-[0_0_10px_#34d399] cursor-default">
                            6+
                        </h3>
                        <p>Months Experience</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text
                        bg-gradient-to-r from-green-400 to-blue-500 transform transition-transform duration-300
hover:scale-110 hover:drop-shadow-[0_0_10px_#34d399] cursor-default">
                            1+
                        </h3>
                        <p>Projects Completed</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text
                        bg-gradient-to-r from-green-400 to-blue-500 transform transition-transform duration-300
hover:scale-110 hover:drop-shadow-[0_0_10px_#34d399] cursor-default">
                            1+
                        </h3>
                        <p>Happy Clients</p>
                    </div>
                </div>
             
              </div>
            </div>
        </div>
    </div>
  )
}

export default About
*/