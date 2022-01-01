import React, { ReactElement } from 'react'
import Blog from 'src/layouts/blog'
import Fullscreen from 'src/layouts/fullscreen'
import { PagePostProps } from 'types/Pages'

const PagePost = ({ children, frontMatter }: PagePostProps): ReactElement => {
  const { layout } = frontMatter

  return layout === 'blog' ? (
    <Blog children={children} frontMatter={frontMatter} />
  ) : layout === 'fullscreen' ? (
    <Fullscreen children={children} frontMatter={frontMatter} />
  ) : (
    <></>
  )
}

export default PagePost
