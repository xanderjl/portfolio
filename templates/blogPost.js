import { Box, Heading, Text, Container } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { MDXProvider } from "@mdx-js/react"
import blogPostComponents from "@lib/blogPostComponents"
import Layout from "@components/layout"

const MotionBox = motion(Box)

const BlogPost = ({ children, frontMatter }) => {
  const { title, date } = frontMatter

  return (
    <MDXProvider components={blogPostComponents}>
      <Layout title={` - Garden`}>
        <MotionBox
          display="flex"
          flexDirection="column"
          alignItems="center"
          maxW="70ch"
          m="0 auto"
          mt="3rem"
          bg="white"
          borderRadius={4}
          boxShadow="lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
          }}
        >
          <Container maxW="3xl" p="3rem 1.25rem 1.25rem 1.25rem">
            <Heading as="h1" fontFamily="body">
              {title}
            </Heading>
            <Text as="span">{date}</Text>
          </Container>
          <Container maxW="3xl" p="0 1.25rem 7rem 1.25rem">
            {children}
          </Container>
        </MotionBox>
      </Layout>
    </MDXProvider>
  )
}

export default BlogPost
