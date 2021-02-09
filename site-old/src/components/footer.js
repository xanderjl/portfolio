import React from "react"
import { Link as ChakraLink, Container, Flex } from "@chakra-ui/react"

const Footer = () => {
  return (
    <footer className="footer">
      <Container p="1.5rem 1rem" centerContent>
        <Flex direction="column">
          <ChakraLink
            className="is-relative"
            href="mailto:me@alexlow.dev"
            pb="1rem"
            isExternal
          >
            me@alexlow.dev
          </ChakraLink>
          <span>&copy; Alex Low 2020</span>
        </Flex>
      </Container>
    </footer>
  )
}

export default Footer
