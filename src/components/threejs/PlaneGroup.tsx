import { useRef } from 'react'
import * as three from 'three'
import { useFrame } from '@react-three/fiber'
import LilRings from './LilRings'
import DodecahedronFrame from './DodecahedronFrame'
import IcosahedronFrame from './IcosahedronFrame'
import ChakraTheme from 'types/ChakraTheme'

interface Props {
  theme: ChakraTheme
}

const PlaneGroup = ({ theme }: Props) => {
  const ref = useRef<three.Group>()

  useFrame(() => {
    ref.current!.rotation.y -= 0.003
  })

  return (
    <group ref={ref} rotation={[3.7, 90, 0]}>
      <LilRings theme={theme} position={[-25, 0, 0]}>
        <DodecahedronFrame theme={theme} />
      </LilRings>
      <LilRings
        theme={theme}
        position={[25, 0, 0]}
        rotation={[55 * (Math.PI / 180), 0, 0]}
      >
        <IcosahedronFrame theme={theme} />
      </LilRings>
    </group>
  )
}

export default PlaneGroup
