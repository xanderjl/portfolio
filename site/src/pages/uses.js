import React from "react"
import { graphql } from "gatsby"
import PortableText from "@sanity/block-content-to-react"
import { motion } from "framer-motion"

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

const uses = ({ data }) => {
  const { title, metaDescription, body } = data.sanityUses
  return (
    <>
      <SEO title={title} description={metaDescription} />
      <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
        {body.map(section => {
          const { _key, array, _rawBody } = section
          return (
            <motion.section
              key={_key}
              className="section"
              variants={sectionVariants}
            >
              <motion.div className="tech-grid" variants={gridVariants}>
                <motion.div className="icons">
                  {array.map((item, i) => {
                    const { id, title, url, icon } = item
                    return (
                      <motion.a
                        key={id}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.img
                          className="mr-4"
                          src={icon.asset.fixed.src}
                          alt={`${title} logo`}
                          style={{
                            maxWidth: "80px",
                            maxHeight: "80px",
                          }}
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
                      </motion.a>
                    )
                  })}
                </motion.div>
                <motion.div
                  className="content"
                  style={{ maxWidth: "55ch" }}
                  variants={textChild}
                >
                  <PortableText
                    blocks={_rawBody}
                    serializers={{
                      types: { block: BlockRenderer },
                      marks: { link: LinkTag },
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.section>
          )
        })}
      </motion.div>
    </>
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

export default uses
