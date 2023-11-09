import React, { createContext, useContext, useState, useEffect } from 'react';

const ScreenContext = createContext();

export const ScreenProvider = ({ children }) => {
    const [isPortraitScreen, setIsPortraitScreen] = useState(null);

    useEffect(() => {
      const handleScreenSize = () => {
        setIsPortraitScreen(window.innerWidth < window.innerHeight);
        
      };
      
      handleScreenSize();
      window.addEventListener('resize', handleScreenSize);
      
      return () => {
        window.removeEventListener('resize', handleScreenSize);
      };
    }, []);
    

      return (
        <ScreenContext.Provider value={{ isPortraitScreen }}>{children}</ScreenContext.Provider>

      )
}

export const useScreenContext = () => {
    return useContext(ScreenContext);
  };