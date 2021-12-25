import React from 'react'
import NLink from 'next/link'
import { Grid, Link } from '@chakra-ui/react'
import links from './links'

const NavLinks = () => {
  return (
    <Grid templateColumns={`repeat(${links.length}, fit-content(100%))`} gap={4}>
      {links.map((link, i) => {
        const { href, title } = link
        return (
          <Link key={i} as={NLink} href={href}>
            {title}
          </Link>
        )
      })}
    </Grid>
  )
}

export default NavLinks
