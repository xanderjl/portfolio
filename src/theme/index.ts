import { extendTheme, theme as baseTheme } from '@chakra-ui/react'
import fonts from './fonts'
import colors from './colors'

const theme = extendTheme({
  fonts,
  colors
})

export default theme
