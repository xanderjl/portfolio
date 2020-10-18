import React from "react"
import { Heading, Container, Flex } from "@chakra-ui/core"
import { motion } from "framer-motion"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contactForm"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container p="3rem 1.25rem">
        <motion.div
          className="title is-playfair is-italic is-size-1-desktop "
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, type: "tween" }}
        >
          <Heading as="h1" fontSize="5xl" fontStyle="italic" fontWeight="400">
            Alex Low
          </Heading>
        </motion.div>
        <motion.p
          className="subtitle is-size-5 is-size-6-mobile"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, type: "tween" }}
        >
          Front End Web Developer
        </motion.p>
      </Container>
      <Container p="0 1.25rem 3rem 1.25rem">
        <Flex justify={["center", "flex-end"]}>
          <motion.div
            style={{ flex: 1 }}
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
          </motion.div>
        </Flex>
      </Container>
    </Layout>
  )
}

export default IndexPage
