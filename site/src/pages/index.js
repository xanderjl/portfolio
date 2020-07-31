import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/contactForm"

const IndexPage = () => (
  <Layout title="Home">
    <section className="section">
      <h1 className="title is-playfair is-italic is-size-1-desktop mb-1">
        Alex Low
      </h1>
      <span className="subtitle is-size-5 is-size-6-mobile">
        Front End Web Developer
      </span>
    </section>
    <section className="section py-0">
      <div className="container">
        <div className="is-pulled-right pulled-override">
          <ContactForm title="Let's Talk." />
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
