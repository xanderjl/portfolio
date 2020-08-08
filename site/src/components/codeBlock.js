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
          style={{ ...style, overflow: "auto", maxWidth: "100vw" }}
        >
          <code
            style={{
              display: "inline-block",
              padding: 0,
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
          </code>
        </pre>
      )}
    </Highlight>
  )
}

export default CodeBlock
