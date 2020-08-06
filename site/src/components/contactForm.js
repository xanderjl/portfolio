import React, { useState, useReducer } from "react"
import PropTypes from "prop-types"

import Modal from "../components/modal"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const initState = {
  name: "",
  email: "",
  message: "",
}

const reducer = (state, action) => {
  switch (action.type) {
    case "setField":
      return {
        ...state,
        [action.payload.field]: action.payload.val,
      }
    case "reset":
      return initState
    default:
      throw new Error()
  }
}

const ContactForm = ({ title }) => {
  const [state, dispatch] = useReducer(reducer, initState)
  const [modal, setModal] = useState(false)
  const { name, email, message } = state

  const handleChange = e => {
    dispatch({
      type: "setField",
      payload: { field: e.target.name, val: e.target.value },
    })
  }
  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => setModal(!modal))
      .catch(error => alert(error))

    e.preventDefault()
    dispatch({ type: "reset" })
  }

  return (
    <>
      <form
        name="contact"
        className="contact-form has-background-white has-shadow"
        method="POST"
        onSubmit={handleSubmit}
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        {title ? (
          <h2 className="title is-size-3 is-size-4-mobile">{title}</h2>
        ) : null}
        <div className="field">
          <label htmlFor="name" className="label">
            Name
          </label>
          <div className="control">
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              className="input is-radiusless"
              placeholder="Jane Doe"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="email" className="label">
            Email
          </label>
          <div className="control">
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              className="input is-radiusless"
              placeholder="jane.d@gmail.com"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="message" className="label">
            Message
          </label>
          <div className="control">
            <textarea
              id="message"
              name="message"
              value={message}
              className="textarea is-radiusless"
              placeholder="Hello"
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" className="button is-primary is-radiusless">
          Submit
        </button>
      </form>
      {modal ? (
        <Modal>
          <h1 className="title is-size-5-mobile">Thanks For Reaching Out!</h1>
          <p>I'll get back to you shortly :)</p>
        </Modal>
      ) : null}
    </>
  )
}

ContactForm.propTypes = {
  title: PropTypes.string,
}

export default ContactForm
