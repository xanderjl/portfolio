import React, { useState } from "react"
import PropTypes from "prop-types"
import {
  Box,
  Heading,
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/core"
import { useForm } from "react-hook-form"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactForm = ({ title }) => {
  const { register, handleSubmit, reset, errors } = useForm()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const onSubmit = data => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data }),
    })
      .then(() => {
        onOpen()
        reset()
      })
      .catch(error => alert(error))
  }

  return (
    <Box
      minW={[0, 0, "45ch"]}
      maxW="45ch"
      p="3rem 1.5rem"
      bg="white"
      boxShadow="0 0.5rem 1em -0.125em rgba(0,0,0,0.1)"
    >
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
          <Heading as="h2" pb="1.25rem" fontFamily="body">
            {title}
          </Heading>
        ) : null}
        <FormControl pb="1rem">
          <FormLabel htmlFor="name" className="label" fontWeight="semibold">
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
        <FormControl pb="1rem">
          <FormLabel htmlFor="email" className="label" fontWeight="semibold">
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
        <FormControl pb="1rem">
          <FormLabel htmlFor="message" className="label" fontWeight="semibold">
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
        <Button type="submit" colorScheme="blue" color="white">
          Submit
        </Button>
      </form>
      {isOpen ? (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay>
            <ModalContent>
              <ModalHeader>Thanks For Reaching Out!</ModalHeader>
              <ModalCloseButton />
              <ModalBody>I'll get back to you shortly :)</ModalBody>
            </ModalContent>
          </ModalOverlay>
        </Modal>
      ) : null}
    </Box>
  )
}

ContactForm.propTypes = {
  title: PropTypes.string,
}

export default ContactForm
