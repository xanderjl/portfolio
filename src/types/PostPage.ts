import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import FrontMatter from 'types/FrontMatter'
import Content from './Content'

export interface Props {
  content: Content
  frontMatter: FrontMatter
}

export interface PostProps {
  mdxSource: MDXRemoteSerializeResult
  frontMatter: FrontMatter
}
