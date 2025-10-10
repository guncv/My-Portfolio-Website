export interface Position {
    description: string[];
    date: string;
    position: string;
    intro?: string;
}

export interface Experience {
    imageSource: string;
    company: string;
    companyIntro?: string;
    positions: Position[];
}

export interface Project {
    title: string;
    description: string;
    intro?: string;
    imageSource: string | string[];
    technologies: string[];
    githubLink?: string;
    liveLink?: string;
    websiteLink?: string;
    featured?: boolean;
}

export interface Education {
    imageSource: string;
    institution: string;
    degree: string;
    field: string;
    date: string;
    gpa?: string;
    description?: string;
    achievements?: string[];
    coursework?: string[];
}

export interface Certificate {
    imageSource: string;
    title: string;
    issuer: string;
    date: string;
    credentialId?: string;
    credentialUrl?: string;
    description?: string;
    skills?: string[];
}