import React, { useState } from "react"
import { useLocation } from "@reach/router"
import { Link } from "gatsby"
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
          <Link
            to="/"
            className="navbar-item is-uppercase"
            onClick={() => setMenu(!menu)}
          >
            <span className={currentPath === "/" && "highlight-white"}>
              Home
            </span>
          </Link>
          <Link
            to="/portfolio"
            className="navbar-item is-uppercase"
            onClick={() => setMenu(!menu)}
          >
            <span className={currentPath === "/portfolio" && "highlight-white"}>
              Work
            </span>
          </Link>
          <Link
            to="/blog"
            className="navbar-item is-uppercase"
            onClick={() => setMenu(!menu)}
          >
            <span className={currentPath === "/blog" && "highlight-white"}>
              Blog
            </span>
          </Link>
          <Link
            to="/uses"
            className="navbar-item is-uppercase"
            onClick={() => setMenu(!menu)}
          >
            <span className={currentPath === "/uses" && "highlight-white"}>
              Uses
            </span>
          </Link>
          <Link
            to="/contact"
            className="navbar-item is-uppercase"
            onClick={() => setMenu(!menu)}
          >
            <span className={currentPath === "/contact" && "highlight-white"}>
              Connect
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
