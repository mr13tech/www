'use client'

import type { TabName } from '@/types'

const TABS: TabName[] = ['About', 'Present', 'Past', 'Future']

interface NavigationProps {
  activeTab: TabName
  onTabChange: (tab: TabName) => void
}

export const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  return (
    <div className="mt-2 flex h-[64px] w-full max-w-[588px] items-center justify-start gap-2 rounded-3xl bg-black px-2.5 text-sm font-medium lg:max-w-[1024px] lg:text-xl">
      {TABS.map(tab => (
        <div key={tab} className="px-2">
          <button
            onClick={() => onTabChange(tab)}
            className={
              activeTab === tab
                ? 'text-gradient-green cursor-pointer bg-clip-text font-medium text-transparent'
                : 'cursor-pointer text-white text-opacity-50 transition-colors hover:text-opacity-75'
            }
          >
            {tab}
          </button>
        </div>
      ))}
    </div>
  )
}
