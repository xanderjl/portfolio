import React from "react"
import { graphql } from "gatsby"
import { Box, Link, Container, Grid, Image } from "@chakra-ui/core"
import PortableText from "@sanity/block-content-to-react"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { BlockRenderer, LinkTag } from "../components/serializers"

const sectionVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
}

const gridVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
}

const textChild = {
  hidden: {
    x: 60,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
}

const MotionBox = motion.custom(Box)
const MotionLink = motion.custom(Link)
const MotionContainer = motion.custom(Container)
const MotionGrid = motion.custom(Grid)
const MotionImage = motion.custom(Image)

const Uses = ({ data }) => {
  const { title, metaDescription, body } = data.sanityUses
  return (
    <Layout>
      <SEO title={title} description={metaDescription} />
      <MotionBox
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        p="3rem 1.25rem"
      >
        {body.map(section => {
          const { _key, array, _rawBody } = section
          return (
            <MotionContainer
              key={_key}
              maxW="xl"
              variants={sectionVariants}
              p="0"
              pb={{ base: "3rem", md: "5rem" }}
            >
              <MotionGrid
                variants={gridVariants}
                gridTemplateColumns={{
                  base: "minmax(0, 1fr)",
                  md: "repeat(2, 1fr)",
                }}
                columnGap={{ base: 0, md: "1rem" }}
                rowGap="2rem"
                justifyContent="start"
                alignItems="start"
              >
                <MotionBox display="flex">
                  {array.map((item, i) => {
                    const { id, title, url, icon } = item
                    return (
                      <MotionLink
                        maxW={{ base: "60px", sm: "72px", md: "80px" }}
                        maxH="auto"
                        mr="1rem"
                        key={id}
                        href={url}
                        isExternal
                        flex={1}
                      >
                        <MotionImage
                          src={icon.asset.fixed.src}
                          alt={`${title} logo`}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: i * 0.3,
                            type: "spring",
                            stiffness: 200,
                          }}
                          whileHover={{
                            scale: 1.1,
                            transition: {
                              duration: 0.1,
                              type: "tween",
                            },
                          }}
                        />
                      </MotionLink>
                    )
                  })}
                </MotionBox>
                <MotionBox maxW="55ch" variants={textChild}>
                  <PortableText
                    blocks={_rawBody}
                    serializers={{
                      types: { block: BlockRenderer },
                      marks: { link: LinkTag },
                    }}
                  />
                </MotionBox>
              </MotionGrid>
            </MotionContainer>
          )
        })}
      </MotionBox>
    </Layout>
  )
}

export const data = graphql`
  {
    sanityUses {
      title
      metaDescription
      body {
        _key
        _rawBody
        array {
          id
          title
          url
          icon {
            asset {
              fixed {
                src
              }
            }
          }
        }
      }
    }
  }
`

export default Uses
