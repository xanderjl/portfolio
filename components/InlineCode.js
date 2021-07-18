import { Box } from "@chakra-ui/react"

const InlineCode = ({ children }) => {
  return (
    <Box as="code" px={1} bg="#011627" color="white" borderRadius={4} fontSize="md">
      {children}
    </Box>
  )
}

export default InlineCode
