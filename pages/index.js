import { Suspense, useRef } from "react"
import { Box, Heading, useTheme } from "@chakra-ui/react"
import Layout from "@components/layout"
import { Canvas, useFrame } from "@react-three/fiber"
import {
  Dodecahedron,
  Icosahedron,
  Sphere,
  Stars,
  useTexture,
} from "@react-three/drei"
import OrbitalRings from "@components/Three/Models/OrbitalRings"
import Circle from "@Three/Shapes/Circle"

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
      <LilRings theme={theme} position={[-25, 0, 0]}>
        <DodecahedronFrame theme={theme} />
      </LilRings>
      <LilRings
        theme={theme}
        position={[25, 0, 0]}
        rotation={[55 * (Math.PI / 180), 0, 0]}
      >
        <IcosahedronFrame theme={theme} />
      </LilRings>
    </group>
  )
}

const LilRings = ({ theme, children, ...rest }) => {
  const innerRef = useRef()
  const outerRef = useRef()

  useFrame(() => {
    innerRef.current.rotation.x = innerRef.current.rotation.y += 0.005
    outerRef.current.rotation.x = outerRef.current.rotation.y += 0.004
  }, [])

  return (
    <group {...rest}>
      <mesh ref={innerRef}>
        <Circle
          rotation={[30 * (Math.PI / 180), 0, 0]}
          lineWidth={0.2}
          color={theme.colors.gray[200]}
          radius={6}
        />
      </mesh>
      {children}
      <group ref={outerRef}>
        <Circle
          lineWidth={0.2}
          color={theme.colors.primary[400]}
          radius={5.7}
        />
        <Sphere args={[0.2, 8]} position={[5.7, 0, 0]} color={theme.colors.gray[700]} />
        <Sphere args={[0.4, 8]} position={[-5.7, 0, 0]} color={theme.colors.gray[700]}/>
      </group>
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
          <OrbitalRings theme={theme} position={[-0.5, 0.6, 0]} />
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
