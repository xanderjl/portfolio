const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("./src/templates/blog-post.js")

  const response = await graphql(`
    {
      blogPosts: allSanityPost {
        edges {
          node {
            id
            title
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (response.errors) {
    throw response.errors
  }

  const { blogPosts } = response.data

  blogPosts.edges.map(({ node: post }) => {
    const path = `/blog/${post.slug.current}`

    createPage({
      path,
      component: blogPostTemplate,
      context: { slug: post.slug.current },
    })
  })
}
