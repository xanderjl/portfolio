import React from "react"
import { motion } from "framer-motion"

import SEO from "../components/seo"
import ContactForm from "../components/contactForm"

const contact = () => {
  return (
    <>
      <SEO title="Contact" />
      <motion.section
        className="section"
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
      </motion.section>
    </>
  )
}

export default contact
