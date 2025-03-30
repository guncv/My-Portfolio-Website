import menuIcon from '../assets/menuIcon.svg';
import instagramIcon from '../assets/instragram.svg';
import linkedinIcon from '../assets/linkin.svg';
import githubIcon from '../assets/github.svg';
import locationIcon from '../assets/location.svg';
import availableIcon from '../assets/available.svg';

const SOCIAL_URLS = {
    instagram: 'https://www.instagram.com/guncv_',
    linkedin: 'https://www.linkedin.com/in/chanagun-viriyasathapornpong-ab8a27299/',
    github: 'https://www.github.com/guncv',
}

const handleIconClick = (platform: keyof typeof SOCIAL_URLS) => {
    if (platform in SOCIAL_URLS) {
        window.open(SOCIAL_URLS[platform], '_blank', 'noopener,noreferrer');
    }
}

export const MenuIcon = menuIcon;
export const InstagramIcon = instagramIcon;
export const LinkedInIcon = linkedinIcon;
export const GithubIcon = githubIcon;
export const LocationIcon = locationIcon;
export const AvailableIcon = availableIcon;

export const IconMap = {    
    instagram: { icon: InstagramIcon, onClick: () => handleIconClick('instagram') },
    linkedin: { icon: LinkedInIcon, onClick: () => handleIconClick('linkedin') },
    github: { icon: GithubIcon, onClick: () => handleIconClick('github') },
}

