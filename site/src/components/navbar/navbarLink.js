import React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"
import { Box, Link } from "@chakra-ui/core"

const NavbarLink = ({ children, to }) => {
  return (
    <Box
      display="block"
      w={["100%", "100%", "max-content"]}
      textTransform="uppercase"
      _hover={{
        bg: "rgba(0,0,0,0.035)",
        borderRadius: "4px",
      }}
    >
      <Link
        display="inherit"
        w="inherit"
        p={{ base: "0.75rem", md: "0.25rem 0.5rem" }}
        as={GatsbyLink}
        to={to}
        _hover={{ textDecor: "none" }}
      >
        {children}
      </Link>
    </Box>
  )
}

NavbarLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.node.isRequired,
}

export default NavbarLink
