import { Experience, Project, Education, Certificate } from "./type";

const contactConfig = {
    email: "chanagun.vir@gmail.com",
    phone: "0626274882",
}

const projectsConfig: Project[] = [
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce platform with real-time inventory management, payment integration, and admin dashboard. Built with microservices architecture for scalability.",
        imageSource: ["/profile.jpg", "/secondProfile.png", "/chula.png"], // Multiple images - will show carousel
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
        imageSource: "/profile.jpg", // Replace with actual project image
        technologies: ["Python", "React", "OpenAI", "Redis", "AWS"],
        githubLink: "https://github.com/yourusername/ai-chat",
        featured: false,
    },
    {
        title: "Portfolio Website",
        description: "Modern, responsive portfolio website with dark mode, smooth animations, and optimized performance.",
        imageSource: "/profile.jpg", // Replace with actual project image
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
        companyIntro: 'Thailand\'s leading university where I serve as a Teaching Assistant for advanced computer engineering courses.',
        positions: [
            {
                description: [
                    "Assisted official Teaching Assistants during lab and lecture sessions for Software-Defined Systems I (2110506).",
                    "Helped students understand core concepts including containers, Docker, Kubernetes, cloud computing, and DevOps practices.",
                    "Supported assignment reviews and guided students on practical exercises covering AWS, SDN (ONOS, Mininet), and edge computing technologies.",
                    "Volunteered based on academic performance and demonstrated interest in system design and distributed computing.",
                    "Facilitated hands-on learning experiences and helped students debug complex infrastructure and networking assignments."
                ],
                date: 'August – November 2025',
                position: 'Teaching Assistant (Support Role)',
                intro: 'Volunteered as TA helper for advanced systems course. Guided students in cloud infrastructure and DevOps labs.',
            }
        ]
    },
    {
        imageSource: "/codefin.png",
        company: 'Codefin Company Limited',
        companyIntro: 'Leading fintech company specializing in digital banking solutions and microservices architecture.',
        positions: [
            {
                description: [
                    "Continuing development on a micro-application project using Flutter to deliver a responsive and user-friendly frontend optimized for mobile platforms.",
                    "Leveraging Go (Golang) with gRPC and GraphQL to build scalable, high-performance backend services within a microservices architecture.",
                    "Actively monitored and analyzed logs within OpenShift to identify and address deployment and runtime issues, ensuring greater operational reliability and system performance.",
                    "Developed and maintained comprehensive unit tests for backend services, promoting long-term code maintainability and aligning with test-driven development (TDD) best practices.",
                    "Worked collaboratively with cross-functional teams to iterate on new features and provide real-time support, ensuring smooth development cycles and timely product updates."
                ],
                date: 'February 2025 - Present',
                position: 'Full Stack Developer (Part-Time)',
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
                date: 'August – December 2024',
                position: 'Full Stack Developer (Internship)',
                intro: 'Started as intern, learning modern web development while balancing university studies.',
            }
        ]
    },
    {
        imageSource: "/wetech.png",
        company: 'WE TECH CONSULTING',
        companyIntro: 'Technology consulting firm focused on digital transformation and operational efficiency.',
        positions: [
            {
                description: [
                    "Completed a 2-month internship as a Software Developer, focusing on improving internal operational tools using Glide, a low-code platform.",
                    "Designed intuitive user interfaces and streamlined the admin dashboard to improve workflow efficiency and data accuracy.",
                    "Collaborated with a cross-functional team to gather requirements, implement features, and iterate quickly based on feedback.", 
                    "Gained hands-on experience in low-code development, database design logic, and real-world product lifecycle management.",
                ],
                date: 'June - July 2024',
                position: 'Software Developer (Internship)',
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
        date: "2022 - Present",
        gpa: "3.85/4.00",
        description: "Pursuing Computer Engineering with focus on software development, system design, and emerging technologies.",
        achievements: [
            "Dean's List for Academic Excellence",
            "Teaching Assistant for Software-Defined Systems I",
            "Active member of Computer Engineering Student Association"
        ],
        coursework: [
            "Software Engineering",
            "Data Structures and Algorithms", 
            "Computer Networks",
            "Database Systems",
            "Software-Defined Systems",
            "Machine Learning",
            "Cloud Computing",
            "Mobile Application Development"
        ]
    }
];

const certificatesConfig: Certificate[] = [
    {
        imageSource: "/chula.png",
        title: "AWS Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2024",
        credentialId: "AWS-CP-2024-001",
        credentialUrl: "https://aws.amazon.com/verification",
        description: "Fundamental understanding of AWS Cloud concepts, services, and pricing.",
        skills: ["AWS Cloud", "Cloud Computing", "AWS Services", "Cloud Security"]
    },
    {
        imageSource: "/chula.png",
        title: "React Developer Certification",
        issuer: "Meta",
        date: "2023",
        credentialId: "META-REACT-2023-001",
        credentialUrl: "https://coursera.org/verify",
        description: "Comprehensive React.js development skills including hooks, state management, and component architecture.",
        skills: ["React.js", "JavaScript", "JSX", "State Management", "Component Architecture"]
    },
    {
        imageSource: "/chula.png",
        title: "Python Programming Certification",
        issuer: "University of Michigan",
        date: "2023",
        credentialId: "UM-PYTHON-2023-001",
        credentialUrl: "https://coursera.org/verify",
        description: "Advanced Python programming concepts including data structures, algorithms, and web development.",
        skills: ["Python", "Data Structures", "Algorithms", "Web Development", "Flask", "Django"]
    }
];

export default experienceConfig;
export { contactConfig, projectsConfig, educationConfig, certificatesConfig };