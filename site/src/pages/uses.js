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
      <MotionBox initial="hidden" animate="visible" variants={sectionVariants}>
        {body.map(section => {
          const { _key, array, _rawBody } = section
          return (
            <MotionContainer key={_key} variants={sectionVariants}>
              <MotionGrid variants={gridVariants}>
                <MotionBox>
                  {array.map((item, i) => {
                    const { id, title, url, icon } = item
                    return (
                      <MotionLink
                        key={id}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MotionImage
                          maxW="80px"
                          maxH="80px"
                          mr="1rem"
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
