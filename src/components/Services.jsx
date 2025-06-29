import React from 'react';

const services = [
  {
    id: 1,
    title: 'Web Design',
    description: 'Creating visually a simple and user-friendly portfolio design.',
  },
  {
    id: 2,
    title: 'Editing Videos',
    description: 'Editing videos for a vlog, presentation, and more.',
  },
  {
    id: 3,
    title: 'Resume Customization and Templates',
    description: 'Can customize a resume for a job and free downloadable templates.',
  },
  {
    id: 4,
    title: 'Editing Photos',
    description: 'Can edit high-quality photos with creative designs and specifications.',
  },
  {
    id: 5,
    title: 'Dota2 Accounts, Boosting & Items',
    description: 'Selling Dota2 accounts at low prices, MMR boosting, and item deals.',
  },
  {
    id: 6,
    title: 'Generate Facebook Auto-Likes',
    description: 'Can generate Facebook likes — even up to unlimited likes.',
  },
];

const Services = () => {
  return (
    <div className="relative bg-black text-white py-10">
      {/* Invisible anchor for scroll alignment */}
      <span id="services" className="absolute -top-24" />

      <div
        className="container mx-auto px-6 md:px-12 lg:px-20"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h2
          className="text-4xl font-bold text-center mb-4"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="relative bg-gray-800 px-4 py-3 rounded-lg hover:shadow-[0_0_12px_#d1d5db] transition-transform duration-300 hover:scale-105 flex flex-col justify-between h-36"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="1000"
            >
              <div className="absolute top-2 right-3 text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400">
                {service.id}
              </div>

              <div className="mt-0.5">
                <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  {service.title}
                </h3>
                <p className="mt-1 text-gray-300 text-sm leading-snug">
                  {service.description}
                </p>
              </div>

              <a
                href="#contact"
                className="mt-2 text-green-400 hover:text-blue-500 text-xs self-start"
              >
                Hire Me
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;




/* NORMAL CODE
import React from 'react'

const servicess = [
    {
        id: 1,
        title: "Web Design",
        description: "Creating visually a simple and user-friendly portfolio design."
    }, 
    {
        id: 2,
        title: "Editing Videos",
        description: "Editing a videos for a vlog, presentation, and more."
    },
    {
        id: 3,
        title: "Resume Customization and Templates",
        description: "Can customize a resume for a job and free downloadable templates."
    },
    {
        id: 4,
        title: "Editing photos",
        description: "Can edit good quality photos with designs and more specifics."
    },
    {
        id: 5,
        title: "Dota2 accounts, boosting, & items",
        description: "Selling dota2 accounts with low price, can boosts MMR, & selling a good quality items. "
    },
    {
        id: 6,
        title: "Generates Facebook Autolikes",
        description: "Can generate facebook likes with up to unlimited likes."
    },
];
const Services = () => {
  return (
    <div className='bg-black text-white py-20' id='services'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicess.map(services => (
                    <div key={services.id}
                    className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform
                    transition-transform duration-300 hover:scale-105">
                        <div className="text-right text-2x1 font-bold text-transparent bg-clip-text
                        bg-gradient-to-r from-green-600 to-blue-400">
                            {services.id}
                        </div>
                        <h3 className="mt-2 text-2x1 font-bold text-transparent bg-clip-text
                        bg-gradient-to-r from-green-400 to-blue-500">
                            {services.title}
                        </h3>
                        <p className="mt-2 text-gray-300">{services.description}</p>
                        <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500">Read More</a>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services
*/