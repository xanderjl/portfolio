import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import Circle from "../Shapes/Circle"

const InnerRing = ({ theme }) => {
  const ref = useRef()
  // useFrame(() => {
  //   ref.current.rotation.y -= 0.005
  // }, [])

  return (
    <mesh ref={ref} rotation={[0, 0, 0]}>
      <Circle radius={2.5} color={theme.colors.gray[200]} lineWidth={1.5} />
    </mesh>
  )
}
const CentralRing = ({ theme }) => {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (clock.elapsedTime > 0.6) {
      ref.current.rotation.y += 0.005
    }
  }, [])

  return (
    <mesh ref={ref} rotation={[45 * (Math.PI / 180), 0, 0]}>
      <Circle radius={7} color={theme.colors.primary[400]} lineWidth={1} />
    </mesh>
  )
}
const CentralRing2 = ({ theme }) => {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (clock.elapsedTime > 1.2) {
      ref.current.rotation.y -= 0.005
    }
  }, [])

  return (
    <mesh ref={ref} rotation={[90 * (Math.PI / 180), 0, 0]}>
      <Circle radius={9} color={theme.colors.gray[400]} lineWidth={1} />
    </mesh>
  )
}
const OuterRing = ({ theme }) => {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (clock.elapsedTime > 1.6) {
      ref.current.rotation.y += 0.005
    }
  }, [])

  return (
    <mesh ref={ref} rotation={[0 * (Math.PI / 180), 0, 0]}>
      <Circle radius={13.5} color={theme.colors.gray[50]} lineWidth={0.5} />
    </mesh>
  )
}

const OrbitalRings = ({ theme, ...rest }) => {
  return (
    <group {...rest}>
      <InnerRing theme={theme} />
      <CentralRing theme={theme} />
      <CentralRing2 theme={theme} />
      <OuterRing theme={theme} />
    </group>
  )
}

export default OrbitalRings
