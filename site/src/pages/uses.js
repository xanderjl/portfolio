import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const uses = ({ data }) => {
  return (
    <Layout title="Uses">
      <section className="section">
        <div className="container"></div>
      </section>
    </Layout>
  )
}

// export const data = graphql`
//   {

//   }
// `

export default uses
