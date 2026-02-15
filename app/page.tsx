import { HeroSection } from '@/components/sections/hero'
import { ImpactSection } from '@/components/sections/impact'
import { ExperienceSection } from '@/components/sections/experience'
import { EducationSection } from '@/components/sections/education'
import { SkillsSection } from '@/components/sections/skills'
import { ContactSection } from '@/components/sections/contact'
import { SectionNav } from '@/components/section-nav'
import { FloatingButtons } from '@/components/floating-buttons'

export default function Home() {
  return (
    <>
      <div
        data-scroll-container
        className="h-full w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory scrollbar-hide"
      >
        <HeroSection />
        <ImpactSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
      </div>
      <SectionNav />
      <FloatingButtons />
    </>
  )
}
