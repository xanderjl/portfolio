import React, { ReactElement } from 'react'
import Layout from 'components/Layout'
import { PageProjectsProps } from 'types/Pages'
import ProjectCard from 'components/ProjectCard'

const PageProjects = ({ projects }: PageProjectsProps): ReactElement => {
  return (
    <Layout>
      {projects.map((project, i) => {
        return <ProjectCard key={i} project={project} />
      })}
    </Layout>
  )
}

export default PageProjects
