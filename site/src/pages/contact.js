import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/contactForm"

const contact = () => {
  return (
    <Layout title="Contact">
      <section className="section">
        <div
          className="container has-background-white has-shadow"
          style={{ maxWidth: "55ch", margin: "0 auto", padding: "3rem 1.5rem" }}
        >
          <ContactForm title="Reach Out." />
        </div>
      </section>
    </Layout>
  )
}

export default contact
