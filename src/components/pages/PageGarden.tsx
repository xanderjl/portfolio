import { useState, useContext, ReactElement } from 'react'
import Fuse from 'fuse.js'
import Layout from 'components/Layout'
import {
  Container,
  Stack,
  StackDivider,
  InputGroup,
  InputLeftElement,
  Input,
  Icon
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { BiSearch } from 'react-icons/bi'
import Tags from 'components/Tags'
import SelectedTagsContext from 'context/selectedTagsContext'
import PostResults from 'components/PostResults'
import PostResult from 'types/PostResult'

interface Props {
  posts?: any
  tags: string[]
}

const MotionContainer = motion(Container)

const PageGarden = ({ posts, tags }: Props): ReactElement => {
  const [query, setQuery] = useState('')
  const { filterTags } = useContext(SelectedTagsContext)

  const fuse = new Fuse(posts, {
    keys: ['title', 'content', 'matter.tags']
  })
  const results = fuse.search(query + filterTags.join())
  const postResults: PostResult[] =
    filterTags.length > 0 || query ? results.map(result => result.item) : posts

  return (
    <Layout
      title='Welcome to my Garden'
      metadescription='Welcome to my digital garden, where I share whatever has been on my mind.'
    >
      <MotionContainer
        maxW='container.md'
        p='3rem 1.25rem'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeInOut',
          type: 'spring',
          stiffness: 100,
          duration: 0.2
        }}
      >
        <Stack
          p='3rem 1.25rem'
          bg='white'
          border='1px solid'
          borderColor='gray.300'
          borderRadius={4}
          boxShadow='lg'
          spacing={3}
          divider={<StackDivider />}
        >
          <InputGroup size='lg' borderColor='gray.300'>
            <InputLeftElement>
              <Icon as={BiSearch} />
            </InputLeftElement>
            <Input
              type='text'
              placeholder='Search for something!'
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </InputGroup>
          <Tags tags={tags} />
          <PostResults postResults={postResults} />
        </Stack>
      </MotionContainer>
    </Layout>
  )
}

export default PageGarden
