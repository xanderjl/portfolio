import React from "react"
import { graphql } from "gatsby"
import { Box, Heading, Text, Container } from "@chakra-ui/core"
import { motion } from "framer-motion"
import PortableText from "@sanity/block-content-to-react"
import getShareImage from "@jlengstorf/get-share-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  BlockRenderer,
  BlockImage,
  Code,
  toPlainText,
  BlogLink,
} from "../components/serializers"

const MotionBox = motion.custom(Box)

const BlogPost = ({ data }) => {
  const { title, publishDate, _rawBody } = data.sanityPost
  const shareCard = getShareImage({
    title,
    cloudName: `alexlow-dev`,
    imagePublicID: `share-card.jpg`,
    titleFont: `Poppins`,
    textColor: `0c0e0f`,
    titleFontSize: 80,
  })

  return (
    <Layout>
      <SEO
        title={`${title} - Garden`}
        description={toPlainText(_rawBody).slice(0, 156) + "..."}
        shareCard={shareCard}
      />
      <MotionBox
        display="flex"
        flexDirection="column"
        alignItems="center"
        maxW="70ch"
        m="0 auto"
        mt="3rem"
        bg="white"
        boxShadow="0 0.5rem 1em -0.125em rgba(0,0,0,0.1)"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
      >
        <Container maxW="xl" p="3rem 1.25rem 2rem 1.25rem">
          <Heading as="h1" fontFamily="body">
            {title}
          </Heading>
          <Text as="span">{publishDate}</Text>
        </Container>
        <Container maxW="xl" p="0 1.25rem 7rem 1.25rem">
          <PortableText
            blocks={_rawBody}
            serializers={{
              types: {
                block: BlockRenderer,
                blockImage: BlockImage,
                code: Code,
              },
              marks: { link: BlogLink },
            }}
          />
        </Container>
      </MotionBox>
    </Layout>
  )
}

export const data = graphql`
  query($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
      id
      title
      slug {
        current
      }
      publishDate(formatString: "MM/DD/YYYY")
      _rawBody
    }
  }
`

export default BlogPost
