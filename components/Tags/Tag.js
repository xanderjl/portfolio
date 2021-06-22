import { useState, useContext } from "react"
import { Tag as ChTag } from "@chakra-ui/react"
import SelectedTagsContext from "@context/selectedTagsContext"

const Tag = ({ tag }) => {
  const [isSelected, setSelected] = useState(false)
  const { filterTags, setTags } = useContext(SelectedTagsContext)

  return (
    <ChTag
      as="button"
      mr={2}
      mb={2}
      bg={isSelected ? "primary.500" : "gray.100"}
      color={isSelected ? "white" : "gray.900"}
      _hover={{ bg: "primary.100" }}
      onClick={() => {
        setSelected(!isSelected)
        !isSelected
          ? setTags([...filterTags, tag])
          : setTags(filterTags.filter(fTag => fTag !== tag))
      }}
    >
      {tag}
    </ChTag>
  )
}

export default Tag
