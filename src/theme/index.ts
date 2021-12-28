import { extendTheme, theme as baseTheme, ThemeConfig } from '@chakra-ui/react'
import fonts from './fonts'
import colors from './colors'

const themeConfig: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const theme = extendTheme({ themeConfig, fonts, colors })

export default theme
