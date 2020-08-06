import React, { useState } from "react"
import { useLocation } from "@reach/router"
import { Link } from "gatsby"
import { motion } from "framer-motion"
const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const currentPath = useLocation().pathname

  return (
    <div className="navbar">
      <div className="navbar-brand">
        <div
          role="button"
          tabIndex={0}
          className={`navbar-burger ${menu ? "is-active" : ""}`}
          onClick={() => setMenu(!menu)}
          onKeyDown={() => {}}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`navbar-menu ${menu ? "is-active" : ""}`}>
        <div className="navbar-end">
          <Link to="/" className="navbar-item is-uppercase">
            <motion.span>Home</motion.span>
            {currentPath === "/" && (
              <motion.div
                layoutId="underline"
                className="highlight-white highlight-helper"
                transition={{ duration: 0.3 }}
              />
            )}
          </Link>
          <Link to="/portfolio" className="navbar-item is-uppercase">
            <motion.span>Work</motion.span>
            {currentPath === "/portfolio" && (
              <motion.div
                layoutId="underline"
                className="highlight-white highlight-helper"
                transition={{ duration: 0.3 }}
              />
            )}
          </Link>
          <Link to="/blog" className="navbar-item is-uppercase">
            <motion.span>Blog</motion.span>
            {currentPath === "/blog" && (
              <motion.div
                layoutId="underline"
                className="highlight-white highlight-helper"
                transition={{ duration: 0.3 }}
              />
            )}
          </Link>
          <Link to="/uses" className="navbar-item is-uppercase">
            <motion.span>Uses</motion.span>
            {currentPath === "/uses" && (
              <motion.div
                layoutId="underline"
                className="highlight-white highlight-helper"
                transition={{ duration: 0.3 }}
              />
            )}
          </Link>
          <Link to="/contact" className="navbar-item is-uppercase">
            <motion.span>Connect</motion.span>
            {currentPath === "/contact" && (
              <motion.div
                layoutId="underline"
                className="highlight-white highlight-helper"
                transition={{ duration: 0.3 }}
              />
            )}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
