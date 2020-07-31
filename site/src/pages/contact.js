import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/contactForm"

const contact = () => {
  return (
    <Layout title="Contact">
      <section className="section">
        <ContactForm title="Reach Out." />
      </section>
    </Layout>
  )
}

export default contact
