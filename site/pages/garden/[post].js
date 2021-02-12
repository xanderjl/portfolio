import Head from "next/head"
import { Box, Heading, Text, Container } from "@chakra-ui/react"
import { motion } from "framer-motion"
import getShareImage from "@jlengstorf/get-share-image"
import Layout from "../../components/layout"
import hydrate from "next-mdx-remote/hydrate"
import renderToString from "next-mdx-remote/render-to-string"
import blogPostComponenets from "../../lib/blogPostComponents"

const MotionBox = motion.custom(Box)

const BlogPost = ({ pageData, title, content }) => {
  console.log(content)
  const { publishDate } = pageData
  const shareCard = getShareImage({
    title,
    cloudName: `alexlow-dev`,
    imagePublicID: `share-card.jpg`,
    titleFont: `Poppins`,
    textColor: `0c0e0f`,
    titleFontSize: 80,
  })
  const renderedContent = hydrate(content, {
    components: blogPostComponenets,
  })

  return (
    <Layout title={`${title} - Garden`} shareCard={shareCard}>
      <Head>
        <meta name="og:image" content={shareCard} />
        <meta name="twitter:image" content={shareCard} />
      </Head>
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

  const paths = await props.data.allPost.map((path) => {
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
  const req = await fetch(
    `https://${process.env.SANITY_ID}.api.sanity.io/v1/graphql/${process.env.SANITY_DATASET}/default`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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
      }),
    }
  )

  const { data } = await req.json()

  const [pageData] = await data.allPost

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
