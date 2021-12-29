import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import PagePost from 'components/pages/PagePost'
import getPostFiles from 'lib/mdx/getPostFiles'
import getFileContent from 'lib/mdx/getFileContent'
import { Props } from 'types/PostPage'

const Post: NextPage<Props> = ({ content, frontMatter }) => {
  return <PagePost content={content} frontMatter={frontMatter} />
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

  const { content, frontMatter } = await getFileContent(id as string)

  return {
    props: { content, frontMatter }
  }
}

export default Post
