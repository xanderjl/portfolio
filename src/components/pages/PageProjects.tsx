import React, { ReactElement } from 'react'
import Layout from 'components/Layout'
import { PageProjectsProps } from 'types/Pages'
import ProjectCard from 'components/ProjectCard'
import { Container, Grid } from '@chakra-ui/react'

const PageProjects = ({ projects }: PageProjectsProps): ReactElement => {
  const pLength = projects.length

  return (
    <Layout>
      <Container maxW='container.lg'>
        <Grid
          gridTemplateColumns={{
            sm: '1fr',
            md: `repeat(${Math.floor(pLength / 2)}, 1fr)`
          }}
          gap={{ sm: 4, md: 8 }}
        >
          {projects.map((project, i) => {
            return <ProjectCard key={i} project={project} />
          })}
        </Grid>
      </Container>
    </Layout>
  )
}

export default PageProjects
