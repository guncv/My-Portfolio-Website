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