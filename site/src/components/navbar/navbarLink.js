import React from "react"
import PropTypes from "prop-types"
import { useLocation } from "@reach/router"
import { Link as GatsbyLink } from "gatsby"
import { theme, Box, Link, Text } from "@chakra-ui/react"

const NavbarLink = ({ children, to }) => {
  const location = useLocation()

  return (
    <Box
      display="block"
      w={["100%", "100%", "max-content"]}
      textTransform="uppercase"
    >
      <Link
        display="inherit"
        w="inherit"
        p={{ base: "0.75rem", md: "0.25rem 0.5rem" }}
        as={GatsbyLink}
        to={to}
        _hover={{
          base: { bg: "blue.100", textDecor: "none", borderRadius: "4px" },
          md: { bg: "transparent", borderRadius: 0 },
        }}
      >
        <Text
          as="span"
          bg={
            location.pathname === to && {
              base: `linear-gradient(to top, ${theme.colors.blue[100]} 50%, transparent 50% )`,
              md: `linear-gradient(to top, ${theme.colors.white} 50%, transparent 50% )`,
            }
          }
          _hover={{
            bg: {
              base: `linear-gradient(to top, ${theme.colors.blue[100]} 50%, transparent 50% )`,
              md: `linear-gradient(to top, ${theme.colors.white} 50%, transparent 50% )`,
            },
          }}
        >
          {children}
        </Text>
      </Link>
    </Box>
  )
}

NavbarLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.node.isRequired,
}

export default NavbarLink
