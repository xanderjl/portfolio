import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        color: "gray.800",
        fontSize: {
          base: "md",
          sm: "lg",
          md: "lg",
        },
        background: "#FDFEFF",
        backgroundImage: `radial-gradient(#EDEEF0, 1px, transparent 0)`,
        backgroundSize: "24px 24px",
        backgroundPosition: "-14px -14px",
        zIndex: -1,
        _after: {
          display: ["none", "none", "block"],
          position: "absolute",
          right: 0,
          top: 0,
          zIndex: -2,
          minW: "50vw",
          minH: "100%",
          bg: "blue.100",
          content: "''",
        },
      },
    },
  },
  colors: {
    blue: {
      50: "#e9f7ff",
      100: "#c9ebff",
      200: "#a6dfff",
      300: "#86d4ff",
      400: "#76c9ff",
      500: "#70bfff",
      600: "#6ab0f6",
      700: "#629ce0",
      800: "#5b8bcc",
      900: "#4d6aa8",
    },
    orange: {
      50: "#fbf0ec",
      100: "#ffddc9",
      200: "#ffc7a2",
      300: "#ffb277",
      400: "#ffa152",
      500: "#ff932d",
      600: "#ff8b28",
      700: "#f78323",
      800: "#e97b21",
      900: "#d16c1a",
    },
    cyan: {
      50: "#e9fffd",
      100: "#c9fff8",
      200: "#a9fff3",
      300: "#8dfeed",
      400: "#7bf9e5",
      500: "#76f3dc",
      600: "#6fe2cc",
      700: "#66cfb8",
      800: "#60bda8",
      900: "#559d88",
    },
    purple: {
      50: "#eaedff",
      100: "#c9d0ff",
      200: "#a6b3f8",
      300: "#8494ed",
      400: "#6a7ae4",
      500: "#5162db",
      600: "#4b59cf",
      700: "#424ec2",
      800: "#3b43b6",
      900: "#2f309f",
    },
    fuschia: {
      50: "#ffeaf7",
      100: "#ffc9eb",
      200: "#ffa7de",
      300: "#ff83ce",
      400: "#ff69be",
      500: "#ff54ae",
      600: "#fe50a7",
      700: "#e54b9e",
      800: "#ce4897",
      900: "#a44089",
    },
  },
  components: {
    Link: {
      baseStyle: {
        textDecor: "none",
        _hover: {
          textDecor: "none",
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
