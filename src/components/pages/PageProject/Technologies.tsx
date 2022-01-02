import { Box, Grid, Heading, Tooltip } from '@chakra-ui/react'
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
        gap={{ sm: 2, md: 2 }}
        pb={{ sm: 4, md: 6 }}
      >
        {technologies?.map((tech, i) => {
          const { title, icon, url } = tech

          return (
            <Tooltip label={title}>
              <Box boxSize={{ sm: 5, md: 7 }}>
                <Link key={i} href={url} maxW='max-content' isExternal>
                  <Image
                    src={icon?.url as unknown as string}
                    width={36}
                    height={36}
                  />
                </Link>
              </Box>
            </Tooltip>
          )
        })}
      </Grid>
    </>
  )
}

export default Technologies
