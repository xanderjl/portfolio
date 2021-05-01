import { Box, Heading, Text, Container } from "@chakra-ui/react"
import { motion } from "framer-motion"
import Layout from "../../components/layout"
import hydrate from "next-mdx-remote/hydrate"
import renderToString from "next-mdx-remote/render-to-string"
import blogPostComponenets from "../../lib/blogPostComponents"
import { fetchSanityContent } from "../../lib/queries"

const MotionBox = motion(Box)

const BlogPost = ({ pageData, title, content }) => {
  const { publishDate } = pageData
  const renderedContent = hydrate(content, {
    components: blogPostComponenets,
  })

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
          <Text as="span">{publishDate}</Text>
        </Container>
        <Container maxW="3xl" p="0 1.25rem 7rem 1.25rem">
          {renderedContent}
        </Container>
      </MotionBox>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const data = await fetchSanityContent({
    query: `
      query {
        allPost {
          slug {
            current
          }
        }
      }
    `,
  })

  const paths = data.data.allPost.map(path => {
    const { slug } = path
    return {
      params: { post: slug.current },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const data = await fetchSanityContent({
    query: `
    query($slug: String!) {
      allPost(where: { slug: { current: { eq: $slug } } }) {
        _id
        title
        publishDate
        content
        slug {
          current
        }
      }
    }
    `,
    variables: {
      slug: params.post,
    },
  })

  const [pageData] = data.data.allPost

  const content = await renderToString(pageData.content)

  return {
    props: {
      pageData,
      title: pageData.title,
      content,
    },
  }
}

export default BlogPost
