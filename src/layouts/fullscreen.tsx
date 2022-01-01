import { ReactElement } from 'react'
import { Box } from '@chakra-ui/react'
import Layout from 'components/Layout'
import { PostProps } from 'types/PostPage'
import { MDXProvider } from '@mdx-js/react'
import BlogComponents from 'components/blogComponents'

const Fullscreen = ({ children, frontMatter }: PostProps): ReactElement => {
  const { title, canvasBg } = frontMatter

  return (
    <MDXProvider components={BlogComponents}>
      <Layout title={`${title} - Garden`} navAlpha navFixed>
        <Box
          h='100vh'
          bg={canvasBg ? canvasBg : 'transparent'}
          overflow='hidden'
        >
          {children}
        </Box>
      </Layout>
    </MDXProvider>
  )
}

export default Fullscreen
