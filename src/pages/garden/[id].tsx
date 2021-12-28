import React from 'react'
import { GetStaticPaths, NextPage } from 'next'
import PagePost from 'components/pages/PagePost'
import getPostFiles from 'lib/mdx/getPostFiles'

const Post: NextPage = () => {
  return <PagePost />
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

export default Post
