import { Text, useTheme } from "@chakra-ui/react"

const BlockQuote = ({ children }) => {
  const theme = useTheme()
  return (
    <Text
      as="blockquote"
      p="0.5rem 1rem"
      mb="1.25rem"
      bg="gray.50"
      borderLeft={`4px solid ${theme.colors.primary[200]}`}
      borderRadius={4}
    >
      {children}
    </Text>
  )
}

export default BlockQuote
