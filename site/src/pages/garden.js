import React from "react"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchBar from "../components/searchBar"

const blog = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <section className="section">
        <SearchBar />
      </section>
    </Layout>
  )
}

export default blog
