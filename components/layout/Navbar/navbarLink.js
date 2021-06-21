import React from "react"
import PropTypes from "prop-types"
import { Link as NextLink } from "next/link"
import { useRouter } from "next/router"
import { useTheme, Box, Link, Text } from "@chakra-ui/react"

const NavbarLink = ({ children, href }) => {
  const router = useRouter()
  const theme = useTheme()
  return (
    <Box
      display="block"
      w={["100%", "100%", "max-content"]}
      textTransform="uppercase"
    >
      <Link
        as={NextLink}
        href={href}
        display="inherit"
        w="inherit"
        p={{ base: "0.75rem", md: "0.25rem 0.5rem" }}
        _hover={{ bg: "primary.500", textDecor: "none", borderRadius: "4px" }}
      >
        <Text
          as="span"
          bg={
            router.pathname.includes(href) &&
            href !== "/" &&
            `linear-gradient(to top, ${theme.colors.primary[500]} 50%, transparent 50% )`
          }
        >
          {children}
        </Text>
      </Link>
    </Box>
  )
}

NavbarLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.node.isRequired,
}

export default NavbarLink
