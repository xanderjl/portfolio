import { Box } from '@chakra-ui/react'
import { ReactElement } from 'react'

interface Props {
  children?: ReactElement | ReactElement[] | string
}

const InlineCode = ({ children }: Props) => {
  return (
    <Box
      as='code'
      px={1}
      bg='#011627'
      color='white'
      borderRadius={4}
      fontSize='md'
    >
      {children}
    </Box>
  )
}

export default InlineCode
