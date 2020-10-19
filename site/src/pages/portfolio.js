import React from "react"
import { graphql } from "gatsby"
import { Link, Heading, Container, Box, Grid, Flex } from "@chakra-ui/core"
import Img from "gatsby-image"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { GithubIcon } from "../components/icons"

const portfolio = ({ data }) => {
  const projects = data.projects.edges
  const MotionBox = motion.custom(Box)

  return (
    <Layout>
      <SEO title="Portfolio" />
      <Container maxW="xl" p="3rem 1.25rem">
        <Grid
          gridTemplateColumns={{
            base: "minmax(0, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap="2rem"
        >
          {projects.map(({ node: project }, i) => {
            const {
              id,
              title,
              repoUrl,
              projectUrl,
              image,
              technologies,
            } = project

            const { [technologies.length - 1]: last } = technologies
            return (
              <MotionBox
                key={id}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: `0.${i}`, type: "tween" }}
                boxShadow="0 0.5rem 1em -0.125em rgba(0,0,0,0.1)"
              >
                <Link href={projectUrl} _hover={{ opacity: "0.75" }}>
                  <Img fluid={image.asset.fluid} />
                </Link>
                <Flex flexDir="column" p="1.25rem" bg="white">
                  <Heading fontFamily="body">
                    <Link
                      href={projectUrl}
                      p="0.25rem 0.5rem"
                      _hover={{
                        textDecoration: "none",
                        bg: "blue.100",
                        color: "gray.700",
                      }}
                    >
                      {title}
                    </Link>
                  </Heading>
                  <Flex>
                    <Link
                      href={repoUrl}
                      p="0.25rem 0.5rem"
                      _hover={{
                        textDecoration: "none",
                        bg: "blue.100",
                        color: "gray.700",
                      }}
                    >
                      <GithubIcon />
                    </Link>
                    {technologies.map(tech => {
                      const { id, title, url } = tech
                      return (
                        <Link
                          key={id}
                          href={url}
                          p="0.25rem 0.5rem"
                          _hover={{
                            textDecoration: "none",
                            bg: "blue.100",
                            color: "gray.700",
                          }}
                        >
                          {title === last.title ? title : title}
                        </Link>
                      )
                    })}
                  </Flex>
                </Flex>
              </MotionBox>
            )
          })}
        </Grid>
      </Container>
    </Layout>
  )
}

export const data = graphql`
  {
    projects: allSanityProjects {
      edges {
        node {
          id
          title
          repoUrl
          projectUrl
          image {
            asset {
              fluid(maxWidth: 800, maxHeight: 600) {
                ...GatsbySanityImageFluid
              }
            }
            hotspot {
              x
              y
            }
          }
          technologies {
            id
            title
            url
          }
        }
      }
    }
  }
`

export default portfolio
