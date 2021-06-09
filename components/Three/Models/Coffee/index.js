import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"

export default function Coffee(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF("/models/coffee.gltf")
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Cup.geometry} material={nodes.Cup.material}>
        <mesh geometry={nodes.Cube.geometry} material={nodes.Cube.material} />
      </mesh>
    </group>
  )
}

useGLTF.preload("/models/coffee.gltf")
