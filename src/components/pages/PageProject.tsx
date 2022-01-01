import Layout from 'components/Layout'
import React, { ReactElement } from 'react'
import { PageProjectProps } from 'types/Pages'

const PageProject = ({ project }: PageProjectProps): ReactElement => {
  return (
    <Layout>
      <pre>{JSON.stringify(project, null, 2)}</pre>
    </Layout>
  )
}

export default PageProject
