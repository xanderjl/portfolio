import { Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Flex direction='column' align='center'>
      <Link href='mailto:xander@xandydandy.com'>xander@xandydandy.com</Link>
      <Text>&copy; Xander Low {new Date().getFullYear()}</Text>
    </Flex>
  )
}

export default Footer
