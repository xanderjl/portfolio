import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import Tag from './Tag'

interface Props {
  tags: Tag[]
}

const Tags = ({ tags }: Props): ReactElement => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <AccordionButton>
          <Box flex={1} textAlign='left'>
            Tags
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Flex direction='row' flexWrap='wrap'>
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
