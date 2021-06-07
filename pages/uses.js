import Layout from "../components/layout"
import { Box, Link, Container, Grid, Image } from "@chakra-ui/react"
import { motion } from "framer-motion"
import PortableText from "@sanity/block-content-to-react"
import serializers from "../lib/serializers"
import { getClient } from "@lib/sanity/server"
import { groq } from "next-sanity"

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
  const { title, metaDescription, body } = data
  return (
    <Layout title={title} description={metaDescription}>
      <MotionBox
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        p="3rem 1.25rem"
      >
        {body.map(section => {
          const { _key, array, body } = section
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
                    const { _id, title, url, icon } = item
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
                          src={icon.url}
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
                  <PortableText blocks={body} serializers={serializers} />
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
  const data = await getClient().fetch(groq`
    *[_type == "uses"]{
        title,
        metaDescription,
        body[]{
          _key,
          array[]->{
            _id,
            title,
            url,
            "icon": icon.asset->{
              url
            }
          },
          body[]
        }
    }[0]
  `)

  return {
    props: { data },
  }
}

export default Uses
