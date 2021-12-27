import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import theme from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo
        title='Xander Low'
        description='Xander is a front-end web developer focusing on implementing e-commerce solutions for small businesses on the Jamstack. He has been spending his spare time learning threejs to create unique experiences on the web.'
        openGraph={{
          type: 'website',
          locale: 'en_CA',
          title: 'Xander Low',
          description:
            'Xander is a front-end web developer focusing on implementing e-commerce solutions for small businesses on the Jamstack. He has been spending his spare time learning threejs to create unique experiences on the web.',
          url: 'https://www.xandydandy.com',
          site_name: 'Xander Low'
        }}
        twitter={{
          handle: '@XandyDandy',
          cardType: 'summary_large_image'
        }}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
