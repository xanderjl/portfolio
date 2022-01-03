import { ReactElement, ReactNode } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import { NextSeo } from 'next-seo'
import useOgImage from 'hooks/useOgImage'

interface Props {
  title?: string
  metadescription?: string
  children?: ReactNode | ReactNode[] | string
}

const Layout = ({ title, metadescription, children }: Props): ReactElement => {
  const ogImage = useOgImage(`${title ? `${title} | ` : ``}Xander Low`)

  return (
    <>
      <NextSeo
        title={`${title ? `${title} | ` : ``}Xander Low`}
        description={metadescription}
        openGraph={{
          title: title,
          description: metadescription,
          images: [
            {
              url: ogImage,
              width: 800,
              height: 418,
              alt: title
            }
          ]
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
