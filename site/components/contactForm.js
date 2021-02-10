import { memo } from "react"
import { FormiumForm, defaultComponents } from "@formium/react"
import formium from "../lib/formiumClient"
import {
  Box,
  Heading,
  Button,
  FormControl as FControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea as Tarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react"

const Header = ({ children }) => (
  <Heading as="h1" fontFamily="body">
    {children}
  </Heading>
)
const TextInput = (props) => <Input borderRadius={4} {...props} />
const Textarea = (props) => <Tarea borderRadius={4} rows={8} {...props} />
const SubmitButton = ({ children }) => (
  <Button type="submit" colorScheme="blue" color="white" borderRadius={4}>
    {children}
  </Button>
)

const ContactForm = ({ title, form }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const FormControl = memo(function FormControl({
    children,
    description,
    error,
    label,
    labelFor,
  }) {
    return (
      <FControl pb="1rem">
        {label && (
          <FormLabel
            htmlFor={labelFor}
            requiredIndicator={
              <Text as="span" color="blue.600">
                {" "}
                *
              </Text>
            }
          >
            {label}
          </FormLabel>
        )}
        {description && <Text>{description}</Text>}
        {children}
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
      </FControl>
    )
  })

  return (
    <Box
      minW={[0, 0, "45ch"]}
      maxW="45ch"
      p="3rem 1.5rem"
      bg="white"
      borderRadius={4}
      boxShadow="lg"
    >
      {title && (
        <Heading as="h2" pb="1.25rem" fontFamily="body">
          {title}
        </Heading>
      )}
      <FormiumForm
        data={form}
        slug="contact"
        components={{
          ...defaultComponents,
          FormControl,
          Header,
          TextInput,
          Textarea,
          SubmitButton,
        }}
        onSubmit={async (vals) => {
          await formium.submitForm("contact", vals)
          onOpen()
        }}
      />
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

export default ContactForm
