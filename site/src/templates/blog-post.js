import React from "react"
import { graphql } from "gatsby"
import { motion } from "framer-motion"
import PortableText from "@sanity/block-content-to-react"
import getShareImage from "@jlengstorf/get-share-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  BlockRenderer,
  BlockImage,
  Code,
  toPlainText,
} from "../components/serializers"

const BlogPost = ({ data }) => {
  const { title, publishDate, _rawBody } = data.sanityPost
  const shareCard = getShareImage({
    title,
    cloudName: `alexlow-dev`,
    imagePublicID: `share-card.jpg`,
    titleFont: `Poppins`,
    textColor: `0c0e0f`,
    titleBottomOffset: 446,
    titleFontSize: 80,
  })

  return (
    <Layout>
      <SEO
        title={`${title} - Blog`}
        description={toPlainText(_rawBody).slice(0, 156) + "..."}
        shareCard={shareCard}
      />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        style={{ maxWidth: "75ch", margin: "0 auto" }}
      >
        <section className="section pb-0">
          <h1 className="title is-size-2 is-size-3-mobile mb-1">{title}</h1>
          <span className="subtitle is-size-5 is-size-6-mobile my-0 has-text-grey">
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
