import { Container, Flex } from '@chakra-ui/react'
import React from 'react'
import NavLinks from './NavLinks'

const Navbar = () => {
  return (
    <Container maxW='container.lg'>
      <Flex justify='space-between'>
        <div>Logo</div>
        <NavLinks />
      </Flex>
    </Container>
  )
}

export default Navbar
