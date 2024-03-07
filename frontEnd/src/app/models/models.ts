export interface Education{
    university: string;
    course: string;
    duration: string;
    gpa: string;
}

export interface workExperience{
    designation: string;
    organization: string;
    technology: string;
    duration: string;
    description: string[];
}

export interface skills{
    name: string;
}

export interface project{
    title: string;
    technologies: string;
    description: string[];
}