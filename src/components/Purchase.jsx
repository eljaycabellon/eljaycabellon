import React, { useRef, useState, useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import emailjs from 'emailjs-com';
import { Maximize2, X } from 'lucide-react';
import PDFPreviewImage from '../assets/pdf-preview.png';
import GCashQR from '../assets/gcash-qr.png';

const PurchasePDF = () => {
  const form = useRef();
  const [showForm, setShowForm] = useState(false);
  const [showQRFullscreen, setShowQRFullscreen] = useState(false);
  const [showPaymentRef, setShowPaymentRef] = useState(false);
  const [sending, setSending] = useState(false);

  // --- Hide Navbar on this page ---
  useEffect(() => {
    const navbar = document.querySelector('nav');
    if (navbar) navbar.style.display = 'none';
    return () => {
      if (navbar) navbar.style.display = '';
    };
  }, []);

  // --- Validators ---
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePaymentRef = (ref) => /^\d{4}$/.test(ref);

  // --- Send PDF Email ---
  const sendPDFEmail = async (e) => {
    e.preventDefault();

    const name = form.current.user_name.value.trim();
    const email = form.current.email.value.trim();
    const paymentRef = form.current.payment_ref.value.trim();

    if (!name || !email) {
      toast.error('Please fill all required fields.');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    if (!showPaymentRef) {
      toast.error('Please confirm your payment first.');
      return;
    }

    if (!validatePaymentRef(paymentRef)) {
      toast.error('Enter a valid 4-digit payment reference.');
      return;
    }

    try {
      setSending(true);

      await emailjs.sendForm(
        'service_6ggpor7', // Gmail Service ID
        'template_cn84r6x', // Template ID
        form.current,
        '0ZcDm4uCUxWLsDyrC' // Public Key
      );

      toast.success('✅ PDF sent to your email!');
      form.current.reset();
      setShowForm(false);
      setShowPaymentRef(false);
      setShowQRFullscreen(false);
    } catch (err) {
      console.error('EmailJS Error:', err.text || err);
      toast.error('❌ Failed to send PDF. Check Service/Template/Public Key.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="bg-black text-white min-h-screen py-16 px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col items-center">
      <Toaster position="top-center" />
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Purchase Call Center PDF
      </h1>
      <p className="text-gray-400 text-center mb-10 text-lg">
        Get the full interview guide for only{' '}
        <span className="text-green-400 font-semibold">₱50 PHP</span>
      </p>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-4xl w-full">
        {/* --- Blurred PDF Preview --- */}
        <div className="relative flex justify-center items-center">
          <img
            src={PDFPreviewImage}
            alt="PDF Preview"
            className="w-64 md:w-72 rounded-lg blur-sm brightness-75 opacity-80 select-none pointer-events-none"
          />
          <div className="absolute text-center text-white bg-black/60 px-3 py-2 rounded-md text-sm font-semibold">
            🔒 Preview Locked – Purchase to Unlock Full PDF (62 Pages)
          </div>
        </div>

        {/* --- Purchase Form Area --- */}
        <div className="flex-1 w-full max-w-md">
          <p className="text-gray-300 mb-4">
            The first page is blurred for preview purposes. You’ll receive the complete PDF immediately after payment confirmation.
          </p>

          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-green-400 text-black font-medium px-6 py-3 rounded hover:bg-green-500 transition mb-4 w-full"
          >
            Purchase PDF via GCash
          </button>

          {showForm && (
            <form
              ref={form}
              onSubmit={sendPDFEmail}
              className="mt-4 p-5 border border-gray-600 rounded bg-gray-900 flex flex-col gap-4 w-full mx-auto max-w-sm"
            >
             {/* QR Code */}
<div className="flex justify-center items-center relative">
  <img
    src={GCashQR}
    alt="GCash QR"
    className={`rounded ${showQRFullscreen
      ? 'fixed top-0 left-0 w-full h-full z-50 object-contain bg-black'
      : 'w-32 sm:w-40'} transition-all`}
  />
  <button
    type="button"
    onClick={() => setShowQRFullscreen(!showQRFullscreen)}
    className="absolute right-2 bg-white text-black p-1 rounded-full z-50 hover:bg-gray-200 transition"
    style={{
  top: showQRFullscreen ? '-12rem' : '0.5rem',  // Move 10× higher
  right: showQRFullscreen ? 'auto' : '0.5rem',  // disable default right
  left: showQRFullscreen ? '18rem' : 'auto'      // move left when fullscreen
}}
  >
    {showQRFullscreen ? <X size={16} /> : <Maximize2 size={16} />}
  </button>
</div>


              {/* Name */}
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                className="w-full p-2 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full p-2 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />

              {/* I Paid Button */}
              {!showPaymentRef && (
                <button
                  type="button"
                  onClick={() => setShowPaymentRef(true)}
                  className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition font-medium"
                >
                  I Paid
                </button>
              )}

              {/* Payment Reference (hidden until I Paid is clicked) */}
              {showPaymentRef && (
                <>
                  <input
                    type="number"
                    name="payment_ref"
                    placeholder="Enter last 4-digit payment reference"
                    className="w-full p-2 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />

                  {/* Hidden PDF link */}
                  <input
                    type="hidden"
                    name="pdf_link"
                    value="https://eljaycabellon.vercel.app/Eljays-CallCenter-InterviewGuides-FINALv3.pdf"
                  />

                  <button
                    type="submit"
                    className="bg-blue-400 text-black px-4 py-2 rounded hover:bg-blue-500 transition font-semibold"
                    disabled={sending}
                  >
                    {sending ? 'Sending...' : 'Get PDF Now!'}
                  </button>
                </>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default PurchasePDF;


/*
import React, { useRef, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import emailjs from 'emailjs-com';
import PDFPreviewImage from '../assets/pdf-preview.png';
import GCashQR from '../assets/gcash-qr.png';

const PurchasePDF = () => {
  const form = useRef();
  const [showForm, setShowForm] = useState(false);
  const [showQRFullscreen, setShowQRFullscreen] = useState(false);
  const [showPaymentRef, setShowPaymentRef] = useState(false);
  const [sending, setSending] = useState(false);

  // --- Validators ---
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePaymentRef = (ref) => /^\d{4}$/.test(ref);

  // --- Send PDF Email ---
  const sendPDFEmail = async (e) => {
    e.preventDefault();

    const name = form.current.user_name.value.trim();
    const email = form.current.email.value.trim();
    const paymentRef = form.current.payment_ref.value.trim();

    if (!name || !email) {
      toast.error('Please fill all required fields.');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    if (!showPaymentRef) {
      toast.error('Please confirm your payment first.');
      return;
    }

    if (!validatePaymentRef(paymentRef)) {
      toast.error('Enter a valid 4-digit payment reference.');
      return;
    }

    try {
      setSending(true);

      await emailjs.sendForm(
        'service_6ggpor7',     // Your Gmail Service ID
        'template_cn84r6x',    // Your Template ID
        form.current,
        '0ZcDm4uCUxWLsDyrC'   // Your Public Key
      );

      toast.success('✅ PDF sent to your email!');
      form.current.reset();
      setShowForm(false);
      setShowPaymentRef(false);
      setShowQRFullscreen(false);
    } catch (err) {
      console.error('EmailJS Error:', err.text || err);
      toast.error('❌ Failed to send PDF. Check Service/Template/Public Key.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="bg-black text-white min-h-screen py-16 px-6 md:px-12 lg:px-20">
      <Toaster position="top-center" />
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-12">
        Purchase Call Center PDF
      </h1>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        <img
          src={PDFPreviewImage}
          alt="PDF Preview"
          className="w-64 rounded-lg"
        />
        <div className="flex-1">
          <p className="text-gray-300 mb-4">
            Preview of first page only. Full PDF will be sent after payment.
          </p>

          
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-green-400 text-black px-4 py-2 rounded hover:bg-green-500 transition mb-2"
          >
            Purchase PDF via GCash
          </button>

          {showForm && (
            <form
              ref={form}
              onSubmit={sendPDFEmail}
              className="mt-4 p-4 border border-gray-600 rounded bg-gray-900 flex flex-col gap-3"
            >
              
              <div className="flex justify-center items-center relative">
                <img
                  src={GCashQR}
                  alt="GCash QR"
                  className={`rounded ${
                    showQRFullscreen
                      ? 'fixed top-0 left-0 w-full h-full z-50 object-contain bg-black'
                      : 'w-40'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowQRFullscreen(!showQRFullscreen)}
                  className="absolute top-1 right-1 bg-white text-black px-2 py-1 rounded z-50"
                >
                  {showQRFullscreen ? 'Close' : 'Fullscreen'}
                </button>
              </div>

              
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                className="w-full p-2 rounded bg-gray-800"
                required
              />

             
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full p-2 rounded bg-gray-800"
                required
              />

              
              {!showPaymentRef && (
                <button
                  type="button"
                  onClick={() => setShowPaymentRef(true)}
                  className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition"
                >
                  I Paid
                </button>
              )}

             
              {showPaymentRef && (
                <>
                  <input
                    type="number"
                    name="payment_ref"
                    placeholder="Enter 4-digit payment reference"
                    className="w-full p-2 rounded bg-gray-800"
                    required
                  />

            
                  <input
                    type="hidden"
                    name="pdf_link"
                    value="https://eljaycabellon.vercel.app/Eljays-CallCenter-InterviewGuides-FINALv3.pdf"
                  />

                  <button
                    type="submit"
                    className="bg-blue-400 text-black px-4 py-2 rounded hover:bg-blue-500 transition"
                    disabled={sending}
                  >
                    {sending ? 'Sending...' : 'Get PDF Now!'}
                  </button>
                </>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default PurchasePDF;

*/


/*
import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import emailjs from 'emailjs-com';

import PDFPreviewImage from '../assets/pdf-preview.png';
import SamplePDF from '../assets/Eljays-CallCenter-InterviewGuides-FINALv3.pdf';
import SampleResume1 from '../assets/EljaySampleTemplate1.jpg';
import SampleResume2 from '../assets/EljaySampleTemplate2.jpg';
import GCashQR from '../assets/gcash-qr.png';

const Purchase = () => {
  // PDF states
  const [showPDFForm, setShowPDFForm] = useState(false);
  const [pdfPaid, setPdfPaid] = useState(false);
  const [pdfName, setPdfName] = useState('');
  const [pdfEmail, setPdfEmail] = useState('');
  const [pdfReference, setPdfReference] = useState('');
  const [showQRFullscreen, setShowQRFullscreen] = useState(false);

  // Resume states
  const [showTemplate1, setShowTemplate1] = useState(false);
  const [showTemplate2, setShowTemplate2] = useState(false);
  const [resumePaid, setResumePaid] = useState({ 1: false, 2: false });
  const [resumeName, setResumeName] = useState({ 1: '', 2: '' });
  const [resumeEmail, setResumeEmail] = useState({ 1: '', 2: '' });
  const [resumeReference, setResumeReference] = useState({ 1: '', 2: '' });
  const [showResumeQRFullscreen, setShowResumeQRFullscreen] = useState({ 1: false, 2: false });

  // PDF Handlers
  const handleIPaidPDF = () => {
    if (!pdfName || !pdfEmail) {
      toast.error('Please enter your Name and Email!');
      return;
    }
    setPdfPaid(true);
  };

  const sendPDFEmail = () => {
    if (!pdfReference || pdfReference.length !== 4) {
      toast.error('Please enter last 4 digits of payment reference!');
      return;
    }

    emailjs
      .send(
        'service_4ru8w2o',
        'template_uyj22nu',
        {
          user_name: pdfName,
          email: pdfEmail,
          title: 'Call Center Interview Guides PDF',
          pdf_link: SamplePDF,
          payment_ref: pdfReference,
        },
        'YOUR_EMAILJS_USER_ID' // Replace with your EmailJS User ID
      )
      .then(() => {
        toast.success('PDF sent to your email!');
        setShowPDFForm(false);
        setPdfPaid(false);
        setPdfName('');
        setPdfEmail('');
        setPdfReference('');
        setShowQRFullscreen(false);
      })
      .catch(() => {
        toast.error('❌ Failed to send PDF email. Check EmailJS configuration!');
      });
  };

  // Resume Handlers
  const handleIPaidResume = (id) => {
    if (!resumeName[id] || !resumeEmail[id]) {
      toast.error('Please enter Name and Email!');
      return;
    }
    setResumePaid((prev) => ({ ...prev, [id]: true }));
  };

  const sendResumeEmail = (id) => {
    if (!resumeReference[id] || resumeReference[id].length !== 4) {
      toast.error('Please enter last 4 digits of payment reference!');
      return;
    }

    const links = {
      1: 'https://www.canva.com/design/DAG4X_0s2kM/AG6_3lrRXA9eOWS8c-ekjw/edit?utm_content=DAG4X_0s2kM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      2: 'https://www.canva.com/design/DAG4XxjBcNA/D17ahRhO29263M6Oyl5BhA/edit?utm_content=DAG4XxjBcNA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    };

    emailjs
      .send(
        'service_4ru8w2o',
        'template_dl5azm9',
        {
          user_name: resumeName[id],
          email: resumeEmail[id],
          title: `Resume Template ${id}`,
          resume_link: links[id],
          payment_ref: resumeReference[id],
        },
        'YOUR_EMAILJS_USER_ID'
      )
      .then(() => {
        toast.success(`Resume Template ${id} link sent to your email!`);
        setShowTemplate1(false);
        setShowTemplate2(false);
        setResumePaid((prev) => ({ ...prev, [id]: false }));
        setResumeName((prev) => ({ ...prev, [id]: '' }));
        setResumeEmail((prev) => ({ ...prev, [id]: '' }));
        setResumeReference((prev) => ({ ...prev, [id]: '' }));
        setShowResumeQRFullscreen((prev) => ({ ...prev, [id]: false }));
      })
      .catch(() => {
        toast.error('❌ Failed to send resume email. Check EmailJS configuration!');
      });
  };

  return (
    <section className="bg-black text-white min-h-screen py-16 px-6 md:px-12 lg:px-20">
      <Toaster position="top-center" />
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-12">
        Purchase Guides & Resume Templates
      </h1>

      
      <div className="mb-16 flex flex-col md:flex-row gap-6 items-start">
        <img src={PDFPreviewImage} alt="PDF Preview" className="w-64 rounded-lg" />
        <div className="flex-1">
          <p className="text-gray-300 mb-4">
            Preview of first page only. Full PDF will be sent after payment.
          </p>
          <button
            onClick={() => setShowPDFForm(!showPDFForm)}
            className="bg-green-400 text-black px-4 py-2 rounded hover:bg-green-500 transition mb-2"
          >
            Purchase PDF via GCash
          </button>

          {showPDFForm && (
            <div className="mt-4 p-4 border border-gray-600 rounded bg-gray-900 flex flex-col gap-3">
              <div className="flex justify-center items-center relative">
                <img
                  src={GCashQR}
                  alt="GCash QR"
                  className={`rounded ${showQRFullscreen ? 'fixed top-0 left-0 w-full h-full z-50 object-contain bg-black' : 'w-40'}`}
                />
                <button
                  onClick={() => setShowQRFullscreen(!showQRFullscreen)}
                  className="absolute top-1 right-1 bg-white text-black px-2 py-1 rounded z-50"
                >
                  {showQRFullscreen ? 'Close' : 'Fullscreen'}
                </button>
              </div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 rounded bg-gray-800"
                value={pdfName}
                onChange={(e) => setPdfName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 rounded bg-gray-800"
                value={pdfEmail}
                onChange={(e) => setPdfEmail(e.target.value)}
              />
              {!pdfPaid && (
                <button
                  onClick={handleIPaidPDF}
                  className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition"
                >
                  I Paid
                </button>
              )}
              {pdfPaid && (
                <>
                  <input
                    type="text"
                    placeholder="Enter last 4 digits of payment reference"
                    maxLength={4}
                    className="w-full p-2 rounded bg-gray-800"
                    value={pdfReference}
                    onChange={(e) => setPdfReference(e.target.value)}
                  />
                  <button
                    onClick={sendPDFEmail}
                    className="bg-blue-400 text-black px-4 py-2 rounded hover:bg-blue-500 transition"
                  >
                    Get PDF Now!
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div>
          <button
            onClick={() => setShowTemplate1(!showTemplate1)}
            className="text-lg font-semibold mb-2 hover:underline"
          >
            {showTemplate1 ? 'Hide Template 1' : 'View Template 1'}
          </button>
          {showTemplate1 && (
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <img src={SampleResume1} alt="Resume 1" className="w-48 rounded-lg" />
              <div className="flex flex-col gap-2 p-2 border border-gray-600 rounded bg-gray-900">
                <div className="flex justify-center items-center relative">
                  <img
                    src={GCashQR}
                    alt="GCash QR"
                    className={`rounded ${showResumeQRFullscreen[1] ? 'fixed top-0 left-0 w-full h-full z-50 object-contain bg-black' : 'w-32'}`}
                  />
                  <button
                    onClick={() => setShowResumeQRFullscreen((prev) => ({ ...prev, 1: !prev[1] }))}
                    className="absolute top-1 right-1 bg-white text-black px-2 py-1 rounded z-50"
                  >
                    {showResumeQRFullscreen[1] ? 'Close' : 'Fullscreen'}
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-2 rounded bg-gray-800"
                  value={resumeName[1]}
                  onChange={(e) =>
                    setResumeName((prev) => ({ ...prev, 1: e.target.value }))
                  }
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-2 rounded bg-gray-800"
                  value={resumeEmail[1]}
                  onChange={(e) =>
                    setResumeEmail((prev) => ({ ...prev, 1: e.target.value }))
                  }
                />
                {!resumePaid[1] && (
                  <button
                    onClick={() => handleIPaidResume(1)}
                    className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition"
                  >
                    I Paid
                  </button>
                )}
                {resumePaid[1] && (
                  <>
                    <input
                      type="text"
                      placeholder="Enter last 4 digits of payment reference"
                      maxLength={4}
                      className="w-full p-2 rounded bg-gray-800"
                      value={resumeReference[1]}
                      onChange={(e) =>
                        setResumeReference((prev) => ({ ...prev, 1: e.target.value }))
                      }
                    />
                    <button
                      onClick={() => sendResumeEmail(1)}
                      className="bg-blue-400 text-black px-4 py-2 rounded hover:bg-blue-500 transition"
                    >
                      Get Template 1 Now!
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        
        <div>
          <button
            onClick={() => setShowTemplate2(!showTemplate2)}
            className="text-lg font-semibold mb-2 hover:underline"
          >
            {showTemplate2 ? 'Hide Template 2' : 'View Template 2'}
          </button>
          {showTemplate2 && (
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <img src={SampleResume2} alt="Resume 2" className="w-48 rounded-lg" />
              <div className="flex flex-col gap-2 p-2 border border-gray-600 rounded bg-gray-900">
                <div className="flex justify-center items-center relative">
                  <img
                    src={GCashQR}
                    alt="GCash QR"
                    className={`rounded ${showResumeQRFullscreen[2] ? 'fixed top-0 left-0 w-full h-full z-50 object-contain bg-black' : 'w-32'}`}
                  />
                  <button
                    onClick={() => setShowResumeQRFullscreen((prev) => ({ ...prev, 2: !prev[2] }))}
                    className="absolute top-1 right-1 bg-white text-black px-2 py-1 rounded z-50"
                  >
                    {showResumeQRFullscreen[2] ? 'Close' : 'Fullscreen'}
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-2 rounded bg-gray-800"
                  value={resumeName[2]}
                  onChange={(e) =>
                    setResumeName((prev) => ({ ...prev, 2: e.target.value }))
                  }
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-2 rounded bg-gray-800"
                  value={resumeEmail[2]}
                  onChange={(e) =>
                    setResumeEmail((prev) => ({ ...prev, 2: e.target.value }))
                  }
                />
                {!resumePaid[2] && (
                  <button
                    onClick={() => handleIPaidResume(2)}
                    className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition"
                  >
                    I Paid
                  </button>
                )}
                {resumePaid[2] && (
                  <>
                    <input
                      type="text"
                      placeholder="Enter last 4 digits of payment reference"
                      maxLength={4}
                      className="w-full p-2 rounded bg-gray-800"
                      value={resumeReference[2]}
                      onChange={(e) =>
                        setResumeReference((prev) => ({ ...prev, 2: e.target.value }))
                      }
                    />
                    <button
                      onClick={() => sendResumeEmail(2)}
                      className="bg-blue-400 text-black px-4 py-2 rounded hover:bg-blue-500 transition"
                    >
                      Get Template 2 Now!
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Purchase;
*/