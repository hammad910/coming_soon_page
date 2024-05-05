import React, { useState, useEffect } from 'react';
import mobileImg from './assets/mobile-img.png';

const App = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 26); // Add 26 days
  targetDate.setHours(3, 35, 39); // Set the hours, minutes, and seconds

  const [remainingTime, setRemainingTime] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    let milliseconds = difference;
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

    return {
      days,
      hours,
      minutes,
      seconds
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTimeComponent = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className='flex md:flex-row flex-col justify-center items-center w-full max-w-[90%] mx-auto mt-20'>
      <div className='w-full md:w-[50%] sm:mr-6'>
        <div className='text-2xl sm:text-4xl md:text-2xl lg:3xl'>
          <h1 className='base:mb-6'>We are</h1>
          <h1 className='leading-[1]'>Coming soon...</h1>
        </div>
        <p className='opacity-70 mt-10 leading-6 sm:text-lg text:md'>
          Subscribe Now & Save!

          Register your email before we launch and get R50 off your first delivery. Stay ahead with the latest updates and exclusive offers delivered right to your inbox. Don't miss out, subscribe and save!
        </p>
        <div className='w-[100%] mx-auto mt-10'>
          <table className='min-w-full rounded-lg overflow-hidden'>
            <thead className='text-black text-4xl md:text-5xl'>
              <tr>
                <th className='base:px-4 sm:px-2 base:py-2'>{formatTimeComponent(remainingTime.days)}</th>
                <th className='base:px-4 sm:px-2 base:py-2'>:</th>
                <th className='base:px-4 sm:px-2 base:py-2'>{formatTimeComponent(remainingTime.hours)}</th>
                <th className='base:px-4 sm:px-2 base:py-2'>:</th>
                <th className='base:px-4 sm:px-2 base:py-2'>{formatTimeComponent(remainingTime.minutes)}</th>
                <th className='base:px-4 sm:px-2 base:py-2'>:</th>
                <th className='base:px-4 sm:px-2 base:py-2'>{formatTimeComponent(remainingTime.seconds)}</th>
              </tr>
            </thead>
            <tbody className='text-sm text-center'>
              <tr>
                <td className='base:px-4 sm:px-2 base:py-2'>Days</td>
                <td className='base:px-4 sm:px-2 base:py-2'></td>
                <td className='base:px-4 sm:px-2 base:py-2'>Hours</td>
                <td className='base:px-4 sm:px-2 base:py-2'></td>
                <td className='base:px-4 sm:px-2 base:py-2'>Minutes</td>
                <td className='base:px-4 sm:px-2 base:py-2'></td>
                <td className='base:px-4 sm:px-2 base:py-2'>Seconds</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='relative mt-14'>
          <input
            type='email'
            placeholder='Enter your email address'
            className='w-full h-12 border border-gray-300 text-lg rounded-md py-2 pl-10 pr-4 focus:outline-none focus:border-blue-400'
            style={{ fontFamily: 'Poppins' }}
          />
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <svg className='h-5 w-5 text-gray-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2a8 8 0 018 8c0 .88-.15 1.74-.44 2.56l5.04 5.04A2 2 0 0119.96 20H4.04a2 2 0 01-1.68-2.96l5.04-5.04A7.98 7.98 0 0112 4z'
              />
            </svg>
          </div>
        </div>
        <div className='mt-8'>
          <button className='bg-[#0BCB7D] base:w-[220px] w-full hover:bg-[#3cc987] text-white py-4 px-6 rounded' style={{ fontFamily: 'Poppins' }}>
            Subscribe For Update
          </button>
          <button className='inline-flex text-center items-center bg-transparent text-[#0BCB7D]  hover:text-[#3cc987] py-4 px-6 rounded' style={{ fontFamily: 'Poppins' }}>
            About us
            <svg className='w-4 h-4 ml-2' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </button>
        </div>
      </div>
      <div className=' mt-10 md:mt-0'>
        <img src={mobileImg} alt='' />
      </div>
    </div>
  );
};

export default App;
