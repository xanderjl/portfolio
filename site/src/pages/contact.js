import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/contactForm"

const contact = () => {
  return (
    <Layout>
      <section className="section">
        <div className="container" style={{ maxWidth: "55ch" }}>
          <ContactForm />
        </div>
      </section>
    </Layout>
  )
}

export default contact
