import { Box } from '@chakra-ui/react'
import { ReactNode, ReactElement } from 'react'

interface Props {
  children?: ReactNode | ReactNode[] | string
}

const InlineCode = ({ children }: Props): ReactElement => {
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
