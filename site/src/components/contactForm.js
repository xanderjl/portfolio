import React, { useState } from "react"

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: { "form-name": "contact", ...this.state },
    })
      .then(() => alert("success"))
      .catch(error => alert(error))

    e.preventDefault()
  }

  return (
    <form name="contact" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="" className="label">
          Name
        </label>
        <div className="control">
          <input
            type="text"
            name="name"
            value={name}
            className="input is-radiusless"
            placeholder="Jane Doe"
            onChange={e => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="" className="label">
          Email
        </label>
        <div className="control">
          <input
            type="text"
            name="email"
            value={email}
            className="input is-radiusless"
            placeholder="jane.d@gmail.com"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="" className="label">
          Message
        </label>
        <div className="control">
          <textarea
            name="message"
            value={message}
            className="textarea is-radiusless"
            placeholder="Hello"
            onChange={e => setMessage(e.target.value)}
          />
        </div>
      </div>
      <button type="submit" className="button is-primary is-radiusless">
        Submit
      </button>
    </form>
  )
}

export default ContactForm
