export interface Skill {
  name: string;
  category: 'Programming' | 'Web Tech' | 'Artificial Intelligence' | 'Tools & Foundations';
  level: string;
  description: string;
  highlights: string[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  technologies: string[];
  githubUrl: string;
  codeSnippet: string;
  features: string[];
}

export interface GradeSubject {
  id: string;
  name: string;
  marks: number;
  maxMarks: number;
  credits: number;
}
