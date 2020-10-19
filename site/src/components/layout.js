import React from "react"
import PropTypes from "prop-types"
import { Box, Flex } from "@chakra-ui/core"
import Navbar from "./navbar/navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <Flex direction="column" minH="100vh" overflowX="hidden" bg="transparent">
      <Box flex={1}>
        <Navbar />
        {children}
      </Box>
      <Footer />
    </Flex>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
