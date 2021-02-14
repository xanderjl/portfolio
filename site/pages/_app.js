import { AnimateSharedLayout } from "framer-motion"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "../lib/theme"
import "../styles/fonts.css"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </ChakraProvider>
  )
}

export default MyApp
