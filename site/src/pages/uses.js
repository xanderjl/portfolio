import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import PortableText from "@sanity/block-content-to-react"
import Layout from "../components/layout"

const uses = ({ data }) => {
  const { title, metaDescription, body } = data.sanityUses
  return (
    <Layout title={title} description={metaDescription}>
      {body.map(section => {
        const { _key, array, _rawBody } = section
        return (
          <section key={_key} className="section">
            <div className="container">
              <div className="level">
                <div className="level-left">
                  {array.map(item => {
                    const { id, title, url, icon } = item
                    return (
                      <a key={id} href={url}>
                        <Img fixed={icon.asset.fixed} alt={`${title} logo`} />
                      </a>
                    )
                  })}
                </div>
                <div className="level-right">
                  <div className="content" style={{ maxWidth: "55ch" }}>
                    <PortableText blocks={_rawBody} />
                  </div>
                </div>
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
              fixed(width: 80, height: 80) {
                ...GatsbySanityImageFixed
              }
            }
          }
        }
      }
    }
  }
`

export default uses
