import React, { useRef, useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Footer = () => {
  const subscribeForm = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState(""); // 'success' | 'error' | 'info'

  const showMessage = (message, type = "info", duration = 6000) => {
    setStatusMessage(message);
    setStatusType(type);
    setTimeout(() => setStatusMessage(""), duration);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    const emailInput = subscribeForm.current.elements.email.value.trim();

    if (!emailInput) {
      showMessage("⚠️ Please enter your email before subscribing.", "error", 3000);
      return;
    }

    emailjs.sendForm(
      'eljay_cabellon',
      'template_nscrlqh',
      subscribeForm.current,
      'JpvHmmKq9nYycrCy5'
    ).then(() => {
      showMessage("✅ You're now subscribed. Please check your inbox.", "success", 6000);
      subscribeForm.current.reset();
    }).catch((error) => {
      showMessage("❌ Failed to subscribe. Please try again.", "error", 3000);
      console.error("EmailJS Error:", error);
    });
  };

  const handlePrivacyClick = () => {
    showMessage("🔒 Privacy policy is currently under construction. Stay tuned!", "info", 5000);
  };

  const handleTermsClick = () => {
    showMessage("📄 Terms of Service coming soon. Thank you for your patience!", "info", 5000);
  };

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Eljay Cabellon</h3>
            <p className="text-gray-400">
              Full-dumb Developer based in the Philippines, specializing in web and software development.
            </p>
          </div>

          <div className="flex-1 w-full">
            <form
              ref={subscribeForm}
              onSubmit={handleSubscribe}
              className="flex items-center justify-center relative"
            >
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg hover:scale-105 transition-transform cursor-pointer"
              >
                Subscribe
              </button>
            </form>

            {statusMessage && (
              <div
                className={`mt-2 text-sm px-4 py-2 rounded-md transition-all duration-300 animate-fade-in-down
                  ${statusType === 'success' ? 'bg-green-600' :
                    statusType === 'error' ? 'bg-red-600' : 'bg-blue-600'} text-white`}
              >
                {statusMessage}
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Eljay. All rights reserved.
          </p>

          <div className="flex space-x-4 my-4 md:my-0">
            <a href="https://web.facebook.com/JayCabellon08" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/eljaycabellon/" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@eljaycabellon448" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://www.linkedin.com/in/eljaycabellon/" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>

          <div className="flex space-x-4">
            <button onClick={handlePrivacyClick} className="text-gray-400 hover:text-white underline underline-offset-4 cursor-pointer bg-transparent">
              Privacy
            </button>
            <button onClick={handleTermsClick} className="text-gray-400 hover:text-white underline underline-offset-4 cursor-pointer bg-transparent">
              Terms of Services
            </button>
          </div>
        </div>
      </div>

      {/* Tailwind animation for message */}
      <style>
        {`
          @keyframes fade-in-down {
            from { opacity: 0; transform: translateY(-6px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-down {
            animation: fade-in-down 0.4s ease-out;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;

/* 06292025
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
                <div className='flex-1 mb-4 md:mb-0'>
                 <h3 className="text-2xl font-bold mb-2">Eljay Cabellon</h3>
                 <p className="text-gray-400">Full-dumb Developer based in the Philippines, specializing in
                    web and software development
                 </p>
                </div>

                <div className='flex-1 w-full'>
                    <form className="flex items-center justify-center"> 
                        <input type="email" placeholder='Your Email'
                        className="w-full p-2 rounded-l-lg bg-gray-800
                        border border-gray-600 focus:outline-none focus:border-green-400"></input>
                        <button type="submit" className="bg-gradient-to-r from-green-400 
                        to-blue-500 text-white px-4 py-2 rounded-r-lg">Subscribe</button>
                    </form>
                </div>
            </div>

                <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row
                justify-between items-center">
                    <p className="text-gray=400">
                        &copy; {new Date().getFullYear()} Eljay. All rights reserved.
                    </p>

                    <div className="flex space-x-4 my-4 md:my-0">
                        <a href="https://web.facebook.com/JayCabellon08" className="text-gray-400 hover:text-white" target="_blank" 
       rel="noopener noreferrer">
                            <FaFacebook />
                        </a>

                        <a href="https://www.instagram.com/eljaycabellon/" target="_blank" 
       rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaInstagram />
                        </a>

                        <a href="https://www.youtube.com/@eljaycabellon448" target="_blank" 
       rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaYoutube />
                        </a>

                        <a href="https://www.linkedin.com/in/eljaycabellon/" target="_blank" 
       rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaLinkedin />
                        </a>
                    </div>

                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white">
                            Privacy
                        </a>

                        <a href="#" className="text-gray-400 hover:text-white">
                            Terms of Services
                        </a>
                    </div>

                </div>
        </div>
    </footer>
  )
}

export default Footer
*/