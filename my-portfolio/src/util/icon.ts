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
import python from '../assets/python.svg';
import nextjs from '../assets/nextjs.svg';
import react from '../assets/react.svg';
import typescript from '../assets/typescript.svg';
import javascript from '../assets/javascript.svg';
import cpp from '../assets/c++.svg';
import java from '../assets/java.svg';
import csharp from '../assets/csharp.svg';
import git from '../assets/git.svg';
import docker from '../assets/docker.svg';
import awsDark from '../assets/aws_dark.svg';
import awsLight from '../assets/aws_light.svg';
import kubernetes from '../assets/kubernetes.svg';
import dynamodb from '../assets/dynamodb.svg';
import grpc from '../assets/grpc.svg';
import postgresql from '../assets/postgresql.svg';
import redis from '../assets/redis.svg';
import graphql from '../assets/graphql.svg';
import mongodb from '../assets/mongodb.svg';
import dart from '../assets/dart.svg';
import flutter from '../assets/flutter.svg';
import tailwindcss from '../assets/tailwindcss.svg';
import golang from '../assets/golang.svg';
import express from '../assets/express.svg';
import terraform from '../assets/terraform.svg';
import email from '../assets/email.svg';
import phone from '../assets/phone.svg';
import duplicate from '../assets/duplicate.svg';
import diagonalArrowLight from '../assets/diagonal_arrow_light.svg';
import diagonalArrowDark from '../assets/diagonal_arrow_dark.svg';
import websiteLight from '../assets/website_light.svg';
import websiteDark from '../assets/website_dark.svg';
import lang_graph from '../assets/lang_graph.svg';
import langchain from '../assets/langchain.webp';
import openai from '../assets/openai.png';
import medium from '../assets/medium.png';

const SOCIAL_URLS = { 
  linkedin: 'https://www.linkedin.com/in/chanagun-viriyasathapornpong-ab8a27299/',
  github: 'https://www.github.com/guncv',
  medium: 'https://medium.com/@chanagun.vir',
};

const handleIconClick = (platform: keyof typeof SOCIAL_URLS) => {
  window.open(SOCIAL_URLS[platform], '_blank', 'noopener,noreferrer');
};

export const useIconMap = () => {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return {
    instagram: {
      icon: isLight ? instagramLight : instagramDark    
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
    python: {
      icon: python,
    },
    nextjs: {
      icon: nextjs,
    },
    react: {
      icon: react,
    },
    typescript: {
      icon: typescript,
    },
    javascript: {
      icon: javascript,
    },
    cpp: {
      icon: cpp,
    },
    java: {
      icon: java,
    },
    csharp: {
      icon: csharp,
    },
    git: {
      icon: git,
    },
    docker: {
      icon: docker,
    },
    aws: {
      icon: isLight ? awsLight : awsDark,
    },
    kubernetes: {
      icon: kubernetes,
    },
    dynamodb: {
      icon: dynamodb,
    },
    grpc: {
      icon: grpc,
    },
    postgresql: {
      icon: postgresql,
    },
    redis: {
      icon: redis,
    },
    graphql: {
      icon: graphql,
    },
    mongodb: {
      icon: mongodb,
    },
    dart: {
      icon: dart,
    },
    flutter: {
      icon: flutter,
    },
    tailwindcss: {
      icon: tailwindcss,
    },
    golang: {
      icon: golang,
    },
    express: {
      icon: express,
    },
    terraform: {
      icon: terraform,
    },
    email: {
      icon: email,
    },
    phone: {
      icon: phone,
    },
    duplicate: {
      icon: duplicate,
    },
    diagonalArrowLight: {
      icon: diagonalArrowLight,
    },
    diagonalArrowDark: {
      icon: diagonalArrowDark,
    },
    website: {
      icon: isLight ? websiteLight : websiteDark,
    },
    lang_graph: {
      icon: lang_graph,
    },
    langchain: {
      icon: langchain,
    },
    openai: {
      icon: openai,
    },
    medium: {
      icon: medium,
      onClick: () => handleIconClick('medium'),
    },
  };
};

