import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/oceanicNext"

const CodeBlock = ({ children, className }) => {
  const language = className ? className.replace(/language-/, "") : "js"

  return (
    <Highlight
      {...defaultProps}
      code={children}
      theme={theme}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            padding: "1rem 1rem 2rem 1rem",
            overflow: "auto",
            maxWidth: "100vw",
            maxHeight: "40em",
            borderRadius: "4px",
            fontSize: "16px",
          }}
        >
          {tokens.map((line, i) => {
            return i === tokens.length - 1 && line[0].empty ? null : (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            )
          })}
        </pre>
      )}
    </Highlight>
  )
}

export default CodeBlock
