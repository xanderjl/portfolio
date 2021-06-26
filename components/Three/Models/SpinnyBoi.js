import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useTexture } from "@react-three/drei"

const SpinnyBoi = () => {
  const ref = useRef(null)
  const texture = useTexture("/textures/x.png")
  useFrame(() => (ref.current.rotation.y = ref.current.rotation.y += 0.005))

  return (
    <points ref={ref}>
      <torusGeometry attach="geometry" args={[40, 12, 8, 14]} />
      <pointsMaterial attach="material" map={texture} size={1.5} />
    </points>
  )
}

export default SpinnyBoi
