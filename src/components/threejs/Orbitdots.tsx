import { useRef } from 'react'
import * as three from 'three'
import { useFrame } from '@react-three/fiber'
import ChakraTheme from 'types/ChakraTheme'

interface Props {
  theme: ChakraTheme
}

const OrbitDots = ({ theme }: Props) => {
  const ref = useRef<three.Points>()

  useFrame(() => {
    ref.current!.rotation.x = ref.current!.rotation.y += 0.0005
  })

  return (
    <points ref={ref}>
      <sphereGeometry attach='geometry' args={[80, 10, 6]} />
      <pointsMaterial
        attach='material'
        color={theme.colors.gray[700]}
        size={0.6}
      />
    </points>
  )
}

export default OrbitDots
