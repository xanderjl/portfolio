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
      templateColumns={`repeat(${links.length}, fit-content(100%))`}
      gap={4}
    >
      {links.map((link, i) => {
        const { href, title } = link
        return (
          <Link
            key={i}
            href={href}
            bg={
              router.pathname.includes(href) && href !== '/'
                ? `linear-gradient(to top, ${theme.colors.primary[500]} 50%, transparent 50% )`
                : ''
            }
            textTransform='uppercase'
          >
            {title}
          </Link>
        )
      })}
    </Grid>
  )
}

export default NavLinks
