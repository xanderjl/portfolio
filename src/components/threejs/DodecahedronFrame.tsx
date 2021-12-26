import { Dodecahedron } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as three from 'three'
import ChakraTheme from 'types/ChakraTheme'

interface Props {
  theme: ChakraTheme
}

const DodecahedronFrame = ({ theme, ...rest }: Props) => {
  const ref = useRef<three.Mesh>()

  useFrame(() => {
    ref.current!.rotation.x = ref.current!.rotation.y += 0.005
  })

  return (
    <Dodecahedron ref={ref} castShadow args={[4]} {...rest}>
      <meshBasicMaterial
        attach='material'
        color={theme.colors.gray[600]}
        wireframe
      />
    </Dodecahedron>
  )
}

export default DodecahedronFrame
