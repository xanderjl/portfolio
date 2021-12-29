import { useRef } from 'react'
import * as three from 'three'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'

const OrbitX = () => {
  const ref = useRef<three.Points>()
  const texture = useTexture('/textures/x.png')

  useFrame(() => {
    ref.current!.rotation.x = ref.current!.rotation.y -= 0.001
  })

  return (
    <points ref={ref}>
      <sphereGeometry attach='geometry' args={[30, 4, 4]} />
      <pointsMaterial attach='material' map={texture} transparent size={0.8} />
    </points>
  )
}

export default OrbitX
