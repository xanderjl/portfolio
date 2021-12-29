import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const LampPost = (props: any) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/lamp-post.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Cylinder096.geometry}
        material={materials['Black.012']}
      />
      <mesh
        geometry={nodes.Cylinder096_1.geometry}
        material={materials['Yellow.007']}
      />
    </group>
  )
}

useGLTF.preload('/models/lamp-post.gltf')

export default LampPost
