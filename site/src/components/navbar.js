import React, { useState } from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import { Box, Flex, Link as ChakraLink, Container } from "@chakra-ui/core"
import { LogoIcon } from "./icons"
import { Squash as Hamburger } from "hamburger-react"
const Navbar = () => {
  const [menu, setMenu] = useState(false)

  return (
    <Flex as="nav" bg="transparent" color="gray.700">
      <Container
        d="flex"
        flexDirection={{ base: "column", sm: "column", md: "row" }}
        p="0.5rem 1rem"
        alignItems="center"
        justifyContent="space-between"
        wrap="wrap"
        maxW="xl"
      >
        <Box
          d="flex"
          justifyContent="space-between"
          w={{ base: "100%", sm: "100%", md: "max-content" }}
        >
          <Link to="/">
            <LogoIcon boxSize="3rem" />
          </Link>
          <Box display={{ base: "block", md: "none" }}>
            <Hamburger toggled={menu} toggle={setMenu} />
          </Box>
        </Box>
        <Box
          display={{
            base: menu ? "flex" : "none",
            sm: menu ? "flex" : "none",
            md: "flex",
          }}
          flexDirection={{ base: "column", sm: "column", md: "row" }}
          w={{ base: "full", sm: "full", md: "auto" }}
          pt={{ base: "1rem", sm: "1rem", md: 0 }}
          alignItems={{ base: "flex-start", sm: "flex-start", md: "center" }}
          justifyContent={{ md: "flex-end" }}
          flexGrow={1}
        >
          <ChakraLink
            as="span"
            w={{ base: "100%", sm: "100%", md: "max-content" }}
            pl={{ base: 0, sm: 0, md: "1.5rem" }}
            pb={{ base: "1rem", sm: "1rem", md: 0 }}
            textTransform="uppercase"
          >
            <Link style={{ display: "block" }} to="/">
              Home
            </Link>
          </ChakraLink>
          <ChakraLink
            as="span"
            w={{ base: "100%", sm: "100%", md: "max-content" }}
            pl={{ base: 0, sm: 0, md: "1.5rem" }}
            pb={{ base: "1rem", sm: "1rem", md: 0 }}
            textTransform="uppercase"
          >
            <Link style={{ display: "block" }} to="/portfolio">
              Work
            </Link>
          </ChakraLink>
          <ChakraLink
            as="span"
            w={{ base: "100%", sm: "100%", md: "max-content" }}
            pl={{ base: 0, sm: 0, md: "1.5rem" }}
            pb={{ base: "1rem", sm: "1rem", md: 0 }}
            textTransform="uppercase"
          >
            <Link style={{ display: "block" }} to="/garden">
              Garden
            </Link>
          </ChakraLink>
          <ChakraLink
            as="span"
            w={{ base: "100%", sm: "100%", md: "max-content" }}
            pl={{ base: 0, sm: 0, md: "1.5rem" }}
            pb={{ base: "1rem", sm: "1rem", md: 0 }}
            textTransform="uppercase"
          >
            <Link style={{ display: "block" }} to="/uses">
              Uses
            </Link>
          </ChakraLink>
          <ChakraLink
            as="span"
            w={{ base: "100%", sm: "100%", md: "max-content" }}
            pl={{ base: 0, sm: 0, md: "1.5rem" }}
            pb={{ base: "1rem", sm: "1rem", md: 0 }}
            textTransform="uppercase"
          >
            <Link style={{ display: "block" }} to="/contact">
              Connect
            </Link>
          </ChakraLink>
        </Box>
      </Container>
    </Flex>
  )
}

export default Navbar
