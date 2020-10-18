import React from "react"
import { graphql } from "gatsby"
import { Link, Heading, Container, Box, Grid } from "@chakra-ui/core"
import Img from "gatsby-image"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { GithubIcon } from "../components/icons"

const portfolio = ({ data }) => {
  const projects = data.projects.edges

  return (
    <Layout>
      <SEO title="Portfolio" />
      <Container p="3rem 1.25rem">
        <Grid>
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
              <motion.div
                key={id}
                className="card"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: `0.${i}`, type: "tween" }}
              >
                <Box boxShadow="0 0.5rem 1em -0.125em rgba(0,0,0,0.1)">
                  <Link href={projectUrl} isExternal>
                    <Img fluid={image.asset.fluid} />
                  </Link>
                  <Box p="1.25rem" bg="white">
                    <Heading fontFamily="body">
                      <Link href={projectUrl} isExternal>
                        {title}
                      </Link>
                    </Heading>
                    <Link href={repoUrl} isExternal className="mr-2">
                      <GithubIcon mr="0.5rem" />
                    </Link>
                    {technologies.map(tech => {
                      const { id, title, url } = tech
                      return (
                        <Link key={id} href={url} isExternal>
                          {title === last.title ? title : title + " / "}
                        </Link>
                      )
                    })}
                  </Box>
                </Box>
              </motion.div>
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
