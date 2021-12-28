import { FC } from 'react'
import {
  Box,
  Heading,
  Image,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  useTheme
} from '@chakra-ui/react'
import BlockQuote from 'components/BlockQuote'
import CodeBlock from 'components/CodeBlock'
import InlineCode from 'components/InlineCode'

interface BlogComponents {
  code: FC<any>
  inlineCode: FC<any>
  h1: FC<any>
  h2: FC<any>
  h3: FC<any>
  h4: FC<any>
  h5: FC<any>
  h6: FC<any>
  p: FC<any>
  a: FC<any>
  ul: FC<any>
  ol: FC<any>
  li: FC<any>
  blockquote: FC<any>
  img: FC<any>
}

const BlogComponents: BlogComponents = {
  code: ({ className, children }) => (
    <CodeBlock className={className}>{children}</CodeBlock>
  ),
  inlineCode: ({ children }) => <InlineCode>{children}</InlineCode>,
  h1: ({ children }) => (
    <Heading size='xl' fontFamily='body' pb='1rem'>
      {children}
    </Heading>
  ),
  h2: ({ children }) => (
    <Heading size='lg' fontFamily='body' pb='1rem'>
      {children}
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading size='md' fontFamily='body' pb='1rem'>
      {children}
    </Heading>
  ),
  h4: ({ children }) => (
    <Heading size='md' fontFamily='body' pb='1rem'>
      {children}
    </Heading>
  ),
  h5: ({ children }) => (
    <Heading size='md' fontFamily='body' pb='1rem'>
      {children}
    </Heading>
  ),
  h6: ({ children }) => (
    <Heading size='sm' fontFamily='body' pb='1rem'>
      {children}
    </Heading>
  ),
  p: ({ children }) => <Text pb='1rem'>{children}</Text>,
  a: ({ href, children }) => {
    const theme = useTheme()
    return (
      <Link
        href={href}
        isExternal
        bg={`linear-gradient(to top, ${theme.colors.primary[400]} 50%, transparent 50% )`}
        _hover={{
          background: `linear-gradient(to top, ${theme.colors.primary[200]} 50%, transparent 50% )`
        }}
      >
        {children}
      </Link>
    )
  },
  ul: ({ children }) => <UnorderedList pb='1rem'>{children}</UnorderedList>,
  ol: ({ children }) => <OrderedList pb='1rem'>{children}</OrderedList>,
  li: ({ children }) => <ListItem>{children}</ListItem>,
  blockquote: ({ children }) => <BlockQuote>{children}</BlockQuote>,
  img: ({ src, alt }) => (
    <Box maxW='max-content' m='0 auto' pb={4}>
      <Image src={src} alt={alt} py={2} />
      <Text fontSize='sm' color='gray.400'>
        ({alt})
      </Text>
    </Box>
  )
}

export default BlogComponents
