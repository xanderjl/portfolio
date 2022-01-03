import { AspectRatio, Box, Heading, useTheme } from '@chakra-ui/react'
import Link from 'components/Link'
import Image from 'next/image'
import { Project } from 'types/CustomSanity'
import ProjectLinks from './ProjectLinks'

interface ProjectProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectProps) => {
  const { title, image, projectUrl, repoUrl, slug } = project
  const theme = useTheme()

  return (
    <Box maxW={800} borderRadius={8} overflow='hidden' boxShadow='md'>
      <AspectRatio ratio={4 / 3} boxShadow='inner'>
        <Image
          alt={`screenshot of ${title}`}
          src={image?.url as unknown as string}
          layout='fill'
          objectFit='cover'
          objectPosition='top'
        />
      </AspectRatio>
      <Box px={4} py={8}>
        <Heading>{title}</Heading>
        <ProjectLinks projectUrl={projectUrl} repoUrl={repoUrl} pb={4} />
        <Link
          href={`/projects/${slug}`}
          fontSize='lg'
          px='2px'
          textTransform='uppercase'
          bg={`linear-gradient(to top, ${theme.colors.primary[400]} 50%, transparent 50% )`}
          _hover={{
            background: `linear-gradient(to top, ${theme.colors.primary[200]} 50%, transparent 50% )`
          }}
        >
          read more
        </Link>
      </Box>
    </Box>
  )
}

export default ProjectCard
