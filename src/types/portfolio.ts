export interface StudentDetails {
  fullName: string;
  registrationNumber: string;
  college: string;
  school: string;
  department: string;
  section: string;
  academicStatus: string;
  studyPeriod: string;
}

export interface SkillItem {
  name: string;
  category: 'Programming' | 'Web Development' | 'Emerging Technologies' | 'Professional Skills';
  description: string;
  highlight?: string;
  tags?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  status: 'Completed' | 'In Progress' | 'Planned' | 'Upcoming';
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveDemoUrl?: string;
  isCustom?: boolean;
  category?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  imageUrl?: string;
  description: string;
  verificationNote?: string;
  customUploaded?: boolean;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
