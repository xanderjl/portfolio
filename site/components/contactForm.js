import React from "react"
import PropTypes from "prop-types"
import {
  Box,
  Heading,
  Text,
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
} from "@chakra-ui/react"
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

  const re = /\S+@\S+\.\S+/

  return (
    <Box
      minW={[0, 0, "45ch"]}
      maxW="45ch"
      p="3rem 1.5rem"
      bg="white"
      borderRadius={4}
      boxShadow="lg"
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
          <Input
            name="name"
            placeholder="Jane Doe"
            ref={register({ required: true })}
            borderColor={errors.name ? "red.300" : "gray.200"}
          />
          {errors.name && (
            <Text as="span" color="red.300">
              Please enter your name.
            </Text>
          )}
        </FormControl>
        <FormControl pb="1rem">
          <FormLabel htmlFor="email" className="label" fontWeight="semibold">
            Email
          </FormLabel>
          <Input
            name="email"
            placeholder="jane.d@gmail.com"
            ref={register({ required: true, pattern: re })}
            borderColor={errors.email ? "red.300" : "gray.200"}
          />
          {errors.email && (
            <Text as="span" color="red.300">
              A valid email address is required.
            </Text>
          )}
        </FormControl>
        <FormControl pb="1rem">
          <FormLabel htmlFor="message" className="label" fontWeight="semibold">
            Message
          </FormLabel>
          <Textarea
            name="message"
            rows={10}
            placeholder="Hello"
            ref={register({ required: true, minLength: 2 })}
            borderColor={errors.message ? "red.300" : "gray.200"}
          />
          {errors.message && (
            <Text as="span" color="red.300">
              Please enter a message longer than two characters.
            </Text>
          )}
        </FormControl>
        <Button type="submit" colorScheme="blue" color="white" borderRadius={4}>
          Submit
        </Button>
      </form>
      {isOpen ? (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay>
            <ModalContent p="2rem 0" borderRadius={0}>
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
