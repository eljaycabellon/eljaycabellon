import React from 'react';
import Photo1 from '../assets/thumbnail1.jpg';
import Photo2 from '../assets/thumbnail2.jpg';
import Photo3 from '../assets/thumbnail3.png';

const projects = [
  {
    id: 1,
    name: "Calyx Residences",
    technologies: "at Ayala Business Park, Cebu",
    image: Photo3,
    github: "https://www.youtube.com/watch?v=e2bWVVtLhFA&t=0s",
  },
  {
    id: 2,
    name: "Stefan Beach Resort",
    technologies: "at San Remigio, Cebu",
    image: Photo2,
    github: "https://www.youtube.com/watch?v=MLeaiCmi1iI&t=0s",
  },
  {
    id: 3,
    name: "Pag-Utlan Camp",
    technologies: "at Olango Island, Lapu-Lapu",
    image: Photo1,
    github: "https://www.youtube.com/watch?v=5eoLubmuCEo&t=0s",
  },
];

const Projects = () => {
  return (
    <section className="relative bg-black text-white py-16">
      {/* Scroll anchor remains untouched */}
      <span id="projects" className="absolute -top-16" aria-hidden="true" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="-mt-8">
          <h2
            className="text-4xl font-bold text-center mb-12"
            data-aos="fade-up" // ✅ Updated to animate from bottom
          >
            My Vlogs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-gray-800 p-6 rounded-lg hover:shadow-[0_0_12px_#d1d5db] transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-2xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{project.technologies}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-red-400 to-pink-500 text-white px-4 py-2 rounded-full font-semibold tracking-wide shadow-md transition duration-300 ease-in-out hover:scale-110 hover:shadow-pink-500/50"
                >
                  Watch Now!
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

/*
import React from 'react'
import Photo1 from '../assets/thumbnail1.jpg'
import Photo2 from '../assets/thumbnail2.jpg'
import Photo3 from '../assets/thumbnail3.png'


const projects = [

    {
        id:  1,
        name: "Calyx Residences",
        technologies: "at Ayala Business Park, Cebu",
        image: Photo3,
        github: "https://www.youtube.com/watch?v=e2bWVVtLhFA&t=0s",
    },
    {
        id: 2,
        name: "Stefan Beach Resort",
        technologies: "at San Remigio, Cebu",
        image: Photo2,
        github: "https://www.youtube.com/watch?v=MLeaiCmi1iI&t=0s",
    },
    {
        id: 3,
        name: "Pag-Utlan Camp",
        technologies: "at Olango Island, Lapu-Lapu",
        image: Photo1,
        github: "https://www.youtube.com/watch?v=5eoLubmuCEo&t=0s",
    }
];

const Projects = () => {
  return (
    <div className='bg-black text-white py-20' id='projects'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>My Vlogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div key={project.id}  className="bg-gray-800 p-6 rounded-lg hover:shadow-lg
                    transform transition-transform duration-300 hover:scale-105">
                        <img src={project.image} alt={project.name} className="rounded-lg mb-4 
                        w-full h-48 object-cover" />
                        <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                        <p className="text-gray-400 mb-4">{project.technologies}</p>
                        <a href={project.github} className="inline-block bg-gradient-to-r
                        from-red-400 to-pink-500 text-white px-4 py-2 rounded-full font-semibold tracking-wide shadow-md
             transform transition duration-300 ease-in-out 
             hover:scale-110 hover:shadow-pink-500/50"  target="_blank"
                        rel="noopener noreferrer">Watch Now!</a>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Projects
*/