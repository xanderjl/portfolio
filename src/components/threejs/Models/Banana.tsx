import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Banana = (props: any) => {
  const group = useRef()
  // @ts-ignore
  const { nodes, materials } = useGLTF('/models/banana.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Mesh_banana.geometry}
        material={materials.brownDark}
      />
      <mesh
        geometry={nodes.Mesh_banana_1.geometry}
        material={materials.yellow}
      />
    </group>
  )
}

useGLTF.preload('/models/banana.gltf')

export default Banana
