import { useRef } from "react"
import { useGLTF } from "@react-three/drei"

export default function Wall(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF("/models/wall.gltf")
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Cube4230.geometry}
          material={materials["Stone.050"]}
        />
        <mesh
          geometry={nodes.Cube4230_1.geometry}
          material={materials["StoneDark.011"]}
        />
      </group>
    </group>
  )
}

useGLTF.preload("/models/wall.gltf")