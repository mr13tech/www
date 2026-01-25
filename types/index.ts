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
