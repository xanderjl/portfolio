import { Suspense, useRef } from "react"
import { Box, Heading, useTheme } from "@chakra-ui/react"
import Layout from "@components/layout"
import { Canvas, useFrame } from "@react-three/fiber"
import {
  Dodecahedron,
  Icosahedron,
  Sphere,
  Stars,
  Torus,
  useTexture,
} from "@react-three/drei"

const Lighting = () => (
  <>
    <ambientLight intensity={0.3} />
    <directionalLight castShadow position={[-5, 10, 10]} intensity={0.8} />
  </>
)

const DodecahedronFrame = ({ theme, ...rest }) => {
  const ref = useRef()

  useFrame(() => {
    ref.current.rotation.x = ref.current.rotation.y += 0.005
  }, [])

  return (
    <Dodecahedron ref={ref} castShadow args={[4]} {...rest}>
      <meshBasicMaterial
        attach="material"
        color={theme.colors.gray[600]}
        wireframe
      />
    </Dodecahedron>
  )
}

const IcosahedronFrame = ({ theme, ...rest }) => {
  const ref = useRef()

  useFrame(() => {
    ref.current.rotation.y = ref.current.rotation.x += 0.01
  }, [])

  return (
    <Icosahedron ref={ref} castShadow args={[4]} {...rest}>
      <meshBasicMaterial
        attach="material"
        color={theme.colors.gray[600]}
        wireframe
      />
    </Icosahedron>
  )
}

const Donut = ({ theme }) => {
  const ref = useRef()

  useFrame(() => {
    ref.current.rotation.y += 0.002
  }, [])

  return (
    <Torus ref={ref} args={[14, 2.4, 40, 40]} rotation={[35, 0, 0]}>
      <meshPhongMaterial
        attach="material"
        color={theme.colors.primary[400]}
        reflectivity={1}
      />
    </Torus>
  )
}

const OrbitDots = ({ theme }) => {
  const ref = useRef()

  useFrame(() => {
    ref.current.rotation.x = ref.current.rotation.y += 0.0005
  }, [])

  return (
    <points ref={ref}>
      <sphereGeometry attach="geometry" args={[80, 10, 6]} />
      <pointsMaterial
        attach="material"
        color={theme.colors.gray[700]}
        size={0.6}
      />
    </points>
  )
}

const OrbitX = () => {
  const ref = useRef()
  const texture = useTexture("/textures/x.png")

  useFrame(() => {
    ref.current.rotation.x = ref.current.rotation.y -= 0.001
  }, [])

  return (
    <points ref={ref}>
      <sphereGeometry attach="geometry" args={[30, 4, 4]} />
      <pointsMaterial attach="material" map={texture} transparent size={0.8} />
    </points>
  )
}

const Orbit = () => {
  const ref = useRef()

  useFrame(() => {
    ref.current.rotation.y = ref.current.rotation.y += 0.001
  }, [])

  return (
    <Sphere ref={ref} args={[100, 18, 14]}>
      <meshBasicMaterial wireframe />
    </Sphere>
  )
}

const PlaneGroup = ({ theme }) => {
  const ref = useRef()

  useFrame(() => {
    ref.current.rotation.y -= 0.003
  }, [])

  return (
    <group ref={ref} rotation={[3.7, 90, 0]}>
      <DodecahedronFrame theme={theme} position={[-25, 0, 0]} />
      <IcosahedronFrame theme={theme} position={[25, 0, 0]} />
    </group>
  )
}

const IndexPage = () => {
  const theme = useTheme()

  return (
    <Layout title="Home">
      <Box
        position="absolute"
        left="50%"
        top="50%"
        transform="translate(-50%, -100%)"
        zIndex={2}
      >
        <Heading size="4xl">WELCOME</Heading>
      </Box>
      <Box h={{ base: "calc(100vh - 64px)", md: "calc(100vh - 72px)" }}>
        <Canvas camera={{ position: [0, 0, 80], fov: 40 }}>
          <Lighting />
          <PlaneGroup theme={theme} />
          <Donut theme={theme} />
          <Stars />
          <Orbit />
          <OrbitDots theme={theme} />
          <Suspense fallback={null}>
            <OrbitX />
          </Suspense>
        </Canvas>
      </Box>
    </Layout>
  )
}

export default IndexPage
