import { Box, Heading, Text, Container } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Layout from 'components/Layout'
import FrontMatter from 'types/FrontMatter'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import BlogComponents from 'components/blogComponents'
import { ReactElement } from 'react'

const MotionBox = motion(Box)

interface Props {
  mdxSource: MDXRemoteSerializeResult
  frontMatter: FrontMatter
}

const Blog = ({ mdxSource, frontMatter }: Props): ReactElement => {
  const { title, date } = frontMatter

  return (
    <Layout title={`${title} - Garden`}>
      <MotionBox
        display='flex'
        flexDirection='column'
        alignItems='center'
        maxW='70ch'
        m='0 auto'
        mt='3rem'
        bg='white'
        border='1px solid'
        borderColor='gray.200'
        borderRadius={4}
        boxShadow='lg'
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5
        }}
      >
        <Container maxW='3xl' p='3rem 1.25rem 1.25rem 1.25rem'>
          <Heading as='h1' fontFamily='body'>
            {title}
          </Heading>
          <Text as='span'>{date}</Text>
        </Container>
        <Container maxW='3xl' p='0 1.25rem 7rem 1.25rem'>
          <MDXRemote {...mdxSource} components={BlogComponents} />
        </Container>
      </MotionBox>
    </Layout>
  )
}

export default Blog
