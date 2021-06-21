import React from "react"
import {
  useTheme,
  Heading,
  Text,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react"
import Link from "@components/Link"
import urlBuilder from "@sanity/image-url"
import CodeBlock from "@components/CodeBlock"

export default {
  types: {
    block: props => {
      const { style = "normal" } = props.node

      if (/^h\d/.test(style)) {
        return (
          <Heading as={style} fontFamily="body" fontSize="xl" pb="0.5rem">
            {props.children}
          </Heading>
        )
      }

      if (style === "blockquote") {
        return (
          <Text
            as="blockquote"
            p="0.5rem 1rem"
            mb="1.25rem"
            bg="gray.50"
            borderLeft={`4px solid ${theme.colors.blue[200]}`}
          >
            {props.children}
          </Text>
        )
      }
      return <Text pb="1rem">{props.children}</Text>
    },
    blockImage: ({ node }) => {
      const { image, alt } = node
      const urlFor = src =>
        urlBuilder({
          projectId: "akwcuf3t",
          dataset: "production",
        }).image(src)

      return (
        <Image
          src={urlFor(image)}
          alt={alt}
          p="1.25rem 0 2.5rem 0"
          m="0 auto"
        />
      )
    },
    code: ({ node }) => {
      const { code, language } = node
      return <CodeBlock className={language}>{code}</CodeBlock>
    },
  },
  list: ({ children, type }) => {
    return (
      <List pb="1rem" styleType={type} stylePosition="inside">
        {children}
      </List>
    )
  },
  listItem: ({ children }) => {
    return <ListItem>{children}</ListItem>
  },
  marks: {
    link: ({ mark, children }) => {
      const theme = useTheme()

      return (
        <Link
          href={mark.href}
          isExternal
          bg={`linear-gradient(to top, ${theme.colors.primary[400]} 50%, transparent 50% )`}
          _hover={{
            background: `linear-gradient(to top, ${theme.colors.primary[200]} 50%, transparent 50% )`,
          }}
        >
          {children}
        </Link>
      )
    },
  },
}

export const BlogLink = ({ mark, children }) => {
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

export const toPlainText = (blocks = []) => {
  return blocks
    .map(block => {
      if (block._type !== "block" || !block.children) {
        return ""
      }
      return block.children.map(child => child.text).join("")
    })
    .join("\n\n")
}
