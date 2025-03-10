import React, { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
} from 'react-icons/fa6';
import { useLocation } from 'react-router-dom';
import Logo from '../components/common/Logo';

const ProfileDisplay = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [reportReady, setReportReady] = useState(false);
  const location = useLocation();
  const userData = location.state?.user || {
    name: 'Mr XYZ',
    avatar: 'https://via.placeholder.com/150',
  };

  const slides = [1, 2, 3]; // Placeholder for carousel slides

  useEffect(() => {
    // Reset progress to 0 when component mounts
    setProgress(0);
    setReportReady(false);

    const totalDuration = 60000; // 1 minute in milliseconds
    const intervalTime = 100; // Update more frequently for smoother animation
    const increment = 100 / (totalDuration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + increment;
        if (newProgress >= 100) {
          clearInterval(timer); // Stop the timer when we reach 100%
          setReportReady(true); // Set report as ready when progress reaches 100%
          return 100;
        }
        return newProgress;
      });
    }, intervalTime);

    // Clear interval when component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='min-h-screen flex flex-col'>
      {/* Top Notification Banner */}
      {showBanner && (
        <div className='bg-gray-800 text-white py-3 px-4 flex justify-between items-center'>
          <div className='flex-1 text-center'>
            <span className='inline-flex items-center justify-center'>
              Create a report about your business
              <a href='/' className='ml-2 font-medium underline'>
                Get Started
              </a>
            </span>
          </div>
          <button onClick={() => setShowBanner(false)} className='text-white'>
            <IoMdClose size={24} />
          </button>
        </div>
      )}

      {/* Header Section */}
      <header className='py-4 px-6 flex justify-between items-center border-b'>
        <div className='flex items-center'>
          <Logo />
        </div>
        <button className='text-gray-700'>Log In</button>
      </header>

      {/* Profile Section */}
      <section className='py-6 px-6 flex flex-col items-center border-b relative'>
        <div className='w-24 h-24 rounded-full overflow-hidden mb-4'>
          <img
            src={userData.avatar}
            alt={userData.name}
            className='w-full h-full object-cover'
          />
        </div>
        <h1 className='text-2xl font-bold mb-1'>{userData.name}</h1>
      
      </section>

      {/* Report Generation Section */}
      <section className='py-8 px-4 flex flex-col items-center'>
        <div className='max-w-md w-full text-center mb-6'>
          <div className='flex items-center justify-center mb-4'>
            <h2 className='text-lg font-medium'>
              Checkout to generate complete report
            </h2>
            <svg
              className='w-5 h-5 ml-2 text-blue-500'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </div>
          <div className='w-full bg-gray-200 rounded-full h-2.5 mb-2'>
            <div
              className='bg-blue-500 h-2.5 rounded-full transition-all duration-500 ease-linear'
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className='text-sm text-gray-600 mb-4'>
            {Math.round(progress)}% Complete
          </p>
          <div className='flex items-center justify-center'>
            <div className='flex -space-x-2'>
              <div className='w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center'>
                <FaFacebook className='text-blue-600' />
              </div>
              <div className='w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center'>
                <FaInstagram className='text-pink-600' />
              </div>
              <div className='w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center'>
                <FaXTwitter />
              </div>
              <div className='w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center'>
                <FaLinkedin className='text-blue-700' />
              </div>
            </div>
            <span className='ml-3 text-gray-600'>
              Found 100+ data sources to check
            </span>
          </div>
        </div>

        {/* Download Report Button - always visible but disabled until report is ready */}
        <button
          className={`${
            reportReady
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-blue-400 cursor-not-allowed'
          } text-white font-bold py-4 px-8 rounded-lg text-xl shadow-lg transition-all duration-300 mt-6 w-full max-w-md`}
          disabled={!reportReady}
        >
          Download Report
        </button>
      </section>
    </div>
  );
};

export default ProfileDisplay;
