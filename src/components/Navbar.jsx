import React, { useState } from "react";
import EljayLogo from "../assets/Final_Logo_TransparentBG.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-black text-white shadow-md" id="home">
      <div className="max-w-5xl mx-auto relative flex items-start justify-center px-4 md:px-6 py-4">

        {/* ✅ Logo (shown only on desktop) */}
        <div className="absolute left-4 top-2 md:left-6 md:top-2 hidden md:block">
          <a href="#home" onClick={scrollToTop}>
            <img
              src={EljayLogo}
              alt="Eljay Logo"
              className="w-14 h-14 object-contain transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          </a>
        </div>

        {/* ✅ Desktop Links */}
        <div className="hidden md:flex space-x-8 mt-2">
          <a href="#home" onClick={scrollToTop} className="hover:text-gray-400 transition-transform duration-300 hover:scale-110">Home</a>
          <a href="#about" className="hover:text-gray-400 transition-transform duration-300 hover:scale-110">About Me</a>
          <a href="#services" className="hover:text-gray-400 transition-transform duration-300 hover:scale-110">Services</a>
          <a href="#projects" className="hover:text-gray-400 transition-transform duration-300 hover:scale-110">Projects</a>
          <a href="#contact" className="hover:text-gray-400 transition-transform duration-300 hover:scale-110">Contact</a>
        </div>

        {/* ✅ Desktop Button */}
        <div className="absolute right-4 top-2 md:right-6 md:top-2 hidden md:flex">
          <a href="#contact" className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full transition-transform duration-300 transform hover:scale-110 hover:shadow-lg shadow-blue-400">
            Connect Me
          </a>
        </div>

        {/* ✅ Mobile Hamburger Only */}
        <div className="md:hidden absolute top-1 right-4">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 pb-4 pt-2 bg-black">
          {/* ✅ Show Logo Inside Dropdown */}
          <img
            src={EljayLogo}
            alt="Eljay Logo"
            className="w-16 h-16 object-contain transition-transform duration-300 hover:scale-110"
          />

          <a href="#home" onClick={scrollToTop} className="hover:text-gray-400">Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-gray-400">About Me</a>
          <a href="#services" onClick={() => setMenuOpen(false)} className="hover:text-gray-400">Services</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-gray-400">Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-gray-400">Contact</a>
          <a href="#contact" className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full transition-transform duration-300 transform hover:scale-110 hover:shadow-lg shadow-blue-400">
            Connect Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

/*
import React, { useState } from "react";
import EljayLogo from "../assets/Final_Logo_TransparentBG.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll to top handler
  const scrollToTop = (e) => {
    e.preventDefault(); // prevent default anchor behavior
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false); // close mobile menu if open
  };

  return (
    <nav className="sticky top-0 z-50 bg-black text-white shadow-md" id="home">
      <div className="max-w-5xl mx-auto relative flex items-center justify-center px-4 md:px-6 py-6">

        
        <div className="absolute left-4 md:left-6">
          <img
            src={EljayLogo}
            alt="Eljay Logo"
            className="w-14 h-14 object-contain transition-transform duration-300 hover:scale-110 cursor-pointer"
          />
        </div>

        
        <div className="hidden md:flex space-x-8">
          <a
            href="#home"
            onClick={scrollToTop}
            className="hover:text-gray-400 transition-transform duration-300 hover:scale-110"
          >
            Home
          </a>
          <a href="#about" className="hover:text-gray-400 transition-transform duration-300 hover:scale-110">
            About Me
          </a>
          <a href="#services" className="hover:text-gray-400 transition-transform duration-300 hover:scale-110">
            Services
          </a>
          <a href="#projects" className="hover:text-gray-400 transition-transform duration-300 hover:scale-110">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400 transition-transform duration-300 hover:scale-110">
            Contact
          </a>
        </div>

        
        <div className="absolute right-4 md:right-6 hidden md:flex">
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full hover:scale-105 transition-transform">
            Connect Me
          </button>
        </div>

       
        <div className="md:hidden absolute right-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

    
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-3 pb-4">
          <a href="#home" onClick={scrollToTop} className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-gray-400">
            About Me
          </a>
          <a href="#services" onClick={() => setMenuOpen(false)} className="hover:text-gray-400">
            Services
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-gray-400">
            Contact
          </a>
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full hover:scale-105 transition-transform">
            Connect Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


*/
/*
import React from 'react'

const Navbar = () => {
    return (
    
      <nav className='bg-black text-white px-8 md:px-16 lg:px-24 '>
           <div className='container py-2 flex justify-center md:justify-between items-center'>
                  <div className='text-2xl font-bold hidden md:inline'>EljayLogo</div>
                  <div className='space-x-6'>
                      <a href="#home" className='hover:text-gray-400'>Home</a>
                      <a href="#about" className='hover:text-gray-400'>About Me</a>
                      <a href="#services" className='hover:text-gray-400'>Services</a>
                      <a href="#projects" className='hover:text-gray-400'>Projects</a>
                      <a href="#contact" className='hover:text-gray-400'>Contact</a>
                  </div>
                  <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
                                     transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button>
                  
            </div>
      </nav>
    )
  }
  
  export default Navbar
  */