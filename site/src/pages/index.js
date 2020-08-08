import React from "react"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contactForm"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="section">
        <motion.h1
          className="title is-playfair is-italic is-size-1-desktop "
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, type: "tween" }}
        >
          Alex Low
        </motion.h1>
        <motion.p
          className="subtitle is-size-5 is-size-6-mobile"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, type: "tween" }}
        >
          Front End Web Developer
        </motion.p>
      </section>
      <section className="section py-0">
        <div className="is-pulled-right pulled-override">
          <motion.div
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
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
