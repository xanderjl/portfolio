import React from "react"
import { graphl } from "gatsby"
import Layout from "../components/layout"

const portfolio = ({ data }) => {
  const projects = data.projects.edges

  return (
    <Layout title="Portfolio">
      {projects.map(({ node: project }) => {
        const {
          id,
          title,
          slug,
          repoUrl,
          projectUrl,
          image,
          technologies,
        } = project
        return (
          <div key={id} className="card">
            
          </div>
        )
      })}
    </Layout>
  )
}

export const data = graphql`
  {
    projects: allSanityProjects {
      edges {
        node {
          id
          title
          slug {
            current
          }
          repoUrl
          projectUrl
          image {
            asset {
              fluid(maxWidth: 800, maxHeight: 600) {
                ...GatsbySanityImageFluid
              }
            }
            hotspot {
              x
              y
            }
          }
          technologies {
            id
            title
            icon {
              asset {
                fixed(width: 80, height: 80) {
                  ...GatsbySanityImageFixed
                }
              }
            }
            url
          }
        }
      }
    }
  }
`

export default portfolio
