import { extendTheme } from "@chakra-ui/core"

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        bg: "gray.50",
        color: "gray.800",
        fontSize: {
          base: "md",
          sm: "lg",
          md: "lg",
        },
      },
    },
  },
  fonts: {
    heading: "Playfair Display SC",
    body: "Poppins",
  },
  fontSizes: {
    "7xl": "5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
})

export default theme
