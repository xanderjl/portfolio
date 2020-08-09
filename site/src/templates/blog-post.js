import React from "react"
import { graphql } from "gatsby"
import { motion } from "framer-motion"
import PortableText from "@sanity/block-content-to-react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { BlockRenderer, BlockImage, Code } from "../components/serializers"

const BlogPost = ({ data }) => {
  const { title, publishDate, _rawBody } = data.sanityPost
  return (
    <Layout>
      <SEO title={`${title} - Blog`} />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        style={{ maxWidth: "75ch", margin: "0 auto" }}
      >
        <section className="section pb-0">
          <h1 className="title is-size-1 is-size-3-mobile mb-0">{title}</h1>
          <span className="subtitle is-size-5 is-size-6-mobile my-0">
            {publishDate}
          </span>
        </section>
        <section className="section">
          <div className="content">
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
          </div>
        </section>
      </motion.div>
    </Layout>
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
      publishDate(formatString: "MM/DD/YYYY")
      _rawBody
    }
  }
`

export default BlogPost
