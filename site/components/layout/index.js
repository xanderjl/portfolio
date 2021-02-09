import React from "react"
import Head from "next/head"
import { Box, Flex } from "@chakra-ui/react"
import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ title, metadescription, children }) => {
  return (
    <>
      <Head>
        <title>{title && `${title} | `}Alex Low</title>
        <meta
          name="description"
          content={
            metadescription
              ? metadescription
              : "Alex Low is a front end web developer focusing on the Jamstack, based in London, ON."
          }
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={
            metadescription
              ? metadescription
              : "Alex Low is a front end web developer focusing on the Jamstack, based in London, ON."
          }
        />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:creator" content={config.social.twitter} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
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
