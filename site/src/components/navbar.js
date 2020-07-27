import React, { useState } from "react"
import { Link } from "gatsby"
import TransitionLink from "gatsby-plugin-transition-link"

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  return (
    <div className="navbar">
      <div className="navbar-brand">
        <div className="navbar-burger" onClick={() => setMenu(!menu)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`navbar-menu ${menu ? "is-active" : ""}`}>
        <div className="navbar-end">
          <div className="navbar-item">
            <Link
              to="/"
              className="is-uppercase"
              activeClassName="highlight-white"
            >
              Home
            </Link>
          </div>
          <div className="navbar-item">
            <Link
              to="/portfolio"
              className="is-uppercase"
              activeClassName="highlight-white"
            >
              Work
            </Link>
          </div>
          <div className="navbar-item">
            <Link
              to="/blog"
              className="is-uppercase"
              activeClassName="highlight-white"
            >
              Blog
            </Link>
          </div>
          <div className="navbar-item">
            <Link
              to="/contact"
              className="is-uppercase"
              activeClassName="highlight-white"
            >
              Connect
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
