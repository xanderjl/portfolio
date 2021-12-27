import { Link as ChLink, LinkProps } from '@chakra-ui/react'
import NLink, { LinkProps as NLinkProps } from 'next/link'

const Link = ({ children, href, ...rest }: NLinkProps & LinkProps) => {
  return (
    <NLink href={href} passHref>
      {/* @ts-ignore */}
      <ChLink {...rest}>{children}</ChLink>
    </NLink>
  )
}

export default Link
