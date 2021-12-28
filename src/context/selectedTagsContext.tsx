import { createContext, ReactNode, useState } from 'react'

interface ProviderProps {
  children?: ReactNode | ReactNode[] | string
}

interface ContextProps {
  filterTags: string[]
  setTags?: any
}

const defaultState = {
  filterTags: []
}

const SelectedTagsContext = createContext<ContextProps>(defaultState)

export const SelectedTagsProvider = ({ children }: ProviderProps) => {
  const [filterTags, setTags] = useState([])

  return (
    <SelectedTagsContext.Provider value={{ filterTags, setTags }}>
      {children}
    </SelectedTagsContext.Provider>
  )
}

export default SelectedTagsContext
