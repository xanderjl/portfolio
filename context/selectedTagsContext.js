import { createContext, useState } from "react"

const SelectedTagsContext = createContext(null)

export default SelectedTagsContext

export const SelectedTagsProvider = ({ children }) => {
  const [filterTags, setTags] = useState([])

  return (
    <SelectedTagsContext.Provider value={{ filterTags, setTags }}>
      {children}
    </SelectedTagsContext.Provider>
  )
}
