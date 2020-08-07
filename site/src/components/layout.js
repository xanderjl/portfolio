import React from "react"
import PropTypes from "prop-types"
import Navbar from "./navbar"
import Footer from "./footer"
import { motion } from "framer-motion"

const Layout = ({ children }) => {
  return (
    <motion.div className="site">
      <div className="background" />
      <main className="site-content">
        <div className="container" style={{ maxWidth: "960px" }}>
          <Navbar />
          {children}
        </div>
      </main>
      <Footer />
    </motion.div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Layout
