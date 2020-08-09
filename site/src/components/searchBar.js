import React from "react"
import { Link } from "gatsby"
import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  Hits,
  SearchBox,
  Highlight,
} from "react-instantsearch-dom"
import "instantsearch.css/themes/reset.css"

const searchClient = algoliasearch(
  "TLPTLTMHHX",
  "3e3d1e667c2daf1293dba20bbc8e3e8d"
)

const SearchPreview = ({ hit }) => {
  const { id, slug, title, body } = hit
  console.log(title, body)
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
        <Hits hitComponent={SearchPreview} />
      </InstantSearch>
    </div>
  )
}

export default SearchBar
