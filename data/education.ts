export interface Education {
  id: string
  degree: string
  field: string
  institution: string
  location: string
  year: string
}

export const education: Education[] = [
  {
    id: 'bsc-pjait',
    degree: 'B.Sc.',
    field: 'Computer Science',
    institution: 'Polish-Japanese Academy of Information Technology',
    location: 'Warsaw, Poland',
    year: 'Completed',
  },
  {
    id: 'ma-odesa',
    degree: 'M.A.',
    field: 'International Economic Relations',
    institution: 'Odesa I.I. Mechnikov National University',
    location: 'Odesa, Ukraine',
    year: 'Completed',
  },
]
