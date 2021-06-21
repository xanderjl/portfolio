import { useState } from "react"
import grayMatter from "gray-matter"
import path from "path"
import { promises as fs } from "fs"
import Fuse from "fuse.js"
import Layout from "@components/layout"
import {
  Container,
  Stack,
  Heading,
  StackDivider,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
} from "@chakra-ui/react"
import Link from "@components/Link"
import { motion } from "framer-motion"
import { BiSearch } from "react-icons/bi"

const MotionContainer = motion(Container)

const Garden = ({ posts }) => {
  const [query, setQuery] = useState("")
  const fuse = new Fuse(posts, {
    keys: ["title", "content"],
  })
  const results = fuse.search(query)
  const postResults = query ? results.map(result => result.item) : posts

  return (
    <Layout
      title="Welcome to my Garden"
      description="Welcome to my digital garden, where I share whatever has been on my mind."
    >
      <MotionContainer
        maxW="container.md"
        p="3rem 1.25rem"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          type: "spring",
          stiffness: 100,
          duration: 0.2,
        }}
      >
        <Stack
          p="3rem 1.25rem"
          bg="white"
          border="1px solid"
          borderColor="gray.300"
          borderRadius={4}
          boxShadow="lg"
          spacing={3}
          divider={<StackDivider />}
        >
          <InputGroup size="lg" borderColor="gray.300">
            <InputLeftElement>
              <Icon as={BiSearch} />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search for something!"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </InputGroup>
          {postResults.map((post, i) => {
            const { title, path } = post
            return (
              <Link
                key={i}
                href={path}
                p="0.5rem"
                borderRadius={4}
                _hover={{
                  background: "primary.50",
                }}
              >
                <Heading as="h2" size="lg" fontFamily="body">
                  {title}
                </Heading>
              </Link>
            )
          })}
        </Stack>
      </MotionContainer>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const postsDir = path.join(process.cwd(), "./pages/garden/posts")
  const filenames = await fs.readdir(postsDir)
  const files = await Promise.all(
    filenames.map(async filename => {
      const filePath = path.join(postsDir, filename)
      const content = await fs.readFile(filePath, "utf-8")
      const matter = grayMatter(content)

      return {
        filename,
        content,
        matter,
      }
    })
  )

  const rawPosts = files.map(file => {
    return {
      path: `/garden/posts/${file.filename.replace(".mdx", "")}`,
      title: file.matter.data.title,
      content: file.content,
      matter: file.matter.data,
    }
  })

  const posts = rawPosts.sort((a, b) => {
    const aDate = new Date(a.matter.date)
    const bDate = new Date(b.matter.date)
    return aDate < bDate ? 1 : aDate > bDate ? -1 : 0
  })

  return {
    props: { posts },
  }
}

export default Garden
