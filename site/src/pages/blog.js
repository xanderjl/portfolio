import React from "react"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"
import svg from "../images/under_construction.svg"

const textVariations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "tween",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
}

const textChild = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const blog = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <section className="section">
        <motion.div
          className="container"
          initial="hidden"
          animate="visible"
          variants={textVariations}
        >
          <motion.h1 className="title is-size-1-desktop" variants={textChild}>
            I'm Working On It!
          </motion.h1>
          <motion.h2
            className="subtitle is-size-3-desktop"
            variants={textChild}
          >
            I Promise
          </motion.h2>
          <motion.img
            src={svg}
            alt="construction illustration"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          />
        </motion.div>
      </section>
    </Layout>
  )
}

export default blog
