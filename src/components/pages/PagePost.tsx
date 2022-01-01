import React, { ReactElement } from 'react'
import Blog from 'src/layouts/blog'
import Fullscreen from 'src/layouts/fullscreen'
import { Props } from 'types/PostPage'

const PagePost = ({ content, frontMatter }: Props): ReactElement => {
  const { layout } = frontMatter

  return layout === 'blog' ? (
    <Blog children={content} frontMatter={frontMatter} />
  ) : layout === 'fullscreen' ? (
    <Fullscreen children={content} frontMatter={frontMatter} />
  ) : (
    <></>
  )
}

export default PagePost
