import React, { createContext, useContext, useEffect, useState } from 'react';

interface MediaQueryContextType {
    isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  width: number;
}

const MediaQueryContext = createContext<MediaQueryContextType>({
  isMobile: false,
  isTablet: false,
  isDesktop: true,
  width: 1920,
});

export const MediaQueryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const value: MediaQueryContextType = {
    width,
    isMobile: width < 640,
    isTablet: width >= 640 && width < 1024,
    isDesktop: width >= 1024,
  };

  return (
    <MediaQueryContext.Provider value={value}>
      {children}
    </MediaQueryContext.Provider>
  );
};

export const useMediaQuery = () => useContext(MediaQueryContext);
