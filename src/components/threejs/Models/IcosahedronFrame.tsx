import { useRef } from 'react'
import * as three from 'three'
import { useFrame } from '@react-three/fiber'
import { Icosahedron } from '@react-three/drei'
import ChakraTheme from 'types/ChakraTheme'

interface Props {
  theme: ChakraTheme
}

const IcosahedronFrame = ({ theme, ...rest }: Props) => {
  const ref = useRef<three.Mesh>()

  useFrame(() => {
    ref.current!.rotation.y = ref.current!.rotation.x += 0.01
  })

  return (
    <Icosahedron ref={ref} castShadow args={[4]} {...rest}>
      <meshBasicMaterial
        attach='material'
        color={theme.colors.gray[600]}
        wireframe
      />
    </Icosahedron>
  )
}

export default IcosahedronFrame
