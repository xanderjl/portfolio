import React from "react"
import { Container } from "@chakra-ui/core"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contactForm"

const MotionContainer = motion.custom(Container)

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <MotionContainer
        p="3rem 1.25rem"
        centerContent
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.1,
          delay: 0.3,
          type: "spring",
          stiffness: 100,
        }}
      >
        <ContactForm title="Reach Out." />
      </MotionContainer>
    </Layout>
  )
}

export default contact
