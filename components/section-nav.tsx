'use client'

import { useEffect, useState } from 'react'

const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'impact', label: 'Impact' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export const SectionNav = () => {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    // Delay to ensure page.tsx children have mounted
    const timer = setTimeout(() => {
      const container = document.querySelector('[data-scroll-container]')
      if (!container) return

      const detectActive = () => {
        const containerRect = container.getBoundingClientRect()
        let closest = SECTIONS[0].id
        let closestDist = Number.POSITIVE_INFINITY

        for (const { id } of SECTIONS) {
          const el = document.getElementById(id)
          if (!el) continue
          const rect = el.getBoundingClientRect()
          const dist = Math.abs(rect.top - containerRect.top)
          if (dist < closestDist) {
            closestDist = dist
            closest = id
          }
        }
        setActive(closest)
      }

      container.addEventListener('scroll', detectActive, { passive: true })
      detectActive()

      // Store cleanup ref
      ;(window as any).__sectionNavCleanup = () => {
        container.removeEventListener('scroll', detectActive)
      }
    }, 200)

    return () => {
      clearTimeout(timer)
      ;(window as any).__sectionNavCleanup?.()
    }
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Desktop right-side dot nav */}
      <nav
        className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-nav hidden md:flex flex-col gap-3 items-center"
        aria-label="Section navigation"
      >
        {SECTIONS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="group relative flex items-center"
            aria-label={`Go to ${label}`}
          >
            <span className="absolute right-full mr-3 whitespace-nowrap text-[10px] text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 uppercase tracking-widest font-mono">
              {label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                active === id
                  ? 'w-2 h-2 bg-[#b3d574] shadow-[0_0_8px_rgba(179,213,116,0.5)]'
                  : 'w-1.5 h-1.5 bg-zinc-700 group-hover:bg-zinc-500'
              }`}
            />
          </button>
        ))}
      </nav>

      {/* Mobile bottom tab bar */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-nav md:hidden flex items-center justify-around h-14 bg-zinc-950/95 backdrop-blur-md border-t border-white/10 pb-[env(safe-area-inset-bottom,0px)]"
        aria-label="Section navigation"
      >
        {SECTIONS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`flex flex-col items-center justify-center gap-0.5 min-w-[44px] min-h-[44px] px-1 transition-colors duration-200 ${
              active === id ? 'text-[#b3d574]' : 'text-zinc-500 hover:text-zinc-300'
            }`}
            aria-label={`Go to ${label}`}
            aria-current={active === id ? 'page' : undefined}
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                active === id
                  ? 'w-5 h-0.5 bg-[#b3d574] shadow-[0_0_6px_rgba(179,213,116,0.5)] rounded-sm'
                  : 'w-1 h-1 bg-zinc-600'
              }`}
            />
            <span className="text-[10px] font-mono uppercase tracking-widest leading-none mt-0.5">
              {label}
            </span>
          </button>
        ))}
      </nav>
    </>
  )
}
