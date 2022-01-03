import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import theme from '../theme'
import { SelectedTagsProvider } from 'context/selectedTagsContext'
import useOgImage from 'hooks/useOgImage'

function MyApp({ Component, pageProps }: AppProps) {
  const ogImage = useOgImage('Xander Low')

  return (
    <ChakraProvider theme={theme}>
      <SelectedTagsProvider>
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
            site_name: 'Xander Low',
            images: [
              {
                url: ogImage,
                width: 800,
                height: 418,
                alt: "Xander's Personal Site"
              }
            ]
          }}
          twitter={{
            handle: '@XandyDandy',
            cardType: 'summary_large_image'
          }}
        />
        <Component {...pageProps} />
      </SelectedTagsProvider>
    </ChakraProvider>
  )
}

export default MyApp
