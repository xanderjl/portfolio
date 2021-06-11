import React from "react"

const Lights = () => (
  <>
    <ambientLight intensity={0.3} />
    <directionalLight castShadow position={[10, 10, 5]} intensity={1} />
    <directionalLight
      castShadow
      position={[0, 10, 0]}
      intensity={1.5}
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      shadow-camera-far={50}
      shadow-camera-left={-10}
      shadow-camera-right={10}
      shadow-camera-top={10}
      shadow-camera-bottom={-10}
    />
    <spotLight castShadow intensity={1} position={[1000, 0, 0]} />
  </>
)

export default Lights
