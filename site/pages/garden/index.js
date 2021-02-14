import Layout from "../../components/layout"
import { Link as NextLink } from "next/link"
import { Container, Stack, Link, Heading, StackDivider } from "@chakra-ui/react"
import { fetchSanityContent } from "../../lib/queries"

const Garden = ({ data }) => {
  const { title, metaDescription } = data.Blog
  const posts = data.allPost

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
          {posts.map((post) => {
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
