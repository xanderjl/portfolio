import React from "react"
import { Box, Heading, Divider } from "@chakra-ui/core"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  connectHits,
  SearchBox,
  Highlight,
} from "react-instantsearch-dom"
import "instantsearch.css/themes/reset.css"

const searchClient = algoliasearch(
  "TLPTLTMHHX",
  "3e3d1e667c2daf1293dba20bbc8e3e8d"
)

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
  visible: i => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.2,
    },
  }),
}

const SearchPreview = ({ hit }) => {
  const { slug } = hit

  return (
    <Link to={`/blog/${slug.current}`}>
      <Heading as="h2" fontFamily="body" fontSize="3xl">
        <Highlight hit={hit} attribute="title" tagName="mark" />
      </Heading>
      <Heading as="h3" fontFamily="body" fontSize="xl" fontWeight="normal">
        <Highlight hit={hit} attribute="body" tagName="mark" />
      </Heading>
      <Divider p="0.5rem" />
    </Link>
  )
}

const SearchBar = () => {
  return (
    <Box className="custom-search">
      <InstantSearch searchClient={searchClient} indexName="Blog">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <SearchBox />
        </motion.div>
        <CustomHits hitComponent={SearchPreview} />
      </InstantSearch>
    </Box>
  )
}

const Hits = ({ hits }) => {
  return (
    <motion.ul initial="hidden" animate="visible" variants={listVariants}>
      {hits.map((hit, i) => (
        <motion.li key={i} custom={i} variants={itemVariants}>
          <SearchPreview hit={hit} />
        </motion.li>
      ))}
    </motion.ul>
  )
}

const CustomHits = connectHits(Hits)

export default SearchBar
