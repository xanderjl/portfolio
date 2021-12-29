import { useRef, useState } from 'react'
import { useSpring, a } from '@react-spring/three'
import { useGLTF, MeshWobbleMaterial } from '@react-three/drei'

const Coffee = ({ factor, speed, ...rest }: any) => {
  const group = useRef()
  const [expand, setExpand] = useState(false)
  const bippy = useSpring({
    scale: expand ? [1.1, 1.1, 1.1] : [1, 1, 1]
  })
  const { nodes } = useGLTF('/models/coffee.gltf')
  return (
    <a.group
      ref={group}
      onClick={() => setExpand(!expand)}
      scale={bippy.scale}
      {...rest}
      dispose={null}
    >
      <mesh geometry={nodes.Cup.geometry}>
        <MeshWobbleMaterial
          attach='material'
          factor={factor}
          speed={speed}
          color='skyblue'
        />
        <mesh geometry={nodes.Cube.geometry}>
          <MeshWobbleMaterial
            attach='material'
            factor={factor}
            speed={speed}
            color='hotpink'
          />
        </mesh>
      </mesh>
    </a.group>
  )
}

useGLTF.preload('/models/coffee.gltf')

export default Coffee
