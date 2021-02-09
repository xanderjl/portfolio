import React from "react"
import Head from "next/head"
import { Box, Flex } from "@chakra-ui/react"
import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ title, metadescription, children }) => {
  return (
    <>
      <Head>
        <html lang="en" />
        <title>{title && `${title} | `}Alex Low</title>
        <meta
          name="description"
          content={
            metadescription
              ? metadescription
              : "Alex Low is a front end web developer focusing on the Jamstack, based in London, ON."
          }
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Flex direction="column" minH="100vh" overflowX="hidden" bg="transparent">
        <Box flex={1}>
          <Navbar />
          {children}
        </Box>
        <Footer />
      </Flex>
    </>
  )
}

export default Layout
