import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Cauldron = (props: any) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/cauldron.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Sphere015.geometry}
        material={materials['Black.005']}
      />
      <mesh
        geometry={nodes.Sphere015_1.geometry}
        material={materials.GreenLight}
      />
      <mesh geometry={nodes.Sphere015_2.geometry} material={materials.Green} />
      <mesh
        geometry={nodes.Sphere015_3.geometry}
        material={materials.BrownDark}
      />
    </group>
  )
}

useGLTF.preload('/models/cauldron.gltf')

export default Cauldron
