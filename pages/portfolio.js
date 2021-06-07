import {
  Link,
  Heading,
  Container,
  Box,
  Grid,
  Flex,
  Icon,
  Image,
} from "@chakra-ui/react"
import PortableText from "@sanity/block-content-to-react"
import { motion } from "framer-motion"
import Layout from "../components/layout"
import { AiFillGithub } from "react-icons/ai"
import serializers from "../lib/serializers"
import { getClient } from "@lib/sanity/server"
import groq from "groq"
import { urlFor } from "@lib/sanity"

const Portfolio = ({ projects }) => {
  const MotionBox = motion(Box)

  return (
    <Layout title="Portfolio">
      <Container maxW="xl" p="3rem 1.25rem">
        <Grid
          gridTemplateColumns={{
            base: "minmax(0, 1fr)",
            md: "repeat(auto-fill, minmax(400px, 1fr))",
          }}
          gap="3rem"
        >
          {projects.map((project, i) => {
            const {
              _id,
              title,
              repoUrl,
              projectUrl,
              image,
              technologies,
              descriptionRaw,
            } = project

            const { [technologies.length - 1]: last } = technologies

            return (
              <MotionBox
                key={_id}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: `0.${i}`, type: "tween" }}
                bg="white"
                borderRadius={4}
                boxShadow="lg"
                overflow="hidden"
              >
                <Link href={projectUrl} _hover={{ opacity: "0.75" }}>
                  <Image
                    src={urlFor(image?.url).width(800).height(800)}
                    alt={`A screenshot of ${title}'s homepage.`}
                    objectFit="cover"
                  />
                </Link>
                <Flex flexDir="column" p="2rem 1.25rem 5rem 1.25rem">
                  <Heading pb="1rem" size="lg" fontFamily="body">
                    <Link
                      href={projectUrl}
                      p="0.25rem 0.5rem"
                      _hover={{
                        textDecoration: "none",
                        bg: "blue.100",
                        color: "gray.700",
                        borderRadius: "4px",
                      }}
                    >
                      {title}
                    </Link>
                  </Heading>
                  <Flex>
                    <Link
                      href={repoUrl}
                      _hover={{
                        textDecoration: "none",
                        bg: "blue.100",
                        color: "gray.700",
                        borderRadius: "4px",
                      }}
                    >
                      <Icon as={AiFillGithub} boxSize={{ base: 8, md: 12 }} />
                    </Link>
                    <Flex pb="1rem" wrap="wrap">
                      {technologies.map((tech) => {
                        const { _id, title, url } = tech
                        return (
                          <Link
                            key={_id}
                            href={url}
                            p="0.25rem 0.5rem"
                            _hover={{
                              textDecoration: "none",
                              bg: "blue.100",
                              color: "gray.700",
                              borderRadius: "4px",
                            }}
                          >
                            {title === last.title ? title : title}
                          </Link>
                        )
                      })}
                    </Flex>
                  </Flex>
                  <Flex>
                    {descriptionRaw && (
                      <PortableText
                        blocks={descriptionRaw}
                        serializers={serializers}
                      />
                    )}
                  </Flex>
                </Flex>
              </MotionBox>
            )
          })}
        </Grid>
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
        title,
        description,
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
