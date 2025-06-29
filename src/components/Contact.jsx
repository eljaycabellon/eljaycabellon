import React, { useRef } from 'react';
import { FaPhone, FaMapMarkedAlt, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { toast, Toaster } from 'react-hot-toast';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'eljay_cabellon',
      'template_eljaycabellon',
      form.current,
      'JpvHmmKq9nYycrCy5'
    ).then((result) => {
      toast.success('Message delivered successfully. I’ll get back to you shortly.', {
        duration: 6000,
        style: {
          background: '#1e1e1e',
          color: '#ffffff',
          border: '1px solid #4ade80',
          padding: '12px 24px',
          fontSize: '14px',
        },
        iconTheme: {
          primary: '#4ade80',
          secondary: '#1e1e1e',
        },
      });
      form.current.reset();
    }).catch(() => {
      toast.error('❌ Failed to send message. Please try again later.', {
        duration: 6000,
      });
    });
  };

  return (
    <section className="relative bg-black text-white pt-0 pb-20">
      {/* Toast Container (Centered) */}
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            zIndex: 9999,
          },
        }}
      />

      <span id="contact" className="absolute -top-24" aria-hidden="true" />

      <div
        className="container mx-auto px-6 md:px-12 lg:px-20"
        data-aos="zoom-in-up"
        data-aos-duration="2000"
      >
        <h2
          className="text-4xl font-bold text-center mb-12"
          data-aos="flip-left"
          data-aos-duration="1000"
        >
          Contact
        </h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Contact Info */}
          <div
            className="flex-1 mb-10 md:mb-0"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
              Let's Talk
            </h3>
            <p className="text-gray-300">
              I'm open to discussing web development projects or partnership opportunities.
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <div>
                <FaEnvelope className="inline-block text-green-400 mr-2" />
                <a href="mailto:eljaywalker448@gmail.com" className="hover:underline">
                  eljaywalker448@gmail.com
                </a>
              </div>
              <div>
                <FaPhone className="inline-block text-green-400 mr-2" />
                <span>+639938945585</span>
              </div>
              <div>
                <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
                <span>Basak Pardo, Cebu City, Cebu Philippines</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className="flex-1 w-full"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  rows="5"
                  placeholder="Enter Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white inline-block px-8 py-2 rounded-full font-semibold tracking-wide shadow-lg transform transition duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_15px_#22d3ee] cursor-pointer"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
/*
import React from 'react'
import { FaPhone, FaMapMarkedAlt, FaEnvelope } from 'react-icons/fa';

import emailjs from 'emailjs-com';
import { useRef } from 'react';


const Contact = () => {

const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'eljay_cabellon',    // replace with your EmailJS service ID
    'template_eljaycabellon',   // replace with your EmailJS template ID
    form.current,
    'JpvHmmKq9nYycrCy5'     // replace with your EmailJS public key
  )
  .then((result) => {
    alert("Message sent successfully!");
    form.current.reset();
  }, (error) => {
    alert("Failed to send message, please try again.");
  });
};


  return (
    <div className='bg-black text-white py-20' id='contact'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>Contact</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                  
                    <div className='flex-1'>
                    <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r
                    from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
                    <p>I'm open to discussing web development projects or partnership opportunities.</p>
                     <div className='mb-4  mt-8'>
                      <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                      <a href="mailto:eljaywalker448@gmail.com" className='hover:underline'>
                        eljaywalker448@gmail.com
                        </a>

                    </div>
                    <div className='mb-4'>
                      <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                      <span>+639938945585</span>

                    </div>
                    <div className='mb-4'>
                      <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
                      <span>Basak Pardo, Cebu City, Cebu Philippines</span>

                    </div>
                  </div>
                  <div className='flex-1 w-full'>
                        <form ref={form} onSubmit={sendEmail} className='space-y-4'>
                              <div>
                                    <label htmlFor="name" className='block mb-2'>Your Name</label>
                                    <input type="text" name="name" required className='w-full p-2 rounded bg-gray-800 border
                                    border-gray-600 focus:outline-none focus:border-green-400'
                                    placeholder='Enter Your Name'></input>
                              </div>

                                <div>
                                    <label htmlFor="email" className='block mb-2'>Email</label>
                                    <input type="email" name="email" required className='w-full p-2 rounded bg-gray-800 border
                                    border-gray-600 focus:outline-none focus:border-green-400'
                                    placeholder='Enter Your Email'></input>
                              </div>

                              <div>
                                    <label htmlFor="message" className='block mb-2'>Message</label>
                                    <textarea name="message" required className='w-full p-2 rounded bg-gray-800 border
                                    border-gray-600 focus:outline-none focus:border-green-400'
                                    rows="5" placeholder='Enter Your Message'></textarea>
                              </div>
                              <button
  type="submit"
  className='bg-gradient-to-r from-green-400 to-blue-500 text-white inline-block
             px-8 py-2 rounded-full font-semibold tracking-wide shadow-lg
             transform transition duration-300 ease-in-out hover:scale-110 hover:shadow-blue-500/50 cursor-pointer'
>
  Send
</button>

                              
                        </form>
                  </div>
                </div>
            </div>
        </div>
        
  )
}

export default Contact
*/

/*
import React from 'react'
import { FaPhone, FaMapMarkedAlt, FaEnvelope } from 'react-icons/fa';




const Contact = () => {




  return (
    <div className='bg-black text-white py-20' id='contact'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>Contact</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                  
                    <div className='flex-1'>
                    <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r
                    from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
                    <p>I'm open to discussing web development projects or partnership opportunities.</p>
                     <div className='mb-4  mt-8'>
                      <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                      <a href="mailto:eljaywalker448@gmail.com" className='hover:underline'>
                        eljaywalker448@gmail.com
                        </a>

                    </div>
                    <div className='mb-4'>
                      <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                      <span>+639938945585</span>

                    </div>
                    <div className='mb-4'>
                      <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
                      <span>Basak Pardo, Cebu City, Cebu Philippines</span>

                    </div>
                  </div>
                  <div className='flex-1 w-full'>
                        <form className='space-y-4'>
                              <div>
                                    <label htmlFor="name" className='block mb-2'>Your Name</label>
                                    <input type="text" className='w-full p-2 rounded bg-gray-800 border
                                    border-gray-600 focus:outline-none focus:border-green-400'
                                    placeholder='Enter Your Name'></input>
                              </div>

                                <div>
                                    <label htmlFor="email" className='block mb-2'>Email</label>
                                    <input type="text" className='w-full p-2 rounded bg-gray-800 border
                                    border-gray-600 focus:outline-none focus:border-green-400'
                                    placeholder='Enter Your Email'></input>
                              </div>

                              <div>
                                    <label htmlFor="message" className='block mb-2'>Message</label>
                                    <textarea type="text" className='w-full p-2 rounded bg-gray-800 border
                                    border-gray-600 focus:outline-none focus:border-green-400'
                                    rows="5" placeholder='Enter Your Message'></textarea>
                              </div>

                              <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
                                     transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
                        </form>
                  </div>
                </div>
            </div>
        </div>
        
  )
}

export default Contact
*/