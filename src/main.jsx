import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// AOS animation library
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS once DOM is ready
AOS.init({
  duration: 800,         // Animation duration
  easing: 'ease-in-out', // Smooth easing
  once: false,           // Animate every time you scroll
  mirror: true           // Animate when scrolling up
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);