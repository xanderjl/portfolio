import { ReactNode } from 'react'
import { Projects } from 'types/Sanity'
import FrontMatter from 'types/FrontMatter'

export interface PagePostProps {
  children?: ReactNode[]
  frontMatter: FrontMatter
}

export interface PageProjectsProps {
  projects: Projects
}
