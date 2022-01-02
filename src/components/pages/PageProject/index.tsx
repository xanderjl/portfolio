import { AspectRatio, Box, Container, Grid, Heading } from '@chakra-ui/react'
import Layout from 'components/Layout'
import ProjectLinks from 'components/ProjectLinks'
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
      <Container maxW='container.md' py={{ sm: 8, md: 14 }}>
        <Heading size='2xl' pb={{ sm: 4, md: 8 }}>
          {title}
        </Heading>
        <Box pb={{ sm: 2, md: 4 }}>
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
        </Box>
        <Box>
          <ProjectLinks
            projectUrl={projectUrl}
            repoUrl={repoUrl}
            pb={{ sm: 4, md: 6 }}
          />
          <Technologies technologies={technologies} />
          <Heading as='h3' size='xl'>
            Overview
          </Heading>
          <PortableText blocks={description} />
        </Box>
      </Container>
    </Layout>
  )
}

export default PageProject
