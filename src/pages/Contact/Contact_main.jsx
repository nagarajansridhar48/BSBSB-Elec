import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Leftcard from './Leftcard';
import Rightcard from './Rightcard';

const Contact_main = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-quad'
    });
  }, []);

  return (
    <div className="min-h-screen w-full flex justify-center items-center px-4 py-8 bg-gray-50">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 shadow-lg rounded-xl overflow-hidden bg-white">
       <Leftcard/>
       <Rightcard/>
      </div>
    </div>
  );
};

export default React.memo(Contact_main);