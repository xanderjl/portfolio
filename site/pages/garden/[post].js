import { Box, Heading, Text, Container } from "@chakra-ui/react"
import { motion } from "framer-motion"
import PortableText from "@sanity/block-content-to-react"
import getShareImage from "@jlengstorf/get-share-image"
import Layout from "../../components/layout"
import serializers, { toPlainText } from "../../components/serializers"

const MotionBox = motion.custom(Box)

const BlogPost = ({ data }) => {
  const { title, publishDate, bodyRaw } = data
  const shareCard = getShareImage({
    title,
    cloudName: `alexlow-dev`,
    imagePublicID: `share-card.jpg`,
    titleFont: `Poppins`,
    textColor: `0c0e0f`,
    titleFontSize: 80,
  })

  return (
    <Layout
      title={`${title} - Garden`}
      description={toPlainText(bodyRaw).slice(0, 156) + "..."}
      shareCard={shareCard}
    >
      <MotionBox
        display="flex"
        flexDirection="column"
        alignItems="center"
        maxW="70ch"
        m="0 auto"
        mt="3rem"
        bg="white"
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
          <PortableText blocks={bodyRaw} serializers={serializers} />
        </Container>
      </MotionBox>
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      ...params,
    },
  }
}

export default BlogPost
