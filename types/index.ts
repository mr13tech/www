export type TabName = 'About' | 'Present' | 'Past' | 'Future'

export interface Project {
  id: string
  logoSrc: string
  title: string
  description: string
  link: string
}

export interface ContactLink {
  name: string
  url: string
  label: string
}

export interface Experience {
  id: string
  company: string
  role: string
  startDate: string
  endDate: string
  duration: string
  description: string
  achievements: string[]
  techStack: string[]
  logoSrc?: string
  current?: boolean
}

export interface Hackathon {
  id: string
  name: string
  event: string
  date: string
  description: string
  award?: string
  techStack: string[]
  link?: string
  logoSrc?: string
}

export interface SkillCategory {
  id: string
  name: string
  icon: string
  description?: string
  skills: string[]
  featured?: boolean
}
