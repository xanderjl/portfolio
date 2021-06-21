import { Container } from "@chakra-ui/react"
import { motion } from "framer-motion"

import Layout from "@components/layout"
import ContactForm from "@components/ContactForm"

const MotionContainer = motion(Container)

const Connect = () => {
  return (
    <Layout title="Contact">
      <MotionContainer
        maxW="xl"
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

export default Connect
