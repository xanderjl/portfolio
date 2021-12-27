import React from 'react'
import { GetStaticProps } from 'next'
import PageGarden from 'components/pages/PageGarden'
import path from 'path'
import { promises as fs } from 'fs'
import grayMatter from 'gray-matter'

interface Props {
  posts?: any
  tags: string[]
}

const Garden = ({ posts, tags }: Props) => {
  return <PageGarden posts={posts} tags={tags} />
}

export const getStaticProps: GetStaticProps = async () => {
  const postsDir = path.join(process.cwd(), './src/pages/garden/posts')
  const filenames = await fs.readdir(postsDir)
  const files = await Promise.all(
    filenames.map(async filename => {
      const filePath = path.join(postsDir, filename)
      const content = await fs.readFile(filePath, 'utf-8')
      const matter = grayMatter(content)

      return {
        filename,
        content,
        matter
      }
    })
  )

  const tmp: string[] = []

  files.map(file => {
    file.matter.data.tags.map((tag: string) => {
      tmp.push(tag)
    })
  })

  const tags = [...new Set(tmp)]

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
