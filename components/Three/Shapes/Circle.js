import { Line } from "@react-three/drei"

const Circle = ({ radius, ...rest }) => {
  const points = []
  const rad = (radius && radius) || 10

  for (let i = 0; i <= 360; i++) {
    points.push(
      Math.sin(i * (Math.PI / 180)) * rad,
      Math.cos(i * (Math.PI / 180)) * rad,
      0
    )
  }
  console.log(points)

  return <Line points={points} color="black" lineWidth={6} {...rest} />
}

export default Circle
