import { ReactNode } from 'react'
import FrontMatter from 'types/FrontMatter'
import Content from './Content'

export interface Props {
  content: Content
  frontMatter: FrontMatter
}

export interface PostProps {
  children?: ReactNode[]
  frontMatter: FrontMatter
}
