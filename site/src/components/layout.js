import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "./seo"
import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ title, description, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <SEO
        title={title ? title : data.site.siteMetadata.title}
        description={
          description ? description : data.site.siteMetadata.description
        }
      />
      <div className="background" />
      <div className="site">
        <main className="site-content">
          <div className="container" style={{ maxWidth: "960px" }}>
            <Navbar />
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Layout
