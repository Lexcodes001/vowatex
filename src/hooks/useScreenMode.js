"use client";
import { useState, useEffect } from 'react';

// Define breakpoints for different screen modes
const breakpoints = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
};

function useScreenMode() {
  // State to store the current screen mode
  const [screenMode, setScreenMode] = useState('desktop');

  useEffect(() => {
    // Function to update screen mode based on window width
    const updateScreenMode = () => {
      const width = window.innerWidth;

      if (width < breakpoints.mobile) {
        setScreenMode('mobile');
      } else if (width < breakpoints.tablet) {
        setScreenMode('tablet');
      } else {
        setScreenMode('desktop');
      }
    //   alert(screenMode);
    };

    // Call the function initially to set the screen mode
    updateScreenMode();
    // alert(screenMode);

    // Attach the event listener for resize event
    window.addEventListener('resize', updateScreenMode);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', updateScreenMode);
  }, []); // Empty dependency array ensures effect runs only on mount and unmount
  return screenMode;
}

export default useScreenMode;