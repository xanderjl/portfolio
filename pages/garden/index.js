import { useState } from "react"
import { Link as NextLink } from "next/link"
import Fuse from "fuse.js"
import Layout from "../../components/layout"
import {
  Container,
  Stack,
  Link,
  Heading,
  StackDivider,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
} from "@chakra-ui/react"
import { BiSearch } from "react-icons/bi"
import { fetchSanityContent } from "../../lib/queries"

const Garden = ({ data }) => {
  const [query, setQuery] = useState("")
  const { title, metaDescription } = data.Blog
  const posts = data.allPost
  const fuse = new Fuse(posts, {
    keys: ["title", "content"],
  })
  const results = fuse.search(query)
  const postResults = query ? results.map(result => result.item) : posts

  return (
    <Layout title={title} description={metaDescription}>
      <Container maxW="xl" p="3rem 1.25rem">
        <Stack
          p="3rem 1.25rem"
          bg="white"
          borderRadius={4}
          boxShadow="lg"
          spacing={3}
          divider={<StackDivider />}
        >
          <InputGroup size="lg">
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
          {postResults.map(post => {
            const { _id, title, slug } = post
            return (
              <Link
                key={_id}
                as={NextLink}
                href={`/garden/${slug.current}`}
                p="0.5rem"
                borderRadius={4}
                _hover={{
                  background: "blue.50",
                }}
              >
                <Heading as="h2" size="lg" fontFamily="body">
                  {title}
                </Heading>
              </Link>
            )
          })}
        </Stack>
      </Container>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const data = await fetchSanityContent({
    query: `
      query {
        Blog(id: "blog") {
          title
          metaDescription
        }
        allPost(sort: { publishDate: DESC }) {
          _id
          title
          slug {
            current
          }
          content
        }
      }
    `,
  })

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    props: { ...data },
  }
}

export default Garden
