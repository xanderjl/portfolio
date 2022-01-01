import { LinkProps as ChLinkProps } from '@chakra-ui/react'
import { UrlObject } from 'url'

type Url = string | UrlObject

interface LinkProps extends Omit<ChLinkProps, 'href'> {
  href: Url
}

export default LinkProps
