import React, { ReactElement } from 'react'
import Blog from 'src/layouts/blog'
import Fullscreen from 'src/layouts/fullscreen'
import { PagePostProps } from 'types/Pages'

const PagePost = ({ children, frontMatter }: PagePostProps): ReactElement => {
  const { layout } = frontMatter

  return layout === 'blog' ? (
    <Blog frontMatter={frontMatter}>{children}</Blog>
  ) : layout === 'fullscreen' ? (
    <Fullscreen frontMatter={frontMatter}>{children}</Fullscreen>
  ) : (
    <></>
  )
}

export default PagePost
