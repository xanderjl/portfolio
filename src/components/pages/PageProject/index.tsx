import { Box, Container, Grid, Heading } from '@chakra-ui/react'
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
      <Container maxW='container.lg'>
        <Heading>{title}</Heading>
        <Grid gridTemplateColumns={{ md: '1fr', lg: 'repeat(2, 1fr)' }} gap={6}>
          <Box pos='relative' borderRadius={8} overflow='hidden' boxShadow='md'>
            <Image
              src={image?.url as unknown as string}
              width={800}
              height={800}
              layout='intrinsic'
            />
          </Box>
          <Box>
            <Technologies technologies={technologies} />
            <Heading as='h3'>Overview</Heading>
            <PortableText blocks={description} />
          </Box>
        </Grid>
      </Container>
    </Layout>
  )
}

export default PageProject
