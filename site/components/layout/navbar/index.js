import React, { useState } from "react"
import { Link as NextLink } from "next/link"
import { Box, Flex, Container, Link } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { LogoIcon } from "../icons"
import { Squash as Hamburger } from "hamburger-react"
import NavbarLink from "./navbarLink"

const MotionBox = motion.custom(Box)
const MotionNavbarLink = motion.custom(NavbarLink)

const parent = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const children = {
  hidden: { x: 100 },
  visible: {
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
}

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
          <Link as={NextLink} href="/">
            <LogoIcon boxSize="3rem" />
          </Link>
          <Box display={{ base: "block", md: "none" }}>
            <Hamburger toggled={menu} toggle={setMenu} />
          </Box>
        </Box>
        <MotionBox
          display={{ base: menu ? "flex" : "none", md: "flex" }}
          flexDirection={{ base: "column", sm: "column", md: "row" }}
          w={{ base: "full", sm: "full", md: "auto" }}
          pt={{ base: "1rem", sm: "1rem", md: 0 }}
          alignItems={{ base: "flex-start", sm: "flex-start", md: "center" }}
          justifyContent={{ md: "flex-end" }}
          flexGrow={1}
          variants={parent}
          inital="hidden"
          animate="visible"
        >
          <MotionNavbarLink variants={children} href="/">
            Home
          </MotionNavbarLink>
          <MotionNavbarLink variants={children} href="/portfolio">
            Work
          </MotionNavbarLink>
          <MotionNavbarLink variants={children} href="/garden">
            Garden
          </MotionNavbarLink>
          <MotionNavbarLink variants={children} href="/uses">
            Uses
          </MotionNavbarLink>
          <MotionNavbarLink variants={children} href="/contact">
            Connect
          </MotionNavbarLink>
        </MotionBox>
      </Container>
    </Flex>
  )
}

export default Navbar
