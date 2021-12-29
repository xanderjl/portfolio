import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Peely = (props: any) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/agent-peely/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group rotation={[Math.PI / 2, 0, 0]}>
              <group scale={0.01}>
                <primitive object={nodes.GLTF_created_0_rootJoint} />
                <skinnedMesh
                  geometry={nodes.Object_11.geometry}
                  material={materials.material_1}
                  skeleton={nodes.Object_11.skeleton}
                />
                <skinnedMesh
                  geometry={nodes.Object_13.geometry}
                  material={materials.material_0}
                  skeleton={nodes.Object_13.skeleton}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/agent-peely/scene.gltf')

export default Peely
