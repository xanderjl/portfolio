import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  connectHits,
  SearchBox,
  Highlight,
  connectHighlight,
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
      when: "beforeChildren",
      staggerChildren: 0.7,
    },
  },
}

const itemVariants = {
  hidden: {
    x: -20,
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
      <h3 className="subtitle mt-4 mb-2 is-size-5">
        <Highlight hit={hit} attribute="title" tagName="mark" />
      </h3>
      <h4 className="subtitle mb-0 is-size-6">
        <Highlight hit={hit} attribute="body" tagName="mark" />
      </h4>
      <hr
        style={{
          margin: "1rem 0",
          border: "1px solid #e4e4e4",
        }}
      />
    </Link>
  )
}

const SearchBar = () => {
  return (
    <div className="custom-search">
      <InstantSearch searchClient={searchClient} indexName="Blog">
        <SearchBox />
        <motion.div initial="hidden" animate="visible" variants={listVariants}>
          <CustomHits hitComponent={SearchPreview} />
        </motion.div>
      </InstantSearch>
    </div>
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

// const Highlight = () => {}

// const customHighlight = connectHighlight(Highlight)

export default SearchBar
