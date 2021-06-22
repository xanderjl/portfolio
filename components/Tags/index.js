import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
} from "@chakra-ui/react"
import Tag from "./Tag"

const Tags = ({ tags }) => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <AccordionButton>
          <Box flex={1} textAlign="left">
            Tags
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Flex direction="row" flexWrap="wrap">
            {tags.map((tag, i) => (
              <Tag key={i} tag={tag} />
            ))}
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default Tags
