import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Box,
} from "@chakra-ui/react"
import { ChevronUpIcon } from "@chakra-ui/icons"

const HtmlOverlay = ({ title, children, ...rest }) => {
  return (
    <Accordion
      allowToggle
      position="fixed"
      ml="1.25rem"
      bottom="1.25rem"
      right="1.25rem"
      boxShadow="lg"
      borderRadius={4}
      overflow="hidden"
      {...rest}
    >
      <AccordionItem border="none">
        <AccordionPanel bg="white" maxW="50ch" maxH="500px" overflowY="scroll">
          {children}
        </AccordionPanel>
        <Heading fontFamily="body">
          <AccordionButton
            bg="gray.700"
            color="white"
            _hover={{ bg: "gray.800" }}
            _expanded={{
              bg: "white",
              color: "gray.900",
              borderTop: "1px solid",
              borderColor: "gray.200",
            }}
          >
            <Box flex={1} textAlign="left">
              {title}
            </Box>
            <AccordionIcon as={ChevronUpIcon} />
          </AccordionButton>
        </Heading>
      </AccordionItem>
    </Accordion>
  )
}

export default HtmlOverlay
