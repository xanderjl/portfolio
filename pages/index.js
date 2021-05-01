import formium from "../lib/formiumClient"
import { Heading, Text, Container, Flex, Box } from "@chakra-ui/react"
import { motion } from "framer-motion"
import Layout from "../components/layout"
import ContactForm from "../components/contactForm"

const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionBox = motion(Box)

const IndexPage = ({ form }) => {
  return (
    <Layout title="Home">
      <Container maxW="xl" p="3rem 1.25rem">
        <MotionHeading
          as="h1"
          fontSize="5xl"
          fontStyle="italic"
          fontWeight="400"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, type: "tween" }}
        >
          Xander Low
        </MotionHeading>
        <MotionText
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, type: "tween" }}
        >
          Front End Web Developer
        </MotionText>
      </Container>
      <Container p="0 1.25rem 3rem 1.25rem" centerContent>
        <Flex justify={["center", "flex-end"]}>
          <MotionBox
            flex={1}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.1,
              delay: 0.3,
              type: "spring",
              stiffness: 100,
            }}
          >
            <ContactForm title="Let's Talk." form={form} />
          </MotionBox>
        </Flex>
      </Container>
    </Layout>
  )
}

export const getStaticProps = async ({ previewData = {} }) => {
  const form = await formium.getFormBySlug("contact", previewData)

  return {
    props: { form },
  }
}

export default IndexPage
