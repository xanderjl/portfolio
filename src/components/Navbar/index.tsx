import { useState } from 'react'
import { Box, Container, Flex, forwardRef } from '@chakra-ui/react'
import Logo from 'components/Logo'
import { motion, Variants } from 'framer-motion'
import NavLinks from './NavLinks'
import { Squash as Hamburger } from 'hamburger-react'
import Link from 'components/Link'

interface NavbarProps {
  isAlpha?: boolean
  isFixed?: boolean
}

const MotionBox = motion(
  forwardRef((props, ref) => {
    return <Box ref={ref} {...props} />
  })
)

const variants: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const Navbar = ({ isAlpha = false, isFixed = false }: NavbarProps) => {
  const [menu, setMenu] = useState<boolean>(false)

  return (
    <Flex
      as='nav'
      w='100%'
      position={isFixed ? 'fixed' : 'static'}
      bg={isAlpha ? 'black' : 'transparent'}
      color={isAlpha ? 'white' : 'gray.700'}
      zIndex={10}
    >
      <Container
        maxW='container.lg'
        d='flex'
        flexDirection={{ base: 'column', sm: 'column', md: 'row' }}
        p='0.5rem 1.25rem'
        alignItems='center'
        justifyContent='space-between'
        wrap='wrap'
      >
        <Flex
          justifyContent='space-between'
          w={{ base: '100%', sm: '100%', md: 'max-content' }}
        >
          <Link href='/'>
            <Logo />
          </Link>
          <Box display={{ base: 'block', md: 'none' }}>
            <Hamburger toggled={menu} toggle={setMenu} />
          </Box>
        </Flex>
        <MotionBox
          display={{ base: menu ? 'flex' : 'none', md: 'flex' }}
          flexDirection={{ base: 'column', sm: 'column', md: 'row' }}
          w={{ base: 'full', sm: 'full', md: 'auto' }}
          pt={{ base: '1rem', sm: '1rem', md: 0 }}
          alignItems={{ base: 'flex-start', sm: 'flex-start', md: 'center' }}
          justifyContent={{ md: 'flex-end' }}
          flexGrow={1}
          variants={variants}
          inital='hidden'
          animate='visible'
        >
          <NavLinks />
        </MotionBox>
      </Container>
    </Flex>
  )
}

export default Navbar
