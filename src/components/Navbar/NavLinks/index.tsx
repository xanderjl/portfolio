import React from 'react'
import Link from 'components/Link'
import { Grid, useTheme } from '@chakra-ui/react'
import links from './links'
import { useRouter } from 'next/router'

const NavLinks = () => {
  const router = useRouter()
  const theme = useTheme()

  return (
    <Grid
      templateColumns={{
        sm: '1fr',
        md: `repeat(${links.length}, fit-content(100%))`
      }}
      gap={4}
    >
      {links.map((link, i) => {
        const { href, title } = link
        return (
          <Link
            key={i}
            href={href}
            maxW='max-content'
            px={1}
            bg={
              router.pathname.includes(href) && href !== '/'
                ? `linear-gradient(to top, ${theme.colors.primary[500]} 50%, transparent 50% )`
                : ''
            }
            textTransform='uppercase'
            _hover={{
              bg: 'primary.500',
              textDecor: 'none',
              borderRadius: '4px'
            }}
          >
            {title}
          </Link>
        )
      })}
    </Grid>
  )
}

export default NavLinks
