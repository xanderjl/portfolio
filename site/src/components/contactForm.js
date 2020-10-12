import React, { useState } from "react"
import PropTypes from "prop-types"
import {
  Box,
  Text,
  Heading,
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
} from "@chakra-ui/core"
import { useForm } from "react-hook-form"

import Modal from "../components/modal"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactForm = ({ title }) => {
  const { register, handleSubmit, reset, errors } = useForm()
  const [modal, setModal] = useState(false)
  const onSubmit = data => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data }),
    })
      .then(() => {
        setModal(!modal)
        reset()
      })
      .catch(error => alert(error))
  }

  return (
    <>
      <Box bg="white" p="3rem 1.5rem">
        <form
          name="contact"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          data-netlify="true"
        >
          <Input
            type="hidden"
            name="form-name"
            value="contact"
            ref={register({ required: true })}
          />
          {title ? (
            <Heading as="h2" fontFamily="body">
              {title}
            </Heading>
          ) : null}
          <FormControl>
            <FormLabel htmlFor="name" className="label">
              Name
            </FormLabel>
            <div className="control">
              <Input
                name="name"
                placeholder="Jane Doe"
                ref={register({ required: true })}
              />
            </div>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email" className="label">
              Email
            </FormLabel>
            <div className="control">
              <Input
                name="email"
                placeholder="jane.d@gmail.com"
                ref={register({ required: true })}
              />
            </div>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="message" className="label">
              Message
            </FormLabel>
            <div className="control">
              <Textarea
                name="message"
                rows={10}
                placeholder="Hello"
                ref={register({ required: true })}
              />
            </div>
          </FormControl>
          <Button
            type="submit"
            colorScheme="cyan"
            color="white"
            borderRadius={0}
          >
            Submit
          </Button>
        </form>
      </Box>
      {modal ? (
        <Modal>
          <Heading as="h2" fontSize="3xl" fontFamily="body">
            Thanks For Reaching Out!
          </Heading>
          <Text>I'll get back to you shortly :)</Text>
        </Modal>
      ) : null}
    </>
  )
}

ContactForm.propTypes = {
  title: PropTypes.string,
}

export default ContactForm
