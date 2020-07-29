import React from "react"
import { graphl } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const portfolio = ({ data }) => {
  const projects = data.projects.edges

  return (
    <Layout title="Portfolio">
      <section className="section">
        <div className="container">
          <div className="card-grid">
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
                  <div className="card-image">
                    <a
                      href={projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Img fluid={image.asset.fluid} />
                    </a>
                  </div>
                  <div className="card-content">
                    <h1 className="title is-size-4 is-uppercase mb-3">
                      <a
                        href={projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {title}
                      </a>
                    </h1>
                    {technologies.map(tech => {
                      const { id, title, icon, url } = tech
                      return (
                        <a
                          key={id}
                          className="subtitle is-size-6 is-uppercase mb-1"
                          href={url}
                          style={{ display: "inline-block" }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={icon.asset.fixed.src}
                            alt={`${title} logo`}
                            style={{ height: "1rem", width: "auto" }}
                            className="svg mx-1"
                          />
                          {title + " / "}
                        </a>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
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
