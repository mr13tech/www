'use client'

import { useState } from 'react'
import type { TabName } from '@/types'
import type { ReactNode } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { AboutSection } from '@/components/sections/about'
import { PresentSection } from '@/components/sections/present'
import { PastSection } from '@/components/sections/past'
import { FutureSection } from '@/components/sections/future'

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabName>('About')

  const sections: Record<TabName, ReactNode> = {
    About: <AboutSection />,
    Present: <PresentSection />,
    Past: <PastSection />,
    Future: <FutureSection />,
  }

  return (
    <>
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      {sections[activeTab]}
      <Footer />
    </>
  )
}
