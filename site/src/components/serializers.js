import React from "react"
import PortableText from "@sanity/block-content-to-react"

export const BlockRenderer = props => {
  const { style = "normal" } = props.node

  if (style === "h1") {
    return React.createElement(
      style,
      { className: `is-size-4-mobile` },
      props.children
    )
  }

  return PortableText.defaultSerializers.types.block(props)
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
