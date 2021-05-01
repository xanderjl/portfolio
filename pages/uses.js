import { Box, Link, Container, Grid, Image } from "@chakra-ui/react"
import PortableText from "@sanity/block-content-to-react"
import { motion } from "framer-motion"
import Layout from "../components/layout"
import serializers from "../lib/serializers"
import { fetchSanityContent } from "../lib/queries"

const sectionVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
}

const gridVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
}

const textChild = {
  hidden: {
    x: 60,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
}

const MotionBox = motion(Box)
const MotionLink = motion(Link)
const MotionContainer = motion(Container)
const MotionGrid = motion(Grid)
const MotionImage = motion(Image)

const Uses = ({ data }) => {
  const { title, metaDescription, body } = data.Uses
  return (
    <Layout title={title} description={metaDescription}>
      <MotionBox
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        p="3rem 1.25rem"
      >
        {body.map(section => {
          const { _key, array, bodyRaw } = section
          return (
            <MotionContainer
              key={_key}
              maxW="xl"
              variants={sectionVariants}
              p="0"
              pb={{ base: "3rem", md: "5rem" }}
            >
              <MotionGrid
                variants={gridVariants}
                gridTemplateColumns={{
                  base: "minmax(0, 1fr)",
                  md: "repeat(2, 1fr)",
                }}
                columnGap={{ base: 0, md: "1rem" }}
                rowGap="2rem"
                justifyContent="start"
                alignItems="start"
              >
                <MotionBox display="flex">
                  {array.map((item, i) => {
                    const { id, title, url, icon } = item
                    return (
                      <MotionLink
                        maxW={{ base: "60px", sm: "72px", md: "80px" }}
                        maxH="auto"
                        mr="1rem"
                        key={i}
                        href={url}
                        isExternal
                        flex={1}
                      >
                        <MotionImage
                          src={icon.asset.url}
                          alt={`${title} logo`}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: i * 0.3,
                            type: "spring",
                            stiffness: 200,
                          }}
                          whileHover={{
                            scale: 1.1,
                            transition: {
                              duration: 0.1,
                              type: "tween",
                            },
                          }}
                        />
                      </MotionLink>
                    )
                  })}
                </MotionBox>
                <MotionBox maxW="55ch" variants={textChild}>
                  <PortableText blocks={bodyRaw} serializers={serializers} />
                </MotionBox>
              </MotionGrid>
            </MotionContainer>
          )
        })}
      </MotionBox>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const data = await fetchSanityContent({
    query: `
      query {
        Uses(id: "uses") {
          title
          metaDescription
          body {
            _key
            bodyRaw
            array {
              _id
              title
              url
              icon {
                asset {
                  url
                }
              }
            }
          }
        }
      }
    `,
  })

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    props: { ...data },
  }
}

export default Uses
