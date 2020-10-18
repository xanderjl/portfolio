import React from "react"
import PropTypes from "prop-types"
import { Box, Flex, Container } from "@chakra-ui/core"
import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <Flex direction="column" minH="100vh" overflowX="hidden" bg="transparent">
      {/* <Box
        minW="50vw"
        minH="100vh"
        bg="blue.100"
        position="fixed"
        right={0}
        zIndex={-1}
      /> */}
      <Box flex={1}>
        <Navbar />
        <Container maxW="xl">{children}</Container>
      </Box>
      <Footer />
    </Flex>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
