import { Experience, Project, Education, Certificate } from "./type";
import awsDark from "../assets/aws_dark.svg";

const contactConfig = {
    email: "chanagun.vir@gmail.com",
    phone: "0626274882",
}

const projectsConfig: Project[] = [
    {
        title: "Interview Simulation AI",
        intro: "AI-powered interview platform with real-time feedback and scoring system.",
        description: "An AI-powered interview simulation platform that helps users practice for interviews by providing real-time feedback and insights. The platform features advanced speech recognition, natural language processing, and comprehensive scoring algorithms to evaluate candidate responses across various technical and behavioral questions.",
        imageSource: ["/interview_proj1.jpeg", "/interview_proj2.jpeg", "/interview_proj3.jpeg"],
        technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
        websiteLink: "https://interviewsai.org/",
        featured: true,
    },
    {
        title: "Task Management App",
        intro: "Collaborative task management with real-time updates and drag-and-drop interface.",
        description: "Collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features. Built with modern web technologies to provide seamless project management experience.",
        imageSource: "/profile.jpg",
        technologies: ["Flutter", "Go", "GraphQL", "MongoDB"],
        githubLink: "https://github.com/yourusername/taskapp",
        liveLink: "https://taskapp-demo.com",
        featured: true,
    },
    {
        title: "AI Chat Assistant",
        intro: "Intelligent chatbot with context-aware responses and multi-language support.",
        description: "Intelligent chatbot powered by advanced language models with context-aware responses and multi-language support. Features include conversation memory, sentiment analysis, and integration with various APIs.",
        imageSource: "/profile.jpg",
        technologies: ["Python", "React", "OpenAI", "Redis", "AWS"],
        githubLink: "https://github.com/yourusername/ai-chat",
        featured: false,
    },
    {
        title: "Portfolio Website",
        intro: "Modern, responsive portfolio with dark mode and smooth animations.",
        description: "Modern, responsive portfolio website with dark mode, smooth animations, and optimized performance. Built with React and TypeScript for a fast, accessible user experience.",
        imageSource: "/profile.jpg",
        technologies: ["React", "TypeScript", "Vite", "Framer Motion"],
        githubLink: "https://github.com/yourusername/portfolio",
        liveLink: "https://yourportfolio.com",
        featured: false,
    },
]

const experienceConfig: Experience[] = [
    {
        imageSource: "/chula.png",
        company: 'Chulalongkorn University',
        positions: [
            {
                description: [
                    "Volunteered as a support TA for Software-Defined Systems, assisting students during lab hours and project work sessions.",
                    "Answered student questions related to containers, Docker, Kubernetes, microservices, cloud infrastructure, and DevOps workflows.",
                    "Provided guidance and technical clarification on lab assignments involving tools like AWS EC2, S3, and VPC, based on the course's hands-on curriculum.",
                    "Helped debug deployment issues and explained architectural concepts such as service orchestration, infrastructure-as-code, and edge computing.",
                ],
                date: 'September 2025 – Present',
                position: 'Teaching Assistant (Software Defined Systems) – Support Role',
                intro: 'Volunteered to assist students with labs, homework, and infrastructure-related questions for a senior-level systems course at Chulalongkorn University.',
            }
        ]
    },
    {
        imageSource: "/codefin.png",
        company: 'Codefin Company Limited',
        positions: [
            {
                description: [
                    "Contributed to two high-impact projects — Profita and LH Microapp — supporting both frontend and backend development for mobile banking applications.",
                    "Implemented eKYC verification features for Profita using Go with the Gin framework for backend microservices and React Native for mobile UI, enabling secure digital onboarding for new users.",
                    "Collaborated with the team to resolve UAT issues in LH Microapp’s detection feature, coordinating with stakeholders and refining Flutter-based mobile interfaces to ensure accurate behavior, responsiveness, and design consistency.",
                ],
                date: 'January – April 2025',
                position: 'Software Engineer – Part-Time',
                intro: 'Part-time software engineer contributing to both mobile and backend development for LH Bank’s Profita and LH Microapp projects.',
            },
            {
                description: [
                    "Worked on a new project 2–3 days per week while managing university studies, using Go (Echo) for backend APIs and React with TypeScript on the frontend.",
                    "Built Krungsri-LineOA webpages for users to view transaction history and request statements. Handled multi-step user interactions on the frontend using the Saga pattern for workflow orchestration.",
                    "Created a backend registration API with support for OTP-based phone number verification. Also contributed backend logic for validating Google reCAPTCHA tokens to protect against automated requests.",
                    "Integrated Google reCAPTCHA on frontend forms to improve security and prevent bot-based abuse.",
                    "Developed the LH-microapp for online trading using Dart and Flutter, enabling users to buy and sell investment portfolios through a smooth and responsive mobile interface."
                ],
                date: 'August - December 2024',
                position: 'Software Engineer - Internship',
                intro: 'Developed full-stack banking applications using Go, React, TypeScript, and Flutter. Built secure user flows with OTP verification and reCAPTCHA integration while managing university coursework.',
            }
        ]
    },
    {
        imageSource: "/wetech.png",
        company: 'WE TECH CONSULTING',
        positions: [
            {
                description: [
                    "Completed a 2-month internship as a Software Developer, focusing on improving internal operational tools using Glide, a low-code platform.",
                    "Collaborated with a cross-functional team to gather requirements, implement features, and iterate quickly based on feedback.", 
                    "Gained hands-on experience in low-code development, database design logic, and real-world product lifecycle management.",
                ],
                date: 'June - July 2024',
                position: 'Software Developer - Internship',
                intro: 'Completed a 2-month internship as a Software Developer, using Glide (a low-code platform) to manage the product inventory system, including acquisition, rental, and lending operations',
            }
        ]
    },
];

const educationConfig: Education[] = [
    {
        imageSource: "/chula.png",
        institution: "Chulalongkorn University",
        degree: "Bachelor of Engineering",
        field: "Computer Engineering",
        date: "Aug 2021 – July 2025",
        gpa: "3.26/4.00",
        description: "Studied Computer Engineering with a focus on software development, cloud systems, and applied artificial intelligence.",
        achievements: [
            "Second Class Honors",
        ],
        coursework: [
            "Software Engineering",
            "Data Structures and Algorithms",
            "Computer Networks",
            "Database Systems",
            "Software Architecture",
            "Software-Defined Systems",
            "Cloud Computing",
            "Artificial Intelligence"
        ]
    }
];

const certificatesConfig: Certificate[] = [
    {
        imageSource: awsDark,
        title: "AWS Academy Graduate - Cloud Architecting",
        issuer: "Amazon Web Services",
        date: "2025",
        credentialUrl: "https://www.credly.com/badges/88ee09b7-3246-4902-b5a3-8f65b38c74a9/linked_in_profile",
        description: "Completed AWS Academy Cloud Architecting course focusing on designing scalable, secure, and cost-efficient cloud infrastructure on AWS. Gained hands-on experience with VPC design, compute and storage services (EC2, S3, RDS, EFS), IAM policies, and high-availability patterns across distributed architectures.",
        skills: [
            "AWS Cloud",
            "Cloud Computing",
            "Cloud Security",
            "Amazon EC2",
            "Amazon S3",
            "Amazon RDS",
            "Amazon VPC",
            "Amazon SQS",
            "Amazon CloudFront",
            "Amazon Cognito",
            "Amazon EFS",
            "AWS IAM"
        ]
    },
];

export default experienceConfig;
export { contactConfig, projectsConfig, educationConfig, certificatesConfig };