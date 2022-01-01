import { Box, Heading } from '@chakra-ui/react'
import { PortableText } from 'lib/sanity'
import { Projects } from 'types/Sanity'
interface ProjectProps {
  project: Projects
}

const ProjectCard = ({ project }: ProjectProps) => {
  const { title, image, projectUrl, repoUrl, description } = project

  return (
    <Box>
      <Heading>{title}</Heading>
      <PortableText blocks={description} />
    </Box>
  )
}

export default ProjectCard
