import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { motion } from "framer-motion"

import SEO from "../components/seo"

const portfolio = ({ data }) => {
  const projects = data.projects.edges

  return (
    <>
      <SEO title="Portfolio" />
      <section className="section">
        <div className="container">
          <div className="card-grid">
            {projects.map(({ node: project }, i) => {
              const {
                id,
                title,
                repoUrl,
                projectUrl,
                image,
                technologies,
              } = project

              const { [technologies.length - 1]: last } = technologies
              return (
                <motion.div
                  key={id}
                  className="card"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: `0.${i}`, type: "tween" }}
                >
                  <div className="card-image">
                    <a
                      href={projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="has-background-white"
                    >
                      <Img
                        className="gatsby-card-image"
                        fluid={image.asset.fluid}
                      />
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
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      <a
                        href={repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mr-2"
                      >
                        <svg
                          role="img"
                          className="svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                        >
                          <title>GitHub icon</title>
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                      </a>
                      {technologies.map(tech => {
                        const { id, title, url } = tech
                        return (
                          <a
                            key={id}
                            className="subtitle is-size-6 is-uppercase mr-1 mb-1"
                            href={url}
                            style={{ display: "inline-block" }}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {title === last.title ? title : title + " /"}
                          </a>
                        )
                      })}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export const data = graphql`
  {
    projects: allSanityProjects {
      edges {
        node {
          id
          title
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
            url
          }
        }
      }
    }
  }
`

export default portfolio
