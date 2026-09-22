import { Skill, Project } from '../types';

export const PERSONAL_INFO = {
  name: 'Mushtakh',
  headline: 'Aspiring AI Engineer & 1st Year B.Tech CSE Student',
  subtext: 'Building a strong algorithmic foundation in Python, modern web development, and foundational Generative AI. Eager to solve real-world problems with intelligent systems.',
  education: {
    degree: 'B.Tech in Computer Science and Engineering',
    status: '1st Year Undergraduate',
    focus: 'Core Computing, Data Structures, Python, and AI Fundamentals',
  },
  links: {
    github: 'https://github.com/mushtakhshaik143-cmd',
    linkedin: 'https://www.linkedin.com/feed/',
    email: 'mushtakhshaik143@gmail.com',
  },
};

export const SKILLS: Skill[] = [
  {
    name: 'Python (Fundamentals)',
    category: 'Programming',
    level: 'Core Knowledge',
    description: 'Writing structured, modular code, handling control logic, loops, functions, and standard data structures.',
    highlights: ['Conditionals & Loops', 'Functions & Modules', 'Basic Data Structures (Lists, Dicts, Tuples)', 'File Handling & Input Validation'],
  },
  {
    name: 'Web Development',
    category: 'Web Tech',
    level: 'Foundational',
    description: 'Developing clean, responsive interfaces with semantic HTML, modern styling, and interactive JavaScript.',
    highlights: ['Semantic HTML5', 'Responsive CSS / Tailwind', 'Core JavaScript Logic', 'DOM Manipulation & Event Handling'],
  },
  {
    name: 'Generative AI (Foundations)',
    category: 'Artificial Intelligence',
    level: 'Emerging & Enthusiast',
    description: 'Understanding large language models, prompt engineering patterns, tokenization, and AI tooling.',
    highlights: ['Prompt Engineering & System Prompting', 'LLM Capabilities & Limitations', 'Gemini & AI Studio Workflows', 'AI Integration Concepts'],
  },
  {
    name: 'Academic Foundations',
    category: 'Tools & Foundations',
    level: 'In Progress (Year 1)',
    description: 'Academic coursework focusing on engineering mathematics, computational logic, and version control.',
    highlights: ['Discrete Math & Problem Solving', 'Git & GitHub Basics', 'Object-Oriented Thinking', 'Algorithmic Flowcharts'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'grade-calculator',
    title: 'Student Grade Calculator',
    tagline: 'Automated Academic Evaluation & GPA Computation Engine',
    description: 'A practical utility tool designed to compute total marks, percentage, grading scale tiers (A+, A, B, C, F), and cumulative GPA based on subject marks and credit weights. Implements input validation and instant academic feedback.',
    category: 'Python & Web Application',
    technologies: ['Python', 'Logic Control', 'JavaScript', 'Responsive UI'],
    githubUrl: 'https://github.com/mushtakhshaik143-cmd',
    features: [
      'Multi-subject score aggregation with customizable weights',
      'Instant grade letter assignment based on standard percentile scales',
      'Pass/Fail distinction with subject-level threshold checks',
      'Performance remarks and cumulative GPA (10-point scale) calculation',
    ],
    codeSnippet: `# Student Grade Calculator - Core Python Logic
def calculate_grade(marks_list):
    total = sum(marks_list)
    percentage = (total / (len(marks_list) * 100)) * 100
    
    if percentage >= 90:
        grade = "A+ (Outstanding)"
        gpa = 10.0
    elif percentage >= 80:
        grade = "A (Excellent)"
        gpa = 9.0
    elif percentage >= 70:
        grade = "B (Good)"
        gpa = 8.0
    elif percentage >= 60:
        grade = "C (Satisfactory)"
        gpa = 7.0
    elif percentage >= 50:
        grade = "D (Pass)"
        gpa = 6.0
    else:
        grade = "F (Needs Improvement)"
        gpa = 0.0
        
    return {
        "total": total,
        "percentage": round(percentage, 2),
        "grade": grade,
        "gpa": gpa,
        "status": "PASS" if percentage >= 50 else "RE-APPEAR"
    }`,
  },
  {
    id: 'voting-eligibility',
    title: 'Eligibility Calculator for Voting System',
    tagline: 'Constitutional Age Verification & Voter Qualification Screener',
    description: 'A rule-based validation system that evaluates an individual’s eligibility to vote. Verifies legal age requirements (18+), residency/citizenship criteria, and official registration readiness, returning clear guidance for first-time voters.',
    category: 'Python Logic & System Screener',
    technologies: ['Python', 'Decision Trees', 'Validation Rules', 'Form Processing'],
    githubUrl: 'https://github.com/mushtakhshaik143-cmd',
    features: [
      'Age threshold verification with exact birthdate / age computation',
      'Multi-factor eligibility criteria check (citizenship, residency, age)',
      'Clear status indicators with countdown for prospective future voters',
      'Step-by-step guidance on required voter registration documentation',
    ],
    codeSnippet: `# Voting Eligibility Screener - Core Logic
def check_voting_eligibility(age, is_citizen, has_voter_id):
    MIN_VOTING_AGE = 18
    
    if age < 0:
        return {"status": "INVALID", "message": "Age cannot be negative."}
        
    if not is_citizen:
        return {
            "eligible": False,
            "reason": "Must be a recognized citizen to vote.",
            "next_step": "Check national citizenship registration guidelines."
        }
        
    if age < MIN_VOTING_AGE:
        years_left = MIN_VOTING_AGE - age
        return {
            "eligible": False,
            "reason": f"Underage. You will be eligible in {years_left} year(s).",
            "next_step": "Pre-register upon turning 17 or monitor upcoming elections."
        }
        
    return {
        "eligible": True,
        "reason": "You satisfy all statutory criteria!",
        "has_id": has_voter_id,
        "next_step": "Cast your ballot at your designated polling station." if has_voter_id else "Apply for your Voter ID / EPIC card online."
    }`,
  },
];

export const STRUCTURED_AI_STUDIO_PROMPT = `
Role & Persona:
You are an expert Frontend & Full-Stack Engineer specializing in modern, high-craft personal portfolios for emerging technologists.

Objective:
Build a modern, responsive, high-contrast personal portfolio website for Mushtakh, a 1st-year B.Tech Computer Science student and aspiring AI engineer.

1. Profile & Identity:
- Name: Mushtakh
- Title: Aspiring AI Engineer
- Background: 1st Year B.Tech Student in Computer Science and Engineering Department
- Personal Statement: Passionate about mathematics, computing, and generative AI. Building strong foundational problem-solving skills in Python and web technologies with the goal of engineering intelligent AI systems.
- Social Links:
  - GitHub: https://github.com/mushtakhshaik143-cmd
  - LinkedIn: https://www.linkedin.com/feed/

2. Core Technical Skills to Highlight:
- Basic Python: Syntax fundamentals, conditional logic, loops, functions, lists, dictionaries, algorithmic problem-solving.
- Basic Web Development: HTML5, responsive CSS (Tailwind), modern JavaScript fundamentals, DOM event handling.
- Basic Generative AI: Prompt engineering concepts, LLM foundations, working with Google AI Studio & Gemini, AI workflow design.

3. Projects to Feature:
A. "Student Grade Calculator":
   - Description: An academic tool calculating percentage, letter grades, GPA, and performance metrics across multiple subjects.
   - Interactive Feature: Provide a live interactive calculator demo on the page where users can input subject scores and see immediate results.
   - Tech Stack: Python logic, JavaScript, Responsive UI.
   - Link: https://github.com/mushtakhshaik143-cmd

B. "Eligibility Calculator for Voting System":
   - Description: A rule-based verification tool evaluating statutory voter qualification (18+ age criteria, citizenship verification, registration status).
   - Interactive Feature: Provide an interactive eligibility screener on the page where users test their eligibility and get registration next steps.
   - Tech Stack: Python rules, Decision tree logic, Web form.
   - Link: https://github.com/mushtakhshaik143-cmd

4. Design & UX Guidelines:
- Aesthetic: Modern, professional, developer-first aesthetic. Clean slate/zinc background with sophisticated indigo accents. High visual hierarchy, WCAG AA contrast.
- Sections:
  - Hero Section: Striking introduction, role badges, GitHub/LinkedIn action buttons, and Quick Contact.
  - About & Academic Journey: B.Tech 1st year story, learning roadmap for AI.
  - Skills Matrix: Categorized cards with clear proficiency markers.
  - Interactive Project Showcase: Cards with live interactive calculators for both projects, code snippets, and GitHub links.
  - Contact / Connect Section: Direct social links and message trigger.
- Responsiveness: Flawless layout on mobile, tablet, and desktop screens with smooth transitions.
`.trim();
