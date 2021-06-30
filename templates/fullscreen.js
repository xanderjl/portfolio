import { Box } from "@chakra-ui/react"
import { MDXProvider } from "@mdx-js/react"
import blogComponents from "@lib/blogComponents"
import Layout from "@components/layout"

const fullscreen = ({ children, frontMatter }) => {
  const { title, date, canvasBg } = frontMatter

  return (
    <MDXProvider components={blogComponents}>
      <Layout title={`${title} - Garden`} navAlpha navFixed>
        <Box
          h="100vh"
          bg={canvasBg ? canvasBg : "transparent"}
          overflow="hidden"
        >
          {children}
        </Box>
      </Layout>
    </MDXProvider>
  )
}

export default fullscreen
