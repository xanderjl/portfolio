import React from "react"
import { NextSeo } from "next-seo"
import getShareImage from "@jlengstorf/get-share-image"
import { Box, Flex } from "@chakra-ui/react"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({
  title,
  metadescription,
  children,
  navFixed = false,
  navAlpha = false,
}) => {
  const shareCard = getShareImage({
    title: `${title && `${title} | `}Xander Low`,
    cloudName: `alexlow-dev`,
    imagePublicID: `share-card.jpg`,
    titleFont: `Lato`,
    textColor: `000000`,
    titleFontSize: 65,
    titleLeftOffset: 180,
    titleBottomOffset: 300,
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
        <Navbar isAlpha={navAlpha} isFixed={navFixed} />
        <Box
          flex={1}
          position={navFixed ? "relative" : "static"}
          top={navFixed && "72px"}
        >
          {children}
        </Box>
        <Footer />
      </Flex>
    </>
  )
}

export default Layout
