import { AnimateSharedLayout } from "framer-motion"
import { ChakraProvider } from "@chakra-ui/react"
import { DefaultSeo } from "next-seo"
import getShareImage from "@jlengstorf/get-share-image"
import theme from "@lib/chakra/theme"
import { SelectedTagsProvider } from "@context/selectedTagsContext"

const shareCard = getShareImage({
  title: "Xander Low",
  cloudName: `alexlow-dev`,
  imagePublicID: `share-card.jpg`,
  titleFont: `Lato`,
  textColor: `000000`,
  titleFontSize: 65,
  titleLeftOffset: 180,
  titleBottomOffset: 300,
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AnimateSharedLayout>
        <SelectedTagsProvider>
          <DefaultSeo
            title="Xander Low"
            description="Xander is a front-end web developer focusing on implementing e-commerce solutions for small businesses on the Jamstack. He has been spending his spare time learning threejs to create unique experiences on the web."
            openGraph={{
              type: "website",
              locale: "en_CA",
              title: "Xander Low",
              description:
                "Xander is a front-end web developer focusing on implementing e-commerce solutions for small businesses on the Jamstack. He has been spending his spare time learning threejs to create unique experiences on the web.",
              url: "https://www.xandydandy.com",
              site_name: "Xander Low",
              images: [
                {
                  url: shareCard,
                  width: 800,
                  height: 418,
                  alt: "Xander's Personal Site",
                },
              ],
            }}
            twitter={{
              handle: "@XandyDandy",
              cardType: "summary_large_image",
            }}
          />
          <Component {...pageProps} />
        </SelectedTagsProvider>
      </AnimateSharedLayout>
    </ChakraProvider>
  )
}

export default MyApp
