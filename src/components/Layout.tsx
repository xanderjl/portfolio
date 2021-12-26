import { ReactElement } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'

interface Props {
  children?: ReactElement | ReactElement[] | string
}

const Layout = ({ children }: Props): ReactElement => {
  return (
    <Flex direction='column' minH='100vh'>
      <Navbar />
      <Box flex={1}>{children}</Box>
      <Footer />
    </Flex>
  )
}

export default Layout
