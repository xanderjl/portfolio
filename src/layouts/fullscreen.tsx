import { ReactElement } from 'react'
import { Box } from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'
import BlogComponents from 'components/blogComponents'
import Layout from 'components/Layout'
import { PostProps } from 'types/PostPage'

const Fullscreen = ({ mdxSource, frontMatter }: PostProps): ReactElement => {
  const { title, canvasBg } = frontMatter

  return (
    <Layout title={`${title} - Garden`} navAlpha navFixed>
      <Box h='100vh' bg={canvasBg ? canvasBg : 'transparent'} overflow='hidden'>
        <MDXRemote {...mdxSource} components={BlogComponents} />
      </Box>
    </Layout>
  )
}

export default Fullscreen
