import { Plane } from "@react-three/drei"
import * as THREE from "three"

const Grid8 = ({ points, ...rest }) => {
  const [x, y, z] = Array(2)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(8))

  return (
    <mesh>
      <bufferGeometry attach="geometry" setFromPoints={[x, y, z]} />
    </mesh>
  )
}

export default Grid8
