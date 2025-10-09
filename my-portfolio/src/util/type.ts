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
    imageSource: string | string[];
    technologies: string[];
    githubLink?: string;
    liveLink?: string;
    featured?: boolean;
}