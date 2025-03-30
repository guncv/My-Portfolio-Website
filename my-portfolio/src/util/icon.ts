// util/icon.ts
import { useTheme } from '../context/ThemeContext';

import githubLight from '../assets/github_light.svg';
import githubDark from '../assets/github_dark.svg';
import linkedinLight from '../assets/linkedin_light.svg';
import linkedinDark from '../assets/linkedin_dark.svg';
import instagramLight from '../assets/instragram_light.svg';
import instagramDark from '../assets/instragram_dark.svg';
import locationLight from '../assets/location_light.svg';
import locationDark from '../assets/location_dark.svg';
import menuIconLight from '../assets/menuIcon_light.svg';
import menuIconDark from '../assets/menuIcon_dark.svg';
import available from '../assets/available.svg';
import lightMode from '../assets/light_mode.svg';
import darkMode from '../assets/dark_mode.svg';

const SOCIAL_URLS = {
  instagram: 'https://www.instagram.com/guncv_',
  linkedin: 'https://www.linkedin.com/in/chanagun-viriyasathapornpong-ab8a27299/',
  github: 'https://www.github.com/guncv',
};

const handleIconClick = (platform: keyof typeof SOCIAL_URLS) => {
  window.open(SOCIAL_URLS[platform], '_blank', 'noopener,noreferrer');
};

export const useIconMap = () => {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return {
    instagram: {
      icon: isLight ? instagramLight : instagramDark,
      onClick: () => handleIconClick('instagram'),
    },
    linkedin: {
      icon: isLight ? linkedinLight : linkedinDark,
      onClick: () => handleIconClick('linkedin'),
    },
    github: {
      icon: isLight ? githubLight : githubDark,
      onClick: () => handleIconClick('github'),
    },
    location: {
      icon: isLight ? locationLight : locationDark,
    },
    menu: {
      icon: isLight ? menuIconLight : menuIconDark,
    },
    available: {
      icon: available,
    },
    themeMode: {
      icon: isLight ? darkMode : lightMode,
      onClick: toggleTheme,
    },
  };
};

