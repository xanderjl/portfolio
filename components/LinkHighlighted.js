import { useTheme } from "@chakra-ui/react"
import Link from "./Link"

const LinkHighlighted = ({ children, ...rest }) => {
  const theme = useTheme()
  return (
    <Link
      bg={`linear-gradient(to top, ${theme.colors.primary[400]} 50%, transparent 50% )`}
      _hover={{
        background: `linear-gradient(to top, ${theme.colors.primary[200]} 50%, transparent 50% )`,
      }}
      {...rest}
    >
      {children}
    </Link>
  )
}

export default LinkHighlighted
