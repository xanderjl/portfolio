import Layout from "../../components/layout"
import { Link as NextLink } from "next/link"
import { Container, Stack, Link, Heading, StackDivider } from "@chakra-ui/react"

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
  const req = await fetch(
    `https://${process.env.SANITY_ID}.api.sanity.io/v1/graphql/${process.env.SANITY_DATASET}/default`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query {
            Blog(id: "blog") {
              title
              metaDescription
            }
            allPost(sort:{publishDate:DESC}) {
              _id
              title
              slug {
                current
              }
            }
          }
        `,
      }),
    }
  )
  const props = await req.json()

  if (!props) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    props: { ...props },
  }
}

export default Garden
