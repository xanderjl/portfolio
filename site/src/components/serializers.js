import React from "react"
import {
  theme,
  Heading,
  Text,
  Image,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react"
import urlBuilder from "@sanity/image-url"
import CodeBlock from "../components/codeBlock"

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
          projectId: process.env.GATSBY_SANITY_ID,
          dataset: process.env.GATSBY_SANITY_DATASET,
        }).image(src)

      return <Image src={urlFor(image)} alt={alt} p="5rem 0" m="0 auto" />
    },
    code: ({ node }) => {
      const { code } = node
      return <CodeBlock>{code}</CodeBlock>
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
      return (
        <Link
          href={mark.href}
          isExternal
          bg={`linear-gradient(to top, ${theme.colors.blue[100]} 50%, transparent 50% )`}
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
