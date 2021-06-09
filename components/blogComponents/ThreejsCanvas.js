import React from "react"

const ThreejsCanvas = () => {
  import { useEffect, useRef } from "react"
  import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    TorusKnotGeometry,
    MeshBasicMaterial,
    Mesh,
  } from "three"

  const ref = useRef(null)

  useEffect(() => {
    // Set up scene, camera and renderer

    const scene = new Scene()
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innherHeight,
      0.1,
      1000
    )
    const renderer = WebGLRenderer(ref)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(400, 300)

    // Set up torus knot

    const geometry = TorusKnotGeometry(10, 3, 100, 16)
    const material = MeshBasicMaterial({ color: 0xffff00 })
    const torusKnot = Mesh(geometry, material)
    scene.add(torusKnot)
    camera.position.z = 5

    // Render the scene
  }, [])
  const animate = () => {
    requestAnimationFrame(animate)
    torusKnot.rotation.x += 0.01
    torusKnot.rotation.y += 0.01
    renderer.render(scene, camera)
  }
  animate()

  return (
    <canvas
      ref={ref}
      style={{ width: "100%", height: "auto", padding: "2rem 0" }}
    ></canvas>
  )
}

export default ThreejsCanvas
