require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const algoliaQuery = `{
  allSanityPost {
    edges {
      node {
        id
        slug {
          current
        }
        title
        publishDate
        _rawBody
      }
    }
  }
}`

const queries = [
  {
    query: algoliaQuery,
    transformer: ({ data }) => {
      function toPlainText(blocks = []) {
        return (
          blocks
            // loop through each block
            .map(block => {
              if (block._type !== "block" || !block.children) {
                return ""
              }
              return block.children.map(child => child.text).join("")
            })
            .join("\n\n")
        )
      }

      return data.allSanityPost.edges.map(({ node: post }) => {
        const { id, slug, title, _rawBody } = post
        const body = toPlainText(_rawBody)
        const chunk = {
          id,
          slug,
          title,
          body,
        }
        return chunk
      })
    },
  },
]

module.exports = {
  siteMetadata: {
    title: `Alex Low`,
    description: `Alex Low is a front end web developer focusing on the Jamstack, based in London, ON.`,
    author: `Alex Low`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        queries
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.GATSBY_SANITY_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Logo.png`,
      },
    },
  ],
}
