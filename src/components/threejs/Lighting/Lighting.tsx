const Lighting = () => (
  <>
    <ambientLight intensity={0.3} />
    <directionalLight castShadow position={[-5, 10, 10]} intensity={0.8} />
  </>
)

export default Lighting
