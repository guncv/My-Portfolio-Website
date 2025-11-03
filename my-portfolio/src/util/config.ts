import { Experience, Project, Education, Certificate } from "./type";
import awsDark from "../assets/aws_dark.svg";
import ibm from "../assets/ibm.svg";

const contactConfig = {
    email: "chanagun.vir@gmail.com",
    phone: "0626274882",
}

const projectsConfig: Project[] = [
    {
        title: "Interview Simulation AI",
        intro: "AI-powered interview platform with real-time feedback and scoring system.",
        description: [
            "Built an AI-powered interview simulation platform that lets users practice real interviews and receive real-time feedback with dynamic scoring and conversation flow.",
            "Developed the backend using Go and the Gin framework, providing REST APIs to manage sessions, user data, and communication with the AI agent server.",
            "Connected to a Python-based AI agent built with FastAPI, using LangGraph to manage multi-turn interview state and LangChain to orchestrate LLM interactions, speech recognition (Whisper), and text-to-speech with OpenAI APIs.",
            "Implemented WebSocket connections between the frontend, backend, and AI agent to keep interviews continuous and responsive in real time.",
            "Designed an asynchronous scoring system using a message queue to let AI models evaluate candidate answers efficiently. Scores and session data are stored in PostgreSQL and cached with Redis for fast retrieval.",
            "Containerized all services with Docker and deployed on an AWS EC2 instance behind NGINX as a reverse proxy. Cloudflare handles DNS, TLS encryption, and rate limiting for secure and reliable operation."
        ],
        imageSource: ["/interview_proj1.jpeg", "/interview_proj2.jpeg", "/interview_proj3.jpeg"],
        technologies: ["TypeScript", "Go", "Python", "React", "Saga Pattern", "RESTAPI", "WebSocket", "Node.js", "FastAPI", "PostgreSQL", "Redis", "Docker", "LangChain", "LangGraph", "OpenAI"],
        websiteLink: "https://interviewsai.org/",
        githubLinks: [
            { label: "Frontend", url: "https://github.com/guncv/Interview-User-Client" },
            { label: "Backend", url: "https://github.com/guncv/Interview-Backend-Server" },
            { label: "AI Agent", url: "https://github.com/guncv/Interview-AI-Agent" }
        ],
        featured: true,
    },
    {
        title: "Carbon FootPrint Calculator",
        intro: "Carbon footprint calculation platform developed as a final university project to help SMEs measure emissions without relying on expensive consulting services.",
        description: [
            "Developed a responsive and user-friendly carbon footprint calculation platform using React and TypeScript, designed for cross-device accessibility and clear data visualization.",
            "Built the frontend to help small and medium-sized enterprises (SMEs) calculate and analyze their carbon footprint without relying on costly external consultants, and developed the backend API using FastAPI and Python to handle calculations, data processing, and storage.",
            "Set up GitLab CI/CD pipelines to automate build, testing, and deployment processes, ensuring reliable and up-to-date releases.",
            "Collaborated with a team of five as part of a final-year university project, coordinating frontend-backend integration and overall product delivery.",
            "Led a live demo session for ~80 users to showcase the platform, gather feedback, and validate usability and data accuracy."
        ],
        imageSource: ["/cucfp_proj1.png", "/cucfp_proj2.png", "/cucfp_proj3.png"],
        technologies: ["TypeScript", "React", "Python", "FastAPI", "Saga Pattern", "GitLab CI/CD", "Docker", "AWS"],
        websiteLink: "https://cucfp.kao9.dev/",
        liveLink: "https://www.youtube.com/watch?v=TwXIw59J8jI",
        featured: true,
    },
    {
        title: "Online Trading Platform",
        intro: "Microservice-based trading platform developed as a university group project, featuring modular backend services for authentication, secure payments, and real-time communication.",
        description: [
            "Designed and implemented backend services for a microservice-based online trading platform as part of a university group project.",
            "Developed a user service using Go and Echo to handle authentication and authorization via secure REST APIs.",
            "Built a transaction service with Stripe integration to support secure purchase and payment operations.",
            "Implemented a real-time chat service using WebSocket and gRPC, enabling live user communication across the platform.",
            "Structured each service as an independent microservice to ensure separation of concerns and support scalable system design.",
        ],
        imageSource: ["/cump_proj1.png", "/cump_proj2.png", "/cump_proj3.png"],
        technologies: ["Go", "Echo", "Microservices", "gRPC", "WebSocket", "PostgreSQL", "Redis", "Docker"],
        liveLink: "https://www.youtube.com/watch?v=N_UUewWK13U",
        featured: false,
    },
    {
        title: "Poll Voting Website",
        intro: "A real-time poll voting website developed collaboratively with a team of three, where users can vote between two choices. Built with Go and deployed using AWS services via Terraform.",
        description: [
            "Built collaboratively with a team of three, this real-time poll voting platform lets users vote between two choices. I led backend and infrastructure development using Go, AWS ECS, ElasticCache, and Terraform.",
            "Containerized the application and deployed it on AWS ECS using Terraform for infrastructure-as-code and consistent provisioning.",
            "Integrated AWS ElasticCache (Redis) to store and retrieve live poll data with low latency.",
            "Configured AWS SNS to publish poll activity notifications to subscribed systems or endpoints.",
            "Provisioned a secure and isolated AWS VPC environment to host the containerized services, ensuring performance and security."
        ],
        imageSource: ["/poll_proj1.png", "/poll_proj2.png", "/poll_proj3.png"],
        technologies: ["Terraform", "Go", "Fiber", "ElasticCache", "AWS SNS", "Elastic Container Service (ECS)", "AWS VPC"],
        githubLink: "https://github.com/guncv/Poll-Voting-Website",
        featured: false,
    },
    {
        title: "Terraform AWS For WordPress and MariaDB",
        intro: "Automated AWS infrastructure setup using Terraform to deploy a WordPress site on EC2 with a MariaDB database, S3 storage integration, and secure VPC networking.",
        description: [
            "Developed a complete Infrastructure-as-Code (IaC) solution using Terraform to automate AWS resource provisioning for a WordPress environment.",
            "Provisioned a Virtual Private Cloud (VPC) with subnets, routing, NAT gateway, and security groups to ensure secure and isolated network configuration.",
            "Launched an EC2 instance to host the WordPress application and configured MariaDB as the backend database server.",
            "Integrated an S3 bucket for media storage to enhance scalability and reduce load on the EC2 instance.",
            "Created setup scripts to automate installation and configuration of WordPress and MariaDB during instance initialization.",
            "Configured IAM roles and permissions to allow EC2 instances to securely interact with AWS services such as S3.",
            "Implemented modular Terraform files for easy management, reuse, and future scalability of the infrastructure."
        ],
        imageSource: ["/wordpress1.png"],
        technologies: ["Terraform", "AWS EC2", "VPC", "MariaDB", "S3", "IAM", "NAT Gateway", "Security Groups", "Bash"],
        githubLink: "https://github.com/guncv/TerraformEC2SetUp",
        featured: false
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
                position: 'TA Assistant (Software Defined Systems) – Support Role',
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
                    "Collaborated with the team to resolve UAT issues in LH Microapp’s detection feature, coordinating with Product Owner and refining Flutter-based mobile interfaces to ensure accurate behavior, responsiveness, and design consistency.",
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
        ],
        certificateImages: ["/graduate1.jpg", "/graduate2.jpg"]
    }
];

const certificatesConfig: Certificate[] = [
    {
        imageSource: ibm,
        title: "IBM RAG and Agentic AI Specialization",
        issuer: "IBM",
        date: "2025",
        credentialUrl: "https://coursera.org/share/90cdf6ae8cec168ea967c95c92ab2156",
        description: "Completed IBM’s 8-course program on building RAG and Agentic AI systems using tools like LangChain, LangGraph, CrewAI, and vector databases. Gained hands-on experience in LLM app development and orchestration.",
        skills: [
            "Retrieval-Augmented Generation (RAG)",
            "Agentic AI",
            "LangChain",
            "LangGraph",
            "CrewAI",
            "AutoGen",
            "BeeAI",
            "Vector Databases (FAISS, Chroma)",
            "Multimodal AI",
            "LLM Orchestration",
            "Prompt Engineering",
            "AI Application Development"
        ]
    },
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