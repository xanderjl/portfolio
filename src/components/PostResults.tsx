import React from 'react'
import { Heading } from '@chakra-ui/react'
import Link from './Link'
import PostResult from 'types/PostResult'

interface Props {
  postResults: PostResult[]
}

const PostResults = ({ postResults }: Props) => {
  return (
    <>
      {postResults.map((post, i) => {
        const { title, path, matter } = post
        return (
          matter.published && (
            <Link
              key={i}
              href={path}
              p='0.5rem'
              borderRadius={4}
              _hover={{
                background: 'primary.100'
              }}
            >
              <Heading as='h2' size='md' fontFamily='body'>
                {title}
              </Heading>
            </Link>
          )
        )
      })}
    </>
  )
}

export default PostResults
