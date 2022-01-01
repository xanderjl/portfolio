import { ReactNode } from 'react'
import FrontMatter from 'types/FrontMatter'
import { Project } from './CustomSanity'

export interface PagePostProps {
  children?: ReactNode[]
  frontMatter: FrontMatter
}

export interface PageProjectsProps {
  projects: Project[]
}

export interface PageProjectProps {
  project: Project
}
