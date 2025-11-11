import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import AIChatWidget from './components/AIChatWidget';
import Purchase from './components/Purchase'; // ✅ import Purchase page

function App() {
  return (
    <Router>
      <ScrollProgress />
      <Navbar />
      <Routes>
        {/* Homepage route */}
        <Route
          path="/"
          element={
            <div className="overflow-x-hidden w-full">
              <Hero />
              <About />
              <Services />
              <Projects />
              <Contact />
              <Footer />
              <AIChatWidget />
            </div>
          }
        />

        {/* Purchase page route */}
        <Route path="/purchase" element={<Purchase />} />
      </Routes>
    </Router>
  );
}

export default App;


/*
import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import AIChatWidget from './components/AIChatWidget'



function App() {
 

  return (
    <>
    <ScrollProgress />
      <Navbar />
   
    <div className="overflow-x-hidden w-full ">
      
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />

      <AIChatWidget />
    </div>
     </>
  )
}

export default App
*/