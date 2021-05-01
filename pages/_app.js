import { AnimateSharedLayout } from "framer-motion"
import { ChakraProvider } from "@chakra-ui/react"
import { DefaultSeo } from "next-seo"
import getShareImage from "@jlengstorf/get-share-image"
import theme from "../lib/theme"

const shareCard = getShareImage({
  title: "Xander Low",
  cloudName: `alexlow-dev`,
  imagePublicID: `share-card.jpg`,
  titleFont: `Poppins`,
  textColor: `0c0e0f`,
  titleFontSize: 65,
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AnimateSharedLayout>
        <DefaultSeo
          title="Xander Low"
          description="Xander Low is a front end web developer focusing on the Jamstack, based in London, ON."
          openGraph={{
            type: "website",
            locale: "en_CA",
            title: "Xander Low",
            description:
              "Xander Low is a front end web developer focusing on the Jamstack, based in London, ON.",
            url: "https://alexlow.dev",
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
      </AnimateSharedLayout>
    </ChakraProvider>
  )
}

export default MyApp