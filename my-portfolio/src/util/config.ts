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
                    "Continuing development on a micro-application project using Flutter to deliver a responsive and user-friendly frontend optimized for mobile platforms.",
                    "Leveraging Go (Golang) with gRPC and GraphQL to build scalable, high-performance backend services within a microservices architecture.",
                    "Actively monitored and analyzed logs within OpenShift to identify and address deployment and runtime issues, ensuring greater operational reliability and system performance.",
                    "Developed and maintained comprehensive unit tests for backend services, promoting long-term code maintainability and aligning with test-driven development (TDD) best practices.",
                    "Worked collaboratively with cross-functional teams to iterate on new features and provide real-time support, ensuring smooth development cycles and timely product updates."
                ],
                date: 'January - April 2025',
                position: 'Software Engineer - Part-Time',
                intro: 'Part-time role while completing university. Focused on microservices and Flutter development.',
            },
            {
                description: [
                    "Worked on a new internal project 2–3 days per week while managing university coursework, demonstrating strong time management and responsibility.",
                    "Developed backend RESTful APIs using Go (Golang) with the Echo framework, ensuring secure and maintainable code structures.",
                    "Created responsive frontends with React and TypeScript, emphasizing usability and performance.",
                    "Designed and implemented Krungsri-LineOA webpages, enabling users to view transaction history and request account statements, enhancing user accessibility and financial transparency.",
                    "Built a Flutter-based micro-app for online trading, optimizing UI for mobile devices to deliver a smooth and intuitive user experience."
                ],
                date: 'August - December 2024',
                position: 'Software Engineer - Internship',
                intro: 'Started as intern, learning modern web development while balancing university studies.',
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
                    "Designed intuitive user interfaces and streamlined the admin dashboard to improve workflow efficiency and data accuracy.",
                    "Collaborated with a cross-functional team to gather requirements, implement features, and iterate quickly based on feedback.", 
                    "Gained hands-on experience in low-code development, database design logic, and real-world product lifecycle management.",
                ],
                date: 'June - July 2024',
                position: 'Software Developer - Internship',
                intro: 'First professional experience in software development using low-code platforms.',
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