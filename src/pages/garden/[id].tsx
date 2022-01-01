import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import PagePost from 'components/pages/PagePost'
import getPostFiles from 'lib/mdx/getPostFiles'
import getFileContent from 'lib/mdx/getFileContent'
import { PagePostProps } from 'types/Pages'

const Post: NextPage<PagePostProps> = ({ children, frontMatter }) => {
  return <PagePost children={children} frontMatter={frontMatter} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = await getPostFiles()

  const paths = files.map(file => {
    const { filename } = file
    const id = filename.replace('.mdx', '')

    return {
      params: { id }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params || {}

  const { content: children, frontMatter } = await getFileContent(id as string)

  return {
    props: { children, frontMatter }
  }
}

export default Post
