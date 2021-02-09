import React, { useState } from "react"
import { Link } from "gatsby"
import { Box, Flex, Container } from "@chakra-ui/react"
import { LogoIcon } from "../icons"
import { Squash as Hamburger } from "hamburger-react"
import NavbarLink from "./navbarLink"
const Navbar = () => {
  const [menu, setMenu] = useState(false)

  return (
    <Flex as="nav" bg="transparent" color="gray.700">
      <Container
        maxW="xl"
        d="flex"
        flexDirection={{ base: "column", sm: "column", md: "row" }}
        p="0.5rem 1.25rem"
        alignItems="center"
        justifyContent="space-between"
        wrap="wrap"
      >
        <Box
          d="flex"
          justifyContent="space-between"
          w={{ base: "100%", sm: "100%", md: "max-content" }}
        >
          <Link styles={{ width: "inherit", display: "inherit" }} to="/">
            <LogoIcon boxSize="3rem" />
          </Link>
          <Box display={{ base: "block", md: "none" }}>
            <Hamburger toggled={menu} toggle={setMenu} />
          </Box>
        </Box>
        <Box
          display={{ base: menu ? "flex" : "none", md: "flex" }}
          flexDirection={{ base: "column", sm: "column", md: "row" }}
          w={{ base: "full", sm: "full", md: "auto" }}
          pt={{ base: "1rem", sm: "1rem", md: 0 }}
          alignItems={{ base: "flex-start", sm: "flex-start", md: "center" }}
          justifyContent={{ md: "flex-end" }}
          flexGrow={1}
        >
          <NavbarLink to="/">Home</NavbarLink>
          <NavbarLink to="/portfolio">Work</NavbarLink>
          <NavbarLink to="/garden">Garden</NavbarLink>
          <NavbarLink to="/uses">Uses</NavbarLink>
          <NavbarLink to="/contact">Connect</NavbarLink>
        </Box>
      </Container>
    </Flex>
  )
}

export default Navbar
