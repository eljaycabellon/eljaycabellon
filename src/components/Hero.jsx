

import React, { useEffect, useState, useRef } from 'react';
import HeroImage from '../assets/hero-image.png';

const Hero = () => {
  const texts = [
    "I craft smart-looking, dumb-working web stuff.",
    "I build colorful but useless interfaces.",
    "I create slow-loading but shiny apps."
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const heroRef = useRef(null);

  // Typing effect logic
  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => (deleting ? prev - 1 : prev + 1));
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, texts]);

  // Cursor blink
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className={`bg-black text-white text-center py-16 transition-all duration-2000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <img
        src={HeroImage}
        alt="Avatar"
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transition-transform duration-300 hover:scale-105'
      />

      <h1 className='text-4xl font-bold'>
        I'm{" "}
        <span className='animated-gradient-text'>Eljay Cabellon</span>, Newbie Dumbsite Developer
      </h1>

      <p className='mt-4 text-lg text-gray-300 font-mono px-6 sm:px-0 max-w-xl mx-auto'>
        {texts[index].substring(0, subIndex)}
        <span className='ml-1'>{blink ? '|' : ' '}</span>
      </p>

      <div className='mt-8 space-x-4'>
        <button
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-2 rounded-full font-semibold tracking-wide shadow-lg transition duration-300 ease-in-out hover:scale-110 hover:shadow-pink-500/50 cursor-pointer'
        >
          Contact With Me
        </button>

        <a
          href="/EljayCabellon.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-2 rounded-full font-semibold tracking-wide shadow-lg transition duration-300 ease-in-out hover:scale-110 hover:shadow-pink-500/50 cursor-pointer'
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;

/* 06292025
import React, { useEffect, useState, useRef } from 'react';
import HeroImage from '../assets/hero-image.png';

const Hero = () => {
  const texts = [
    "I craft smart-looking, dumb-working web stuff.",
    "I build colorful but useless interfaces.",
    "I create slow-loading but shiny apps."
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const heroRef = useRef(null);

  // Typing effect
  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => (deleting ? prev - 1 : prev + 1));
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, texts]);

  // Blinking cursor
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  // Intersection observer for scroll-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className={`bg-black text-white text-center py-16 transition-all duration-2000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <img
        src={HeroImage}
        alt="Avatar"
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transition-transform duration-300 hover:scale-105'
      />

      <h1 className='text-4xl font-bold'>
        I'm{" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          Eljay Cabellon
        </span>
        , Newbie Dumbsite Developer
      </h1>

      <p className='mt-4 text-lg text-gray-300 font-mono px-6 sm:px-0 max-w-xl mx-auto'>
        {texts[index].substring(0, subIndex)}
        <span className='ml-1'>{blink ? '|' : ' '}</span>
      </p>

      <div className='mt-8 space-x-4'>
        <button
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-2 rounded-full font-semibold tracking-wide shadow-lg transition duration-300 ease-in-out hover:scale-110 hover:shadow-pink-500/50 cursor-pointer'>
          Contact With Me
        </button>

        <a
          href="/resume.pdf#zoom=80"
          target="_blank"
          rel="noopener noreferrer"
          className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-2 rounded-full font-semibold tracking-wide shadow-lg transition duration-300 ease-in-out hover:scale-110 hover:shadow-pink-500/50 cursor-pointer'>
          Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
*/




/*
import React, { useEffect, useState } from 'react';
import HeroImage from '../assets/hero-image.png';

const Hero = () => {
  const texts = [
    "I specialize in building modern and responsive dumb web applications.",
    "I build colorful but useless interfaces.",
    "I create slow-loading but shiny apps."
  ];

  const [index, setIndex] = useState(0);       // sentence index
  const [subIndex, setSubIndex] = useState(0); // char index
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) =>
        deleting ? prev - 1 : prev + 1
      );
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, texts]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className='bg-black text-white text-center py-16'>
      <img
        src={HeroImage}
        alt="Avatar"
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transition-transform duration-300 hover:scale-105'
      />
      <h1 className='text-4xl font-bold'>
        I'm{" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          Eljay Cabellon
        </span>
        , Newbie Dumbsite Developer
      </h1>

      <p className='mt-4 text-lg text-gray-300 font-mono px-6 sm:px-0 max-w-xl mx-auto'>
        {texts[index].substring(0, subIndex)}
        <span className='ml-1'>{blink ? '|' : ' '}</span>
      </p>

      <div className='mt-8 space-x-4'>
        <button
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-2 rounded-full font-semibold tracking-wide shadow-lg transition duration-300 ease-in-out hover:scale-110 hover:shadow-pink-500/50 cursor-pointer'>
          Contact With Me
        </button>

        <a
          href="/resume.pdf#zoom=80"
          target="_blank"
          rel="noopener noreferrer"
          className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-2 rounded-full font-semibold tracking-wide shadow-lg transition duration-300 ease-in-out hover:scale-110 hover:shadow-pink-500/50 cursor-pointer'>
          Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
*/