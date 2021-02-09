import React from "react"
import { graphql } from "gatsby"
import { Link, Heading, Container, Box, Grid, Flex } from "@chakra-ui/react"
import PortableText from "@sanity/block-content-to-react"
import Img from "gatsby-image"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { GithubIcon } from "../components/icons"
import serializers from "../components/serializers"

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
            md: "repeat(auto-fill, minmax(400px, 1fr))",
          }}
          gap="3rem"
        >
          {projects.map(({ node: project }, i) => {
            const {
              id,
              title,
              repoUrl,
              projectUrl,
              image,
              technologies,
              _rawDescription,
            } = project

            const { [technologies.length - 1]: last } = technologies
            return (
              <MotionBox
                key={id}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: `0.${i}`, type: "tween" }}
                bg="white"
                boxShadow="0 0.5rem 1em -0.125em rgba(0,0,0,0.1)"
              >
                <Link href={projectUrl} _hover={{ opacity: "0.75" }}>
                  <Img fluid={image.asset.fluid} />
                </Link>
                <Flex flexDir="column" p="2rem 1.25rem 5rem 1.25rem">
                  <Heading pb="1rem" fontFamily="body">
                    <Link
                      href={projectUrl}
                      p="0.25rem 0.5rem"
                      _hover={{
                        textDecoration: "none",
                        bg: "blue.100",
                        color: "gray.700",
                        borderRadius: "4px",
                      }}
                    >
                      {title}
                    </Link>
                  </Heading>
                  <Flex>
                    <Box>
                      <Link
                        href={repoUrl}
                        p="0.5rem"
                        _hover={{
                          textDecoration: "none",
                          bg: "blue.100",
                          color: "gray.700",
                          borderRadius: "4px",
                        }}
                      >
                        <GithubIcon boxSize={{ base: 8, md: 12 }} />
                      </Link>
                    </Box>
                    <Flex pb="1rem" wrap="wrap">
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
                              borderRadius: "4px",
                            }}
                          >
                            {title === last.title ? title : title}
                          </Link>
                        )
                      })}
                    </Flex>
                  </Flex>
                  <Flex>
                    {_rawDescription && (
                      <PortableText
                        blocks={_rawDescription}
                        serializers={serializers}
                      />
                    )}
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
          _rawDescription
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
