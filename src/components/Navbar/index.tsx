import { Box, Container, Flex } from '@chakra-ui/react'
import Logo from 'components/Logo'
import React from 'react'
import NavLinks from './NavLinks'

const Navbar = () => {
  return (
    <Box bgColor='purple.600' color='white'>
      <Container maxW='container.lg' py={4} fontSize='1.125rem'>
        <Flex justify='space-between'>
          <Logo />
          <NavLinks />
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
