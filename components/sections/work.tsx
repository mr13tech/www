import { projects } from '@/data/projects'
import { hackathons } from '@/data/hackathons'
import { WorkCard } from '@/components/work-card'

export const WorkSection = () => {
  return (
    <section className="snap-start snap-always h-screen overflow-y-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 2xl:py-40">
      <div className="max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20">
        {/* Section Title */}
        <div className="flex flex-col gap-2 sm:gap-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-zinc-50">
            Featured Work
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-zinc-400">
            Projects, products, and hackathon achievements
          </p>
        </div>

        {/* Current Projects Subsection */}
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-zinc-50">
            Current Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 2xl:gap-10">
            {projects.map(project => (
              <WorkCard
                key={project.id}
                title={project.title}
                description={project.description}
                techStack={[]}
                link={project.link}
                logoSrc={project.logoSrc}
              />
            ))}
          </div>
        </div>

        {/* Hackathons Subsection */}
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-4 sm:mt-6 md:mt-8">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-zinc-50">
            Hackathon Achievements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 2xl:gap-10">
            {hackathons.map(hackathon => (
              <WorkCard
                key={hackathon.id}
                title={hackathon.name}
                description={`${hackathon.event} • ${hackathon.date}\n\n${hackathon.description}`}
                techStack={hackathon.techStack}
                link={hackathon.link}
                logoSrc={hackathon.logoSrc}
                award={hackathon.award}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
