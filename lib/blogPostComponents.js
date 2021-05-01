import {
  Box,
  Heading,
  Image,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  theme
} from "@chakra-ui/react"
import CodeBlock from "../components/codeBlock"

export default {
  code: ({ className, children }) => (
    <Box pb="1rem">
      <CodeBlock className={className}>{children}</CodeBlock>
    </Box>
  ),
  h1: ({ children }) => (
    <Heading size="xl" fontFamily="body" pb="1rem">
      {children}
    </Heading>
  ),
  h2: ({ children }) => (
    <Heading size="lg" fontFamily="body" pb="1rem">
      {children}
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading size="md" fontFamily="body" pb="1rem">
      {children}
    </Heading>
  ),
  h4: ({ children }) => (
    <Heading size="md" fontFamily="body" pb="1rem">
      {children}
    </Heading>
  ),
  h5: ({ children }) => (
    <Heading size="md" fontFamily="body" pb="1rem">
      {children}
    </Heading>
  ),
  h6: ({ children }) => (
    <Heading size="sm" fontFamily="body" pb="1rem">
      {children}
    </Heading>
  ),
  p: ({ children }) => <Text pb="1rem">{children}</Text>,
  a: ({ href, children }) => (
    <Link
      href={href}
      isExternal
      bg={`linear-gradient(to top, ${theme.colors.blue[100]} 50%, transparent 50% )`}
      _hover={{
        bg: `linear-gradient(to top, ${theme.colors.blue[200]} 50%, transparent 50% )`,
      }}
    >
      {children}
    </Link>
  ),
  ul: ({ children }) => <UnorderedList pb="1rem">{children}</UnorderedList>,
  ol: ({ children }) => <OrderedList pb="1rem">{children}</OrderedList>,
  li: ({ children }) => <ListItem>{children}</ListItem>,
  blockquote: ({ children }) => (
    <Text
      as="blockquote"
      maxW="max-content"
      bg="gray.50"
      borderRadius={4}
      borderLeft="4px solid"
      borderLeftColor="blue.100"
      p="0.5rem 1rem"
      mb="1rem"
    >
      {children}
    </Text>
  ),
  img: ({ src, alt }) => (
    <Box maxW="max-content" m="0 auto">
      <Image src={src} alt={alt} p="0.5rem 0" />
      <Text color="gray.400">({alt})</Text>
    </Box>
  ),
}
