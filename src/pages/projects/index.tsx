import React from 'react'
import PageProjects from 'components/pages/PageProjects'
import { GetStaticProps } from 'next'
import { sanityClient } from 'lib/sanity/sanity.server'
import { projectsQuery } from 'lib/sanity/queries'
import { Projects } from 'studio/schema'
import { PageProjectsProps } from 'types/Pages'

const Projects = ({ projects }: PageProjectsProps) => {
  return <PageProjects projects={projects} />
}

export const getStaticProps: GetStaticProps = async () => {
  const projects: Projects = await sanityClient.fetch(projectsQuery)

  return {
    props: { projects }
  }
}

export default Projects
