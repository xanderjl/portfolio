import React from "react"
import { Heading, Text, Container, Flex, Box } from "@chakra-ui/core"
import { motion } from "framer-motion"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contactForm"

const MotionHeading = motion.custom(Heading)
const MotionText = motion.custom(Text)
const MotionBox = motion.custom(Box)

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container p="3rem 1.25rem">
        <MotionHeading
          as="h1"
          fontSize="5xl"
          fontStyle="italic"
          fontWeight="400"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, type: "tween" }}
        >
          Alex Low
        </MotionHeading>
        <MotionText
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, type: "tween" }}
        >
          Front End Web Developer
        </MotionText>
      </Container>
      <Container p="0 1.25rem 3rem 1.25rem">
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
            <ContactForm title="Let's Talk." />
          </MotionBox>
        </Flex>
      </Container>
    </Layout>
  )
}

export default IndexPage
