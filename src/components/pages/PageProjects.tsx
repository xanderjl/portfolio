import React, { ReactElement } from 'react'
import Layout from 'components/Layout'
import { PageProjectsProps } from 'types/Pages'
import ProjectCard from 'components/ProjectCard'
import { Grid } from '@chakra-ui/react'

const PageProjects = ({ projects }: PageProjectsProps): ReactElement => {
  return (
    <Layout>
      <Grid gap={8} maxW={800} m='0 auto'>
        {projects.map((project, i) => {
          return <ProjectCard key={i} project={project} />
        })}
      </Grid>
    </Layout>
  )
}

export default PageProjects
