import { ReactElement } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import { NextSeo } from 'next-seo'

interface Props {
  title?: string
  metadescription?: string
  children?: ReactElement | ReactElement[] | string
}

const Layout = ({ title, metadescription, children }: Props): ReactElement => {
  return (
    <>
      <NextSeo
        title={`${title ? `${title} | ` : ``}Xander Low`}
        description={metadescription}
        openGraph={{
          title: title,
          description: metadescription
        }}
      />
      <Flex direction='column' minH='100vh'>
        <Navbar />
        <Box flex={1}>{children}</Box>
        <Footer />
      </Flex>
    </>
  )
}

export default Layout
