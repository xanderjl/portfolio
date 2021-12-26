import { useRef } from 'react'
import * as three from 'three'
import { useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'

const Orbit = () => {
  const ref = useRef<three.Mesh>()

  useFrame(() => {
    ref.current!.rotation.y = ref.current!.rotation.y += 0.001
  })

  return (
    <Sphere ref={ref} args={[100, 18, 14]}>
      <meshBasicMaterial wireframe />
    </Sphere>
  )
}

export default Orbit
