import { ReactNode } from 'react'
import { Projects } from 'studio/schema'
import FrontMatter from 'types/FrontMatter'

export interface PagePostProps {
  children?: ReactNode[]
  frontMatter: FrontMatter
}

export interface PageProjectsProps {
  projects: Projects
}
