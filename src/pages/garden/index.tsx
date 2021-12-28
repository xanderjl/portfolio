import React from 'react'
import { GetStaticProps } from 'next'
import PageGarden from 'components/pages/PageGarden'
import getPostFiles from 'lib/mdx/getPostFiles'
import getTags from 'lib/mdx/getTags'

interface Props {
  posts?: any
  tags: string[]
}

const Garden = ({ posts, tags }: Props) => {
  return <PageGarden posts={posts} tags={tags} />
}

export const getStaticProps: GetStaticProps = async () => {
  const files = await getPostFiles()
  const tags = getTags(files)

  const rawPosts = files.map(file => {
    return {
      path: `/garden/posts/${file.filename.replace('.mdx', '')}`,
      title: file.matter.data.title,
      content: file.content,
      matter: file.matter.data
    }
  })

  const posts = rawPosts.sort((a, b) => {
    const aDate = new Date(a.matter.date)
    const bDate = new Date(b.matter.date)
    return aDate < bDate ? 1 : aDate > bDate ? -1 : 0
  })

  return {
    props: { posts, tags }
  }
}

export default Garden
