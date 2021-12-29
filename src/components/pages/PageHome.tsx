import React, { ReactElement } from 'react'
import Layout from 'components/Layout'
import { Box, Heading, useTheme } from '@chakra-ui/react'
import { Canvas } from '@react-three/fiber'
import Lighting from 'components/threejs/Lighting/Lighting'
import PlaneGroup from 'components/threejs/PlaneGroup'
import { Stars } from '@react-three/drei'
import Orbit from 'components/threejs/Orbit'
import OrbitDots from 'components/threejs/Orbitdots'
import OrbitalRings from 'components/threejs/OrbitalRings'

const PageHome = (): ReactElement => {
  const theme = useTheme()

  return (
    <Layout title='Home'>
      <Box
        position='absolute'
        left='50%'
        top='50%'
        transform='translate(-50%, -100%)'
        zIndex={2}
      >
        <Heading size='4xl'>WELCOME</Heading>
      </Box>
      <Box h={{ base: 'calc(100vh - 64px)', md: 'calc(100vh - 72px)' }}>
        <Canvas camera={{ position: [0, 0, 80], fov: 40 }}>
          <Lighting />
          <PlaneGroup theme={theme} />
          <OrbitalRings theme={theme} position={[-0.5, 0.6, 0]} />
          <Stars />
          <Orbit />
          <OrbitDots theme={theme} />
        </Canvas>
      </Box>
    </Layout>
  )
}

export default PageHome
