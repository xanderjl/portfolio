import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import fonts from './fonts'
import colors from './colors'
import components from './components'
import styles from './styles'

const themeConfig: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const theme = extendTheme({
  themeConfig,
  fonts,
  colors,
  components,
  styles
})

export default theme
