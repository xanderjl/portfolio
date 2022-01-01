import React, { ReactElement } from 'react'
import Layout from 'components/Layout'
import { PageProjectsProps } from 'types/Pages'

const PageProjects = ({ projects }: PageProjectsProps): ReactElement => {
  return (
    <Layout>
      <pre>{JSON.stringify(projects, null, 2)}</pre>
    </Layout>
  )
}

export default PageProjects
