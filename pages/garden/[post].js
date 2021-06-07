import path from "path"
import { promises as fs } from "fs"
import * as matter from "gray-matter"
import { Box, Heading, Text, Container } from "@chakra-ui/react"
import { motion } from "framer-motion"
import Layout from "../../components/layout"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import blogPostComponents from "../../lib/blogPostComponents"

const MotionBox = motion(Box)

const BlogPost = ({ source, frontMatter }) => {
  const { title, date } = frontMatter

  return (
    <Layout title={`${title} - Garden`}>
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
          <MDXRemote {...source} components={blogPostComponents} />
        </Container>
      </MotionBox>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const postsDir = path.join(process.cwd(), "./posts")
  const filenames = await fs.readdir(postsDir)
  const paths = await Promise.all(filenames.map(async filename => {
    return {
      params: {
        post: filename.replace(".mdx", "")
      }
    }
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const postsDir = path.join(process.cwd(), "./posts")
  const filenames = await fs.readdir(postsDir)
  const matchingFile = filenames.find(file => file.includes(params.post))
  const filePath = path.join(postsDir, matchingFile)
  const fileContent = await fs.readFile(filePath, "utf-8")
  const { content, data } = matter(fileContent)
  const mdxSource = await serialize(content, { scope: data })

  return {
    props: {
      source: mdxSource,
      frontMatter: data
    },
  }
}

export default BlogPost
