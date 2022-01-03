import { Box, BoxProps, Grid, Icon, Tooltip } from '@chakra-ui/react'
import Link from 'components/Link'
import { ReactElement } from 'react'
import { BsGlobe, BsGithub } from 'react-icons/bs'

interface ProjectLinksProps extends BoxProps {
  projectUrl?: string
  repoUrl?: string
}

const ProjectLinks = ({
  projectUrl,
  repoUrl,
  ...rest
}: ProjectLinksProps): ReactElement => {
  return (
    // @ts-ignore
    <Grid gridTemplateColumns='repeat(2, max-content)' gap={4} {...rest}>
      {projectUrl && (
        <Tooltip label='project'>
          <Box>
            <Link href={projectUrl} isExternal>
              <Icon boxSize={8} as={BsGlobe} />
            </Link>
          </Box>
        </Tooltip>
      )}
      {repoUrl && (
        <Tooltip label='repo'>
          <Box>
            <Link href={repoUrl} isExternal>
              <Icon boxSize={8} as={BsGithub} />
            </Link>
          </Box>
        </Tooltip>
      )}
    </Grid>
  )
}

export default ProjectLinks
