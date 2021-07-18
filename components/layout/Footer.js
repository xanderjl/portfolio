import { Link as ChakraLink, Container, Flex, Box } from "@chakra-ui/react"

const Footer = () => {
  return (
    <Box as="footer">
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
          <span>
            <span onClick={() => setNana(!nana)}>&copy;</span> Xander Low{" "}
            {new Date().getFullYear()}
          </span>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
