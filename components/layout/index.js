import React from "react"
import { NextSeo } from "next-seo"
import getShareImage from "@jlengstorf/get-share-image"
import { Box, Flex } from "@chakra-ui/react"
import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ title, metadescription, children }) => {
  const shareCard = getShareImage({
    title: `${title && `${title} | `}Xander Low`,
    cloudName: `alexlow-dev`,
    imagePublicID: `share-card.jpg`,
    titleFont: `Poppins`,
    textColor: `0c0e0f`,
    titleFontSize: 80,
  })

  return (
    <>
      <NextSeo
        title={`${title && `${title} | `}Xander Low`}
        description={metadescription && metadescription}
        openGraph={{
          title: title,
          description: metadescription,
          images: [
            {
              url: shareCard,
              width: 800,
              height: 418,
              alt: title,
            },
          ],
        }}
      />
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
