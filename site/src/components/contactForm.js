import React, { useState, useReducer } from "react"
import PropTypes from "prop-types"

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
      .then(() => alert("success"))
      .catch(error => alert(error))

    e.preventDefault()
    dispatch({ type: "reset" })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      {title ? <h2 className="title is-size-3">{title}</h2> : null}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </div>
      </div>
      <button type="submit" className="button is-primary is-radiusless">
        Submit
      </button>
    </form>
  )
}

ContactForm.propTypes = {
  title: PropTypes.string,
}

export default ContactForm
