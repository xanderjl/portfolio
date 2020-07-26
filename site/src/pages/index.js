import React from "react"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout title="Home">
    <section className="section">
      <h1 className="title is-playfair is-italic is-size-1 mb-1">Alex Low</h1>
      <span className="subtitle is-size-5">Front End Web Developer</span>
    </section>
    <section className="section">
      <a className="is-relative" href="mailto:me@alexlow.dev">me@alexlow.dev</a>
    </section>
  </Layout>
)

export default IndexPage
