import React, { useState } from "react"
import { Link as NextLink } from "next/link"
import { Box, Flex, Container, Link } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { LogoIcon } from "../icons"
import { Squash as Hamburger } from "hamburger-react"
import NavbarLink from "./navbarLink"
import navRoutes from "@lib/navRoutes.json"

const MotionBox = motion(Box)
const MotionNavbarLink = motion(NavbarLink)

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

const Navbar = ({ isAlpha = false, isFixed = false }) => {
  const [menu, setMenu] = useState(false)

  return (
    <Flex
      as="nav"
      w="100%"
      position={isFixed ? "fixed" : "static"}
      bg={isAlpha ? "blackAlpha.900" : "transparent"}
      color={isAlpha ? "white" : "gray.700"}
      zIndex={10}
    >
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
          {navRoutes.map((route, i) => {
            const { title, slug } = route
            return (
              <MotionNavbarLink
                key={i}
                variants={children}
                href={slug}
                isAlpha={isAlpha}
              >
                {title}
              </MotionNavbarLink>
            )
          })}
        </MotionBox>
      </Container>
    </Flex>
  )
}

export default Navbar
