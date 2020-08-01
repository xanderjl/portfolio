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
          className={`navbar-burger ${menu ? "is-active" : ""}`}
          onClick={() => setMenu(!menu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <motion.div
        className={`navbar-menu ${menu ? "is-active" : ""}`}
        onTap={{}}
        // initial={{ y: -200, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ duration: 0.5, type: "spring", stiffness: 60 }}
      >
        <div className="navbar-end">
          <Link to="/" className="navbar-item is-uppercase">
            <span className={currentPath === "/" ? "highlight-white" : ""}>
              Home
            </span>
          </Link>
          <Link to="/portfolio" className="navbar-item is-uppercase">
            <span
              className={currentPath === "/portfolio" ? "highlight-white" : ""}
            >
              Work
            </span>
          </Link>
          <Link to="/blog" className="navbar-item is-uppercase">
            <span className={currentPath === "/blog" ? "highlight-white" : ""}>
              Blog
            </span>
          </Link>
          <Link to="/uses" className="navbar-item is-uppercase">
            <span className={currentPath === "/uses" ? "highlight-white" : ""}>
              Uses
            </span>
          </Link>
          <Link to="/contact" className="navbar-item is-uppercase">
            <span
              className={currentPath === "/contact" ? "highlight-white" : ""}
            >
              Connect
            </span>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default Navbar
