import React from "react"
import { theme, Heading, Text, Image, Link } from "@chakra-ui/core"
import PortableText from "@sanity/block-content-to-react"
import urlBuilder from "@sanity/image-url"
import CodeBlock from "../components/codeBlock"

export const BlockRenderer = props => {
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
        bg="gray.50"
        borderLeft={`4px solid ${theme.colors.blue[200]}`}
      >
        {props.children}
      </Text>
    )
  }

  return PortableText.defaultSerializers.types.block(props)
}

export const BlockImage = ({ node }) => {
  const { image, alt } = node
  const urlFor = src =>
    urlBuilder({
      projectId: process.env.GATSBY_SANITY_ID,
      dataset: process.env.GATSBY_SANITY_DATASET,
    }).image(src)

  return <Image src={urlFor(image)} alt={alt} />
}

export const Code = ({ node }) => {
  const { code } = node
  return <CodeBlock>{code}</CodeBlock>
}

export const LinkTag = ({ mark, children }) => {
  return (
    <Link
      href={mark.href}
      isExternal
      bg={{
        base: `linear-gradient(to top, ${theme.colors.blue[100]} 50%, transparent 50% )`,
        md: `linear-gradient(to top, ${theme.colors.white} 50%, transparent 50% )`,
      }}
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
