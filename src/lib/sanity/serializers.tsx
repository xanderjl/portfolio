import {
  useTheme,
  Heading,
  Text,
  Image,
  List,
  ListItem
} from '@chakra-ui/react'
import Link from 'components/Link'
import urlBuilder from '@sanity/image-url'
import CodeBlock from 'components/CodeBlock'
import BlockQuote from 'components/BlockQuote'
import { SanityBlock } from 'sanity-codegen/types'

const serializers = {
  types: {
    block: (props: SanityBlock) => {
      const { style = 'normal' } = props.node

      if (/^h\d/.test(style)) {
        return (
          <Heading as={style} fontFamily='body' fontSize='xl' pb='0.5rem'>
            {props.children}
          </Heading>
        )
      }

      if (style === 'blockquote') {
        return <BlockQuote>{props.children}</BlockQuote>
      }
      return <Text pb='1rem'>{props.children}</Text>
    },
    blockImage: ({ node }: SanityBlock) => {
      const { image, alt } = node
      const urlFor = (src: string) =>
        urlBuilder({
          projectId: 'akwcuf3t',
          dataset: 'production'
        }).image(src)

      return (
        <Image
          src={urlFor(image) as unknown as string}
          alt={alt}
          p='1.25rem 0 2.5rem 0'
          m='0 auto'
        />
      )
    },
    code: ({ node }: SanityBlock) => {
      const { code, language } = node
      return <CodeBlock className={language}>{code}</CodeBlock>
    }
  },
  list: ({ children, type }: SanityBlock) => {
    return (
      <List pb='1rem' styleType={type} stylePosition='inside'>
        {children}
      </List>
    )
  },
  listItem: ({ children }: SanityBlock) => {
    return <ListItem>{children}</ListItem>
  },
  marks: {
    link: ({ mark, children }: SanityBlock) => {
      const theme = useTheme()

      return (
        <Link
          href={mark.href}
          isExternal
          bg={`linear-gradient(to top, ${theme.colors.primary[400]} 50%, transparent 50% )`}
          _hover={{
            background: `linear-gradient(to top, ${theme.colors.primary[200]} 50%, transparent 50% )`
          }}
        >
          {children}
        </Link>
      )
    }
  }
}

export const BlogLink = ({ mark, children }: SanityBlock) => {
  const theme = useTheme()

  return (
    <Link
      href={mark.href}
      isExternal
      bg={`linear-gradient(to top, ${theme.colors.blue[100]} 50%, transparent 50% )`}
    >
      {children}
    </Link>
  )
}

export const toPlainText = (blocks: SanityBlock[] = []) => {
  return blocks
    .map(block => {
      if (block._type !== 'block' || !block.children) {
        return ''
      }
      return block.children.map((child: any) => child.text).join('')
    })
    .join('\n\n')
}

export default serializers
