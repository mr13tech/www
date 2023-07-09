import { create } from 'zustand'

export const linkStates = ['about', 'present', 'past', 'future'] as const
export type LinkState = (typeof linkStates)[number]

type NavStore = {
  activeLink: LinkState
  setActiveLink: (link: LinkState) => void
}

export const useNavStore = create<NavStore>((set) => ({
  activeLink: linkStates[0],
  setActiveLink: (link) => set({ activeLink: link }),
}))
