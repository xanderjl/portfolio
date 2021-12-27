import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useState,
  useContext
} from 'react'

interface ProviderProps {
  children?: ReactElement | ReactElement[] | string
}

interface ContextProps {
  filterTags?: string[]
  setTags?: Dispatch<SetStateAction<never[]>>
}

const SelectedTagsContext = createContext<ContextProps | null>(null)

export const useSelectedTagsContext = useContext(SelectedTagsContext)

export const SelectedTagsProvider = ({ children }: ProviderProps) => {
  const [filterTags, setTags] = useState([])

  return (
    <SelectedTagsContext.Provider value={{ filterTags, setTags }}>
      {children}
    </SelectedTagsContext.Provider>
  )
}

export default SelectedTagsContext
