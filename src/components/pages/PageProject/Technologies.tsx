import { Grid, Heading } from '@chakra-ui/react'
import Link from 'components/Link'
import Image from 'next/image'
import React from 'react'
import { Technology } from 'types/CustomSanity'

interface Props {
  technologies?: Technology[]
}
const Technologies = ({ technologies }: Props) => {
  const techLength = technologies?.length

  return (
    <>
      <Heading as='h2' size='xl'>
        Technologies
      </Heading>
      <Grid
        gridTemplateColumns={`repeat(${techLength}, 1fr)`}
        maxW='max-content'
        gap={{ sm: 2, md: 4 }}
        pb={{ sm: 2, md: 4 }}
      >
        {technologies?.map((tech, i) => {
          const { icon, url } = tech

          return (
            <Link
              key={i}
              href={url}
              maxW='max-content'
              isExternal
              w={{ sm: 6, md: 10 }}
              h={{ sm: 6, md: 10 }}
            >
              <Image
                src={icon?.url as unknown as string}
                width={36}
                height={36}
              />
            </Link>
          )
        })}
      </Grid>
    </>
  )
}

export default Technologies
