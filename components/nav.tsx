'use client'

import { create } from 'zustand'

export const NavStates = ['About', 'Present', 'Past', 'Future'] as const

export type navState = (typeof NavStates)[number]

export const useNavStore = create<NavStore>((set) => ({
  state: 'About', // set default
  setState: (newState) => set({ state: newState }),
}))

type NavStore = {
  state: navState
  setState: (newState: navState) => void
}

export const Nav = () => {
  const set = useNavStore((state) => state.setState)
  const activeState = useNavStore((state) => state.state)
  const handleStateChange = (newState: navState) => set(newState)
  return (
    <div className='mt-2 flex  h-[64px] w-full max-w-[320px] items-center justify-start gap-2 rounded-3xl bg-black px-2.5 text-sm font-medium lg:max-w-[1024px] lg:text-xl'>
      {NavStates.map((state) => (
        <div key={state} className='px-2'>
          <div
            className={
              activeState === state
                ? 'bg-gradient-to-t from-[#B3D574] to-[#24B391] bg-clip-text  text-transparent'
                : 'bg-clip-text text-transparent text-white text-opacity-50 '
            }
            onClick={() => handleStateChange(state)}
          >
            {state}
          </div>
        </div>
      ))}
    </div>
  )
}
