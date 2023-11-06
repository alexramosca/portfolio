import React, { createContext, useContext, useState, useEffect } from 'react';

const ScreenContext = createContext();

export const ScreenProvider = ({ children }) => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleScreenSize = () => {
          setIsSmallScreen(window.innerWidth < 768);
        };
        handleScreenSize();
    
        window.addEventListener('resize', handleScreenSize);
    
        return () => {
          window.removeEventListener('resize', handleScreenSize);
        };
      }, []);

      return (
        <ScreenContext.Provider value={{ isSmallScreen }}>{children}</ScreenContext.Provider>

      )
}

export const useScreenContext = () => {
    return useContext(ScreenContext);
  };