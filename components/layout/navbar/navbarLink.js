import React from "react"
import PropTypes from "prop-types"
import { Link as NextLink } from "next/link"
import { useRouter } from "next/router"
import { theme, Box, Link, Text } from "@chakra-ui/react"

const NavbarLink = ({ children, href, isAlpha = false }) => {
  const router = useRouter()

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
        _hover={{
          base: { bg: "blue.100", textDecor: "none", borderRadius: "4px" },
          md: { bg: "transparent", borderRadius: 0 },
        }}
      >
        <Text
          as="span"
          bg={
            router.pathname.includes(href) &&
            href !== "/" && {
              base: `linear-gradient(to top, ${theme.colors.blue[200]} 50%, transparent 50% )`,
              md: `linear-gradient(to top, ${
                isAlpha ? theme.colors.blue[300] : theme.colors.white
              } 50%, transparent 50% )`,
            }
          }
          _hover={{
            bg: {
              base: `linear-gradient(to top, ${theme.colors.blue[200]} 50%, transparent 50% )`,
              md: `linear-gradient(to top, ${
                isAlpha ? theme.colors.blue[300] : theme.colors.white
              } 50%, transparent 50% )`,
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
  href: PropTypes.node.isRequired,
}

export default NavbarLink
