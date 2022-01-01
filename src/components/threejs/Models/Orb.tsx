import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useTexture } from "@react-three/drei"
import { Sphere } from "@react-three/drei"
import * as three from 'three'

const Orb = () => {
  const orbRef = useRef<three.Mesh>(null)
  const texture = useTexture("/textures/missing-texture.png")
  useFrame(
    () => (orbRef.current!.rotation.x = orbRef.current!.rotation.y += 0.01)
  )

  return (
    <Sphere ref={orbRef} castShadow args={[3, 80, 80]}>
      <meshStandardMaterial map={texture} />
    </Sphere>
  )
}

export default Orb
