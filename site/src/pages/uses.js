import React from "react"
import { graphql } from "gatsby"
import PortableText from "@sanity/block-content-to-react"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import { BlockRenderer, LinkTag } from "../components/serializers"

const uses = ({ data }) => {
  const { title, metaDescription, body } = data.sanityUses
  return (
    <Layout title={title} description={metaDescription}>
      {body.map((section, i) => {
        const { _key, array, _rawBody } = section
        return (
          <motion.section
            key={_key}
            className="section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: `0.${i * 3}`, type: "tween" }}
          >
            <div className="tech-grid">
              <div className="icons">
                {array.map((item, i) => {
                  const { id, title, url, icon } = item
                  return (
                    <a key={id} href={url} style={{ flex: 1 }}>
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
                          delay: `0.${i}`,
                          type: "spring",
                          stiffness: 100,
                        }}
                        whileHover={{
                          scale: 1.1,
                        }}
                      />
                    </a>
                  )
                })}
              </div>
              <motion.div
                className="content"
                style={{ maxWidth: "55ch" }}
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.2,
                  delay: `0.${i * 2}`,
                  type: "spring",
                  stiffness: 50,
                }}
              >
                <PortableText
                  blocks={_rawBody}
                  serializers={{
                    types: { block: BlockRenderer },
                    marks: { link: LinkTag },
                  }}
                />
              </motion.div>
            </div>
          </motion.section>
        )
      })}
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

export default uses
