'use client'

import { useNavStore, linkStates, LinkState } from '@/app/store'
export const Nav = () => {
  const setActiveLink = useNavStore((state) => state.setActiveLink)
  const activeLink = useNavStore((state) => state.activeLink)
  const handleLinkClick = (newLink: LinkState) => setActiveLink(newLink)
  return (
    <div className='flex justify-end'>
      <ul className='menu rounded-box menu-horizontal menu-xs  mb-2 items-center bg-accent-content lg:menu-lg'>
        {linkStates.map((link) => (
          <li key={link}>
            <a
              className={activeLink === link ? 'bg-primary-focus' : ''}
              onClick={() => handleLinkClick(link)}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
