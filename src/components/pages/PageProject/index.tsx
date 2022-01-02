import { AspectRatio, Box, Container, Grid, Heading } from '@chakra-ui/react'
import Layout from 'components/Layout'
import { PortableText } from 'lib/sanity'
import Image from 'next/image'
import React, { ReactElement } from 'react'
import { PageProjectProps } from 'types/Pages'
import Technologies from './Technologies'

const PageProject = ({ project }: PageProjectProps): ReactElement => {
  const { image, description, projectUrl, repoUrl, title, technologies } =
    project

  return (
    <Layout>
      <Container maxW='container.lg' py={{ sm: 8, md: 14 }}>
        <Heading size='2xl' pb={{ sm: 4, md: 8 }}>
          {title}
        </Heading>
        <Grid gridTemplateColumns={{ md: '1fr', lg: 'repeat(2, 1fr)' }} gap={6}>
          <AspectRatio
            borderRadius={8}
            overflow='hidden'
            boxShadow='md'
            ratio={4 / 3}
          >
            <Image
              src={image?.url as unknown as string}
              layout='fill'
              objectFit='cover'
              objectPosition='top'
            />
          </AspectRatio>
          <Box>
            <Technologies technologies={technologies} />
            <Heading as='h3' size='xl'>
              Overview
            </Heading>
            <PortableText blocks={description} />
          </Box>
        </Grid>
      </Container>
    </Layout>
  )
}

export default PageProject
