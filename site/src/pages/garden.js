import React from "react"
import { Container } from "@chakra-ui/core"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchBar from "../components/searchBar"

const blog = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Container p="3rem 1.25rem">
        <SearchBar />
      </Container>
    </Layout>
  )
}

export default blog
