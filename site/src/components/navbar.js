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
          <Link to="/" className="navbar-item is-uppercase">
            Home
          </Link>
          <Link to="/portfolio" className="navbar-item is-uppercase">
            Work
          </Link>
          <Link to="/blog" className="navbar-item is-uppercase">
            Blog
          </Link>
          <Link to="/contact" className="navbar-item is-uppercase">
            Connect
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
