import { Flex, Heading, Text } from "@chakra-ui/react"
import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout title="404: Not found">
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      p="3rem 1.25rem"
      h="70vh"
    >
      <Heading fontFamily="body">Not Found</Heading>
      <Text>
        You've tried to visit a page that doesn't exist. Nice try though!
      </Text>
    </Flex>
  </Layout>
)

export default NotFoundPage
