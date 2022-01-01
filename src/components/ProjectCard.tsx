import { Box, Heading, Text } from '@chakra-ui/react'
import Link from 'components/Link'
import Image from 'next/image'
import { Project } from 'types/CustomSanity'

interface ProjectProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectProps) => {
  const { title, image, projectUrl, repoUrl, slug } = project

  return (
    <Box>
      <Box width={300} height={300}>
        <Image
          src={image.url as string}
          width={400}
          height={400}
          layout='responsive'
        />
      </Box>
      <Box>
        <Heading>{title}</Heading>
        <Link href={`/projects/${slug}`} textTransform='uppercase'>
          read more &#8594;
        </Link>
      </Box>
    </Box>
  )
}

export default ProjectCard
