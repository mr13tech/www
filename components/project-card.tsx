import Link from 'next/link'
import type { Project } from '@/types'

export const ProjectCard = ({ project }: { project: Project }) => (
  <Link
    href={project.link}
    target="_blank"
    rel="noreferrer"
    className="flex w-full max-w-[588px] flex-col items-start justify-start gap-8 rounded-3xl bg-black p-6 hover:bg-gray-300 hover:bg-opacity-10 lg:max-w-[330px]"
  >
    <img src={project.logoSrc} alt={project.title} className="h-12 w-auto object-contain" />
    <div className="flex-1 pl-4 text-left">
      <p className="text-3xl">{project.title}</p>
      <p className="text-sm lg:text-base">{project.description}</p>
    </div>
  </Link>
)
