import Layout from "../../components/layout"
import { Container, Flex } from "@chakra-ui/react"
import SearchBar from "../../components/searchBar"

const Garden = ({ data }) => {
  const { title, metaDescription } = data.Blog

  return (
    <Layout title={title} description={metaDescription}>
      <Container maxW="xl" p="3rem 1.25rem">
        <Flex maxW={["100%", "100%", "50%"]}>{/* <SearchBar /> */}</Flex>
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

export const getStaticPaths = async () => {
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
            allPost {
              _id
              title
              slug {
                current
              }
              publishDate
              bodyRaw
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

  const paths = await props.data.allPost.map((post) => {
    const { _id, title, slug, publishDate, bodyRaw } = post
    return {
      params: {
        id: _id,
        title,
        slug: slug.current,
        publishDate,
        bodyRaw,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export default Garden
