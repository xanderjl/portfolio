import React from 'react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import { Box } from '@chakra-ui/react'

interface Props {
  children: string
  className?: string
}

const CodeBlock = ({ children, className }: Props) => {
  const language: Language = className
    ? (className.replace(/language-/, '') as Language)
    : ('bash' as Language)

  return (
    <Highlight
      {...defaultProps}
      code={children}
      theme={theme}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box
          as='pre'
          className={className}
          style={style}
          maxW='100%'
          maxH='40em'
          mb='1rem'
          borderRadius={4}
          fontSize={{ base: '14px', md: '16px' }}
          padding='1rem'
          overflow='auto'
        >
          <Box as='code' display='inline-block' minW='100%' p={0}>
            {tokens.map((line, i) => {
              return i === tokens.length - 1 && line[0].empty ? null : (
                <Box key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <Box
                      as='span'
                      key={key}
                      {...getTokenProps({ token, key })}
                    />
                  ))}
                </Box>
              )
            })}
          </Box>
        </Box>
      )}
    </Highlight>
  )
}

export default CodeBlock
