import {
  Box,
  Heading,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
} from "@chakra-ui/react"
import { useForm, ValidationError } from "@formspree/react"
import { motion } from "framer-motion"

const MotionBox = motion(Box)

const ContactForm = ({ title }) => {
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID
  )
  const { submitting, errors, succeeded } = state
  if (succeeded) {
    return <Heading>Thankies :^ )</Heading>
  }

  return (
    <MotionBox
      as="form"
      bg="white"
      p="3rem 1.25rem"
      flex={1}
      minW="100%"
      border="1px solid"
      borderColor="gray.200"
      borderRadius={4}
      boxShadow="md"
      onSubmit={handleSubmit}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.1,
        delay: 0.3,
        type: "spring",
        stiffness: 100,
      }}
    >
      {title && <Heading>{title}</Heading>}
      <FormControl>
        <FormLabel htmlFor="Name">Name</FormLabel>
        <Input id="name" name="name" placeholder="Jane Doe" />
        <FormErrorMessage>
          <ValidationError prefix="Name" field="name" errors={errors} />
        </FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="jane@doe.com"
        />
        <FormErrorMessage>
          <ValidationError prefix="Email" field="email" errors={errors} />
        </FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel>Message</FormLabel>
        <Textarea id="message" name="message" rows={8} placeholder="Hello!" />
        <FormErrorMessage>
          <ValidationError prefix="Message" field="message" errors={errors} />
        </FormErrorMessage>
      </FormControl>
      <Button type="submit" disabled={submitting} colorScheme="primary">
        Submit
      </Button>
    </MotionBox>
  )
}

export default ContactForm
