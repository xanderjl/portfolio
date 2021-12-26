import { Line, LineProps } from '@react-three/drei'

interface Props extends Omit<LineProps, 'points' | 'ref'> {
  radius?: number
}

const Circle = ({ radius, ...rest }: Props) => {
  const points: Array<[number, number, number]> = []
  const rad = radius || 10

  for (let i = 0; i <= 360; i++) {
    points.push([
      Math.sin(i * (Math.PI / 180)) * rad,
      Math.cos(i * (Math.PI / 180)) * rad,
      0
    ])
  }

  return <Line color='black' lineWidth={6} points={points} {...rest} />
}

export default Circle
