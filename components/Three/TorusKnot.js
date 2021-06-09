import { useState, useRef } from "react"
import { useFrame } from "@react-three/fiber"

const TorusKnot = props => {
  const mesh = useRef()
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame(() => (mesh.current.rotation.x += 0.04))

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <torusKnotGeometry args={[1.2, 0.6, 100, 16]} />
      <meshStandardMaterial color={hovered ? "hotpink" : 0xffff00} />
    </mesh>
  )
}

export default TorusKnot
