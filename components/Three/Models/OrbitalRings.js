import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import Circle from "../Shapes/Circle"

const InnerRing = ({ theme }) => {
  const ref = useRef()
  useFrame(() => {
    ref.current.rotation.y -= 0.005
  }, [])

  return (
    <mesh ref={ref} rotation={[0 * (Math.PI / 180), 0, 0]}>
      <Circle radius={2.5} color={theme.colors.gray[600]} lineWidth={3} />
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
      <Circle radius={8} color={theme.colors.primary[400]} lineWidth={1} />
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
      <Circle radius={10} color={theme.colors.gray[100]} lineWidth={2} />
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
      <Circle radius={13.5} color={theme.colors.gray[50]} lineWidth={1} />
    </mesh>
  )
}

const OrbitalRings = ({ theme }) => {
  return (
    <group>
      <InnerRing theme={theme} />
      <CentralRing theme={theme} />
      <CentralRing2 theme={theme} />
      <OuterRing theme={theme} />
    </group>
  )
}

export default OrbitalRings
