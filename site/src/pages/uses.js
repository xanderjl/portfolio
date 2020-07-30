import React from "react"
import { graphql } from "gatsby"
import PortableText from "@sanity/block-content-to-react"
import Layout from "../components/layout"
import { BlockRenderer, LinkTag } from "../components/serializers"

const uses = ({ data }) => {
  const { title, metaDescription, body } = data.sanityUses
  return (
    <Layout title={title} description={metaDescription}>
      {body.map(section => {
        const { _key, array, _rawBody } = section
        return (
          <section key={_key} className="section">
            <div className="tech-grid">
              <div className="icons">
                {array.map(item => {
                  const { id, title, url, icon } = item
                  return (
                    <a key={id} href={url} style={{ flex: 1 }}>
                      <img
                        className="uses-svg mr-4"
                        src={icon.asset.fixed.src}
                        alt={`${title} logo`}
                        style={{
                          maxWidth: "80px",
                          maxHeight: "80px",
                        }}
                      />
                    </a>
                  )
                })}
              </div>
              <div className="content" style={{ maxWidth: "55ch" }}>
                <PortableText
                  blocks={_rawBody}
                  serializers={{
                    types: { block: BlockRenderer },
                    marks: { link: LinkTag },
                  }}
                />
              </div>
            </div>
          </section>
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
