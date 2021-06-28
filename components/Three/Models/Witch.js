import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"

export default function Witch(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF("/models/witch.gltf")
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Cube020.geometry}
          material={nodes.Cube020.material}
        />
        <mesh
          geometry={nodes.Cube020_1.geometry}
          material={nodes.Cube020_1.material}
        />
        <mesh
          geometry={nodes.Cube020_2.geometry}
          material={nodes.Cube020_2.material}
        />
        <mesh
          geometry={nodes.Cube020_3.geometry}
          material={nodes.Cube020_3.material}
        />
        <group position={[0.2, 0, -0.63]}>
          <mesh
            geometry={nodes.Cube018.geometry}
            material={nodes.Cube018.material}
          />
          <mesh
            geometry={nodes.Cube018_1.geometry}
            material={nodes.Cube018_1.material}
          />
        </group>
        <group position={[-0.2, 0, -0.63]}>
          <mesh
            geometry={nodes.Cube019.geometry}
            material={nodes.Cube019.material}
          />
          <mesh
            geometry={nodes.Cube019_1.geometry}
            material={nodes.Cube019_1.material}
          />
        </group>
        <group position={[0, 0, -0.7]}>
          <mesh
            geometry={nodes.Cube017.geometry}
            material={nodes.Cube017.material}
          />
          <mesh
            geometry={nodes.Cube017_1.geometry}
            material={nodes.Cube017_1.material}
          />
          <mesh
            geometry={nodes.Cube017_2.geometry}
            material={materials["Green.003"]}
          />
          <group position={[0, -0.07, -0.77]} rotation={[-0.26, 0, 0]}>
            <mesh
              geometry={nodes.Cube016.geometry}
              material={nodes.Cube016.material}
            />
            <mesh
              geometry={nodes.Cube016_1.geometry}
              material={nodes.Cube016_1.material}
            />
            <mesh
              geometry={nodes.Cube016_2.geometry}
              material={nodes.Cube016_2.material}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload("/models/witch.gltf")
