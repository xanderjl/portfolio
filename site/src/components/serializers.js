import React, { createElement } from "react"
import PortableText from "@sanity/block-content-to-react"
import urlBuilder from "@sanity/image-url"

export const BlockRenderer = props => {
  const { style = "normal" } = props.node

  switch (style) {
    case "h1":
      return createElement(
        style,
        { className: "title is-size-1  is-size-3-mobile" },
        props.children
      )
      break

    case "h2":
      return createElement(
        style,
        { className: "title is-size-3 is-size-5-mobile" },
        props.children
      )
      break

    case "h3":
      return createElement(
        style,
        { className: "title is-size-4 is-size-6-mobile" },
        props.children
      )
      break

    default:
      return PortableText.defaultSerializers.types.block(props)
  }
}

export const BlockImage = ({ node }) => {
  const { image, alt } = node
  const urlFor = src =>
    urlBuilder({
      projectId: process.env.SANITY_ID,
      dataset: process.env.SANITY_DATASET,
    }).image(src)

  return <img src={urlFor(image)} alt={alt} />
}

export const Code = ({ node }) => {
  return <pre>{JSON.stringify(node, null, 2)}</pre>
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
