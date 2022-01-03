import React from 'react'
import PageProjects from 'components/pages/PageProjects'
import { GetStaticProps, NextPage } from 'next'
import { sanityClient } from 'lib/sanity/sanity.server'
import { projectsQuery } from 'lib/sanity/queries'
import { PageProjectsProps } from 'types/Pages'
import { Project } from 'types/CustomSanity'

const Projects: NextPage<PageProjectsProps> = ({ projects }) => {
  return <PageProjects projects={projects} />
}

export const getStaticProps: GetStaticProps = async () => {
  const projects: Project[] = await sanityClient.fetch(projectsQuery)

  return {
    props: { projects }
  }
}

export default Projects
