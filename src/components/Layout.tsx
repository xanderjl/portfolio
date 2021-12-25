import { ReactElement } from 'react'
import { Container, Flex } from '@chakra-ui/react'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'

interface Props {
  children?: ReactElement | ReactElement[] | string
}

const Layout = ({ children }: Props): ReactElement => {
  return (
    <Flex direction='column' minH='100vh'>
      <Navbar />
      <Container flex={1} maxW='container.lg'>
        {children}
      </Container>
      <Footer />
    </Flex>
  )
}

export default Layout
