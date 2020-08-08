import React from "react"
import { graphql } from "gatsby"
import PortableText from "@sanity/block-content-to-react"
import { BlockRenderer, BlockImage, Code } from "../components/serializers"

const BlogPost = ({ data }) => {
  const { title, slug, heroImage, _rawBody } = data.sanityPost
  return (
    <>
      <section className="section">
        <h1 className="title is-size-1 is-size-3-mobile">{title}</h1>
      </section>
      <section className="section">
        <PortableText
          blocks={_rawBody}
          serializers={{
            types: {
              block: BlockRenderer,
              blockImage: BlockImage,
              code: Code,
            },
          }}
        />
      </section>
    </>
  )
}

export const data = graphql`
  query($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
      id
      title
      slug {
        current
      }
      heroImage {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
        hotspot {
          x
          y
        }
      }
      _rawBody
    }
  }
`

export default BlogPost
