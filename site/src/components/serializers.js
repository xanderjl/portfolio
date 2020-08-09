import React, { createElement } from "react"
import PortableText from "@sanity/block-content-to-react"
import urlBuilder from "@sanity/image-url"
import CodeBlock from "../components/codeBlock"

export const BlockRenderer = props => {
  const { style = "normal" } = props.node

  switch (style) {
    case "h1":
      return createElement(
        style,
        { className: "title is-size-1  is-size-3-mobile" },
        props.children
      )

    case "h2":
      return createElement(
        style,
        { className: "title is-size-3 is-size-5-mobile" },
        props.children
      )

    case "h3":
      return createElement(
        style,
        { className: "title is-size-4 is-size-6-mobile" },
        props.children
      )

    default:
      return PortableText.defaultSerializers.types.block(props)
  }
}

export const BlockImage = ({ node }) => {
  const { image, alt } = node
  const urlFor = src =>
    urlBuilder({
      projectId: process.env.GATSBY_SANITY_ID,
      dataset: process.env.GATSBY_SANITY_DATASET,
    }).image(src)

  return <img src={urlFor(image)} alt={alt} />
}

export const Code = ({ node }) => {
  const { code } = node
  return <CodeBlock>{code}</CodeBlock>
}

export const LinkTag = ({ mark, children }) => {
  return (
    <a
      href={mark.href}
      className="highlight-white"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}
