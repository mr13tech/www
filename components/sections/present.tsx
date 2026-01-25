import { ProjectCard } from '@/components/project-card'
import { projects } from '@/data/projects'

export const PresentSection = () => (
  <div className="flex flex-col gap-4 lg:flex-row">
    {projects.map(project => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </div>
)
