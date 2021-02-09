import { Box, Heading, Divider, List, ListItem } from "@chakra-ui/react"
import { Link } from "next/link"
import { motion } from "framer-motion"
import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  connectHits,
  SearchBox,
  Highlight,
} from "react-instantsearch-dom"
import "instantsearch.css/themes/reset.css"

const listVariants = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.7,
    },
  },
}

const itemVariants = {
  hidden: {
    x: -40,
    opacity: 0,
  },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.2,
    },
  }),
}

const MotionBox = motion.custom(Box)
const MotionList = motion.custom(List)
const MotionListItem = motion.custom(ListItem)

const SearchPreview = ({ hit }) => {
  const { slug } = hit

  return (
    <Link href={`/garden/${slug.current}`}>
      <Heading p="1rem 0" as="h2" fontFamily="body" fontSize="3xl">
        <Highlight hit={hit} attribute="title" tagName="mark" />
      </Heading>
      <Divider />
    </Link>
  )
}

const SearchBar = () => {
  return (
    <Box>
      <InstantSearch
        searchClient={algoliasearch(
          "TLPTLTMHHX",
          "3e3d1e667c2daf1293dba20bbc8e3e8d"
        )}
        indexName="Blog"
      >
        <MotionBox
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <SearchBox />
        </MotionBox>
        <CustomHits hitComponent={SearchPreview} />
      </InstantSearch>
    </Box>
  )
}

const Hits = ({ hits }) => {
  return (
    <MotionList initial="hidden" animate="visible" variants={listVariants}>
      {hits.map((hit, i) => (
        <MotionListItem key={i} custom={i} variants={itemVariants}>
          <SearchPreview hit={hit} />
        </MotionListItem>
      ))}
    </MotionList>
  )
}

const CustomHits = connectHits(Hits)

export default SearchBar
