import { Experience, Project, Education, Certificate } from "./type";
import awsDark from "../assets/aws_dark.svg";

const contactConfig = {
    email: "chanagun.vir@gmail.com",
    phone: "0626274882",
}

const projectsConfig: Project[] = [
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce platform with real-time inventory management, payment integration, and admin dashboard. Built with microservices architecture for scalability.",
        imageSource: ["/profile.jpg", "/secondProfile.png", "/chula.png"],
        technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
        githubLink: "https://github.com/yourusername/ecommerce",
        liveLink: "https://ecommerce-demo.com",
        featured: true,
    },
    {
        title: "Task Management App",
        description: "Collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.",
        imageSource: "/profile.jpg",
        technologies: ["Flutter", "Go", "GraphQL", "MongoDB"],
        githubLink: "https://github.com/yourusername/taskapp",
        liveLink: "https://taskapp-demo.com",
        featured: true,
    },
    {
        title: "AI Chat Assistant",
        description: "Intelligent chatbot powered by advanced language models with context-aware responses and multi-language support.",
        imageSource: "/profile.jpg",
        technologies: ["Python", "React", "OpenAI", "Redis", "AWS"],
        githubLink: "https://github.com/yourusername/ai-chat",
        featured: false,
    },
    {
        title: "Portfolio Website",
        description: "Modern, responsive portfolio website with dark mode, smooth animations, and optimized performance.",
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
                    "Assisted official Teaching Assistants during lab and lecture sessions for Software-Defined Systems I (2110506).",
                    "Helped students understand core concepts including containers, Docker, Kubernetes, cloud computing, and DevOps practices.",
                    "Supported assignment reviews and guided students on practical exercises covering AWS, SDN (ONOS, Mininet), and edge computing technologies.",
                    "Volunteered based on academic performance and demonstrated interest in system design and distributed computing.",
                    "Facilitated hands-on learning experiences and helped students debug complex infrastructure and networking assignments."
                ],
                date: 'September 2025 - Present',
                position: 'TA Assistant - Software Define System',
                intro: 'Volunteered as TA helper for advanced systems course. Guided students in cloud infrastructure and DevOps labs.',
            }
        ]
    },
    {
        imageSource: "/codefin.png",
        company: 'Codefin Company Limited',
        positions: [
            {
                description: [
                    "Contributed to the development of two major projects: Profita and LH Microapp, focusing on mobile frontend and backend communication layers.",
                    "Built responsive and user-friendly mobile interfaces using Flutter, ensuring smooth user experiences across various screen sizes and devices.",
                    "Implemented backend services in Go using gRPC and GraphQL to support efficient data exchange and scalable microservice communication.",
                    "Integrated KYC verification features by connecting with LH Bank's third-party service, enabling secure identity checks as part of the onboarding flow."
                ],
                date: 'January - April 2025',
                position: 'Software Engineer - Part-Time',
                intro: 'Part-time role while completing university. Focused on microservices and Flutter development.',
            },
            {
                description: [
                    "Worked on a new project 2–3 days per week while managing university studies, using Go (Echo) for backend APIs and React with TypeScript on the frontend.",
                    "Built Krungsri-LineOA webpages for users to view transaction history and request statements. Handled multi-step user interactions on the frontend using the Saga pattern for workflow orchestration.",
                    "Developed a monolithic Go backend with Hexagonal Architecture, ensuring modular code structure and long-term maintainability.",
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