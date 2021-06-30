import React from "react"
import { Link as ChakraLink, Container, Flex } from "@chakra-ui/react"

const Footer = () => {
  return (
    <footer className="footer">
      <Container p="1.5rem 1rem" centerContent>
        <Flex direction="column" align="center">
          <ChakraLink
            className="is-relative"
            href="mailto:xander@xandydandy.com"
            pb="1rem"
            isExternal
          >
            xander@xandydandy.com
          </ChakraLink>
          <span>&copy; Xander Low {new Date().getFullYear()}</span>
        </Flex>
      </Container>
    </footer>
  )
}

export default Footer
