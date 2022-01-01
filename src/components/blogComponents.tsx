import { ReactNode } from 'react'
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

interface Props {
  className?: string
  children?: ReactNode | ReactNode[]
  src?: string
  alt?: string
  href?: string
  theme?: any
}

interface CodeBlock extends Props {
  children: string
}

const BlogComponents: any = {
  code: ({ className, children }: CodeBlock) => (
    <CodeBlock className={className}>{children}</CodeBlock>
  ),
  inlineCode: ({ children }: Props) => <InlineCode>{children}</InlineCode>,
  h1: ({ children }: Props) => (
    <Heading size='xl' fontFamily='body' pb='1rem'>
      {children}
    </Heading>
  ),
  h2: ({ children }: Props) => (
    <Heading size='lg' fontFamily='body' pb='1rem'>
      {children}
    </Heading>
  ),
  h3: ({ children }: Props) => (
    <Heading size='md' fontFamily='body' pb='1rem'>
      {children}
    </Heading>
  ),
  h4: ({ children }: Props) => (
    <Heading size='md' fontFamily='body' pb='1rem'>
      {children}
    </Heading>
  ),
  h5: ({ children }: Props) => (
    <Heading size='md' fontFamily='body' pb='1rem'>
      {children}
    </Heading>
  ),
  h6: ({ children }: Props) => (
    <Heading size='sm' fontFamily='body' pb='1rem'>
      {children}
    </Heading>
  ),
  p: ({ children }: Props) => <Text pb='1rem'>{children}</Text>,
  a: ({ href, children, theme }: Props) => {
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
  ul: ({ children }: Props) => (
    <UnorderedList pb='1rem'>{children}</UnorderedList>
  ),
  ol: ({ children }: Props) => <OrderedList pb='1rem'>{children}</OrderedList>,
  li: ({ children }: Props) => <ListItem>{children}</ListItem>,
  blockquote: ({ children }: Props) => <BlockQuote>{children}</BlockQuote>,
  img: ({ src, alt }: Props) => (
    <Box maxW='max-content' m='0 auto' pb={4}>
      <Image src={src} alt={alt} py={2} />
      <Text fontSize='sm' color='gray.400'>
        ({alt}: Props)
      </Text>
    </Box>
  )
}

export default BlogComponents
