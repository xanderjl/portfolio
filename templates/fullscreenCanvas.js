import { Box } from "@chakra-ui/react"
import { MDXProvider } from "@mdx-js/react"
import blogPostComponents from "@lib/blogPostComponents"
import Layout from "@components/layout"

const FullscreenCanvas = ({ children, frontMatter }) => {
  const { title, date, canvasBg } = frontMatter

  return (
    <MDXProvider components={blogPostComponents}>
      <Layout title={`${title} - Garden`} navAlpha navFixed>
        <Box h="calc(100vh - 72px)" bg={canvasBg ? canvasBg : "transparent"}>
          {children}
        </Box>
      </Layout>
    </MDXProvider>
  )
}

export default FullscreenCanvas
