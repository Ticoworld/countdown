import React, { useState, useEffect } from 'react';

const Countdown = () => {
  // Target date: Oct 10, 2024, 4:11:55 AM GMT+1
  const targetDate = new Date('2024-10-10T03:11:55Z').getTime();
  const displayTargetDate = 'Oct 10, 2024, 4:11:55 AM GMT+1'; // Display format

  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = new Date().getTime();
      const difference = targetDate - currentTime;
      setTimeLeft(difference);

      if (difference <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Calculate days, hours, minutes, and seconds from timeLeft
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Function to pad numbers with leading zeros (e.g. 05 instead of 5)
  const padZero = (num) => String(num).padStart(2, '0');

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-yellow-300 px-4">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/GOLD-COIN-1.png" 
          alt="Background" 
          className="object-cover w-full h-full" 
        />
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Black overlay */}
      </div>

      {/* Logo in top left corner with light background */}
      <div className="absolute top-4 left-4 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
        <img 
          src="/mr-bean-stacks-logo-1.svg" 
          alt="Logo" 
          className="w-20 h-20" // Logo size
        />
      </div>
      
      {/* Main Countdown Content */}
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white text-center z-50">NAKAMOTO COUNTDOWN</h1>
      <h2 className="text-3xl md:text-4xl mb-2 text-center text-white z-50">BLOCK #864864</h2>
      <p className="text-xl md:text-2xl mb-8 text-center text-white z-50">{displayTargetDate}</p> {/* Display the target date */}

      {timeLeft > 0 ? (
        <div className="flex flex-wrap justify-center space-x-4 text-center z-50">
          <div className="flex flex-col items-center mb-4">
            <span className="text-6xl md:text-7xl font-bold text-yellow-400">{padZero(days)}</span>
            <span className="text-xl md:text-2xl text-white">Days</span>
          </div>
          <div className="flex flex-col items-center mb-4">
            <span className="text-6xl md:text-7xl font-bold text-yellow-400">{padZero(hours)}</span>
            <span className="text-xl md:text-2xl text-white">Hrs</span>
          </div>
          <div className="flex flex-col items-center mb-4">
            <span className="text-6xl md:text-7xl font-bold text-yellow-400">{padZero(minutes)}</span>
            <span className="text-xl md:text-2xl text-white">Min</span>
          </div>
          <div className="flex flex-col items-center mb-4">
            <span className="text-6xl md:text-7xl font-bold text-yellow-400">{padZero(seconds)}</span>
            <span className="text-xl md:text-2xl text-white">Sec</span>
          </div>
        </div>
      ) : (
        <p className="text-3xl md:text-4xl text-red-500">Countdown finished!</p>
      )}
    </div>
  );
};

export default Countdown;
