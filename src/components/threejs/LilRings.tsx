import React, { ReactElement, ReactNode, useRef } from 'react'
import { useFrame, GroupProps } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import * as three from 'three'
import Circle from './Circle'
import ChakraTheme from 'types/ChakraTheme'

interface Props extends GroupProps {
  theme: ChakraTheme
  children?: ReactNode | ReactNode[] | string
  rest?: any
}

const LilRings = ({ theme, children, ...rest }: Props): ReactElement => {
  const innerRef = useRef<three.Mesh>()
  const outerRef = useRef<three.Group>()

  useFrame(() => {
    innerRef.current!.rotation.x = innerRef.current!.rotation.y += 0.005
    outerRef.current!.rotation.x = outerRef.current!.rotation.y += 0.004
  })

  return (
    <group {...rest}>
      <mesh ref={innerRef}>
        <Circle
          rotation={[30 * (Math.PI / 180), 0, 0]}
          lineWidth={0.7}
          color={theme.colors.gray[200]}
          radius={6}
        />
      </mesh>
      {children}
      <group ref={outerRef}>
        <Circle
          lineWidth={0.7}
          color={theme.colors.primary[400]}
          radius={5.7}
        />
        <Sphere args={[0.2, 8]} position={[5.7, 0, 0]}>
          <meshBasicMaterial color={theme.colors.gray[700]} />
        </Sphere>
        <Sphere args={[0.4, 8]} position={[-5.7, 0, 0]}>
          <meshBasicMaterial color={theme.colors.gray[700]} />
        </Sphere>
      </group>
    </group>
  )
}

export default LilRings
