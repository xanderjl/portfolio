import PageProject from 'components/pages/PageProject'
import { projectQuery, projectsQuery } from 'lib/sanity/queries'
import { sanityClient } from 'lib/sanity/sanity.server'
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage
} from 'next'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'
import { Project } from 'types/CustomSanity'
import { PageProjectProps } from 'types/Pages'

interface Params extends ParsedUrlQuery {
  id: string
}

const Project: NextPage<PageProjectProps> = ({ project }) => {
  return <PageProject project={project} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projects: Project[] = await sanityClient.fetch(projectsQuery)
  const paths = projects.map(project => {
    const { slug } = project

    return {
      params: { slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({
  params
}: GetStaticPropsContext) => {
  const { slug } = params as Params
  const project: Project = await sanityClient.fetch(projectQuery, { slug })

  return {
    props: { project }
  }
}

export default Project
