import React from "react"
import { graphql } from "gatsby"
import { Container, Flex } from "@chakra-ui/react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchBar from "../components/searchBar"

const Garden = ({ data }) => {
  const { title, metaDescription } = data.sanityBlog

  return (
    <Layout>
      <SEO title={title} description={metaDescription} />
      <Container maxW="xl" p="3rem 1.25rem">
        <Flex maxW={["100%", "100%", "50%"]}>
          <SearchBar />
        </Flex>
      </Container>
    </Layout>
  )
}
export const data = graphql`
  {
    sanityBlog {
      title
      metaDescription
    }
  }
`

export default Garden
