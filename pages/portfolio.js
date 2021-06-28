import {
  Heading,
  Container,
  Box,
  Image,
  Stack,
  Icon,
  Flex,
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import { AiFillGithub } from "react-icons/ai"
import { FiGlobe } from "react-icons/fi"
import { groq } from "next-sanity"
import { getClient } from "@lib/sanity/server"
import Layout from "@components/layout"
import Link from "@components/Link"
import { PortableText, urlFor } from "@lib/sanity"
import LinkHighlighted from "@components/LinkHighlighted"

const MotionStack = motion(Stack)
const MotionImage = motion(Image)

const animations = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    ease: "easeInOut",
    type: "spring",
    stiffness: 100,
    duration: 0.1,
  },
}

const Portfolio = ({ projects }) => {
  return (
    <Layout title="Portfolio">
      <Container maxW="container.lg" p="3rem 1.25rem 5rem 1.25rem">
        {projects.map((project, i) => {
          const {
            title,
            description,
            image,
            projectUrl,
            repoUrl,
            technologies,
          } = project
          return (
            <Stack
              key={i}
              direction={{
                base: "column-reverse",
                md: i % 2 === 0 ? "row" : "row-reverse",
              }}
              spacing={10}
              p="3rem 1.25rem"
            >
              <MotionStack
                direction="column"
                maxW={{ base: "100%", md: "50%" }}
                initial={animations.initial}
                animate={animations.animate}
                transition={animations.transition}
              >
                <Heading>{title}</Heading>
                <Stack direction="row">
                  <Link href={projectUrl} isExternal>
                    <Icon as={FiGlobe} /> Site
                  </Link>
                  <Link href={repoUrl} isExternal>
                    <Icon as={AiFillGithub} /> Repo
                  </Link>
                </Stack>
                <Box pb={4}>
                  <PortableText blocks={description} />
                </Box>
                <Stack>
                  <Heading as="h3" size="md">
                    The Stack
                  </Heading>
                  <Flex direction="row" flexWrap="wrap">
                    {technologies.map(tech => {
                      const { url, title, _id } = tech
                      return (
                        <LinkHighlighted key={_id} href={url} mr={2} whiteSpace="nowrap">
                          {title}
                        </LinkHighlighted>
                      )
                    })}
                  </Flex>
                </Stack>
              </MotionStack>
              <Link href={projectUrl} maxW={{ base: "100%", md: "50%" }}>
                <MotionImage
                  alignSelf="flex-start"
                  src={urlFor(image?.url)
                    .size(800, 600)
                    .focalPoint(0.5, 0)
                    .fit("crop")
                    .crop("focalpoint")
                    .url()}
                  placeholder={image?.metadata?.lqip}
                  border="1px solid"
                  borderColor="gray.300"
                  borderRadius={4}
                  boxShadow="md"
                  initial={animations.initial}
                  animate={animations.animate}
                  transition={{
                    ...animations.transition,
                    delay: 0.2,
                  }}
                />
              </Link>
            </Stack>
          )
        })}
      </Container>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const projects = await getClient().fetch(groq`
    *[_type == "projects"]{
      _id,
      title,
      repoUrl,
      projectUrl,
      description,
      "image": image.asset->{
        metadata,
        url
      },
      technologies[]->{
        _id,
        title,
        url
      }
    }
  `)

  return {
    props: { projects },
  }
}

export default Portfolio
