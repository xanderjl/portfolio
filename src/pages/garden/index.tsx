import React from 'react'
import { NextPage, GetStaticPaths } from 'next'
import PageGarden from 'components/pages/PageGarden'

const Garden: NextPage = () => {
  return <PageGarden />
}

const getStaticPaths: GetStaticPaths = async () => {}

export default Garden
