# Three.js

## Useful Links

### R3F/drei Docs

- [R3F](https://github.com/pmndrs/react-three-fiber)
- [Drei](https://github.com/pmndrs/drei)

### Codesandbox Examples

- [Diamonds](https://codesandbox.io/s/prb9t)
- [Particles](https://codesandbox.io/s/r3f-particles-ngup8)
- [Spherical Word Cloud](https://codesandbox.io/s/spherical-word-cloud-yup2o?file=/src/App.js)

---

## BufferAttribute

- stores data for an attribute associated with [BufferGeometry](https://threejs.org/docs/index.html?q=buffer#api/en/core/BufferGeometry)

---

## BufferGeometry

- A representation of mesh, line, or point geometry. Includes vertex positions, face indices, normals, colors, UVs, and custom attributes within buffers, reducing the cost of passing all this data to the GPU
- Example using [particles](https://github.com/mrdoob/three.js/blob/master/examples/webgl_buffergeometry_custom_attributes_particles.html)

### Three.js Code Example

```js
const geometry = new THREE.BufferGeometry()
// create a simple square shape. We duplicate the top left and bottom right
// vertices because each vertex needs to appear once per triangle.
const vertices = new Float32Array([
  -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0,

  1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0,
])

// itemSize = 3 because there are 3 values (components) per vertex
geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3))
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
```

---

## PointsMaterial

- default material used by [Points](https://threejs.org/docs/index.html?q=pointsma#api/en/objects/Points)

### Three.js Code Example

```js
const vertices = []

for (let i = 0; i < 10000; i++) {
  const x = THREE.MathUtils.randFloatSpread(2000)
  const y = THREE.MathUtils.randFloatSpread(2000)
  const z = THREE.MathUtils.randFloatSpread(2000)

  vertices.push(x, y, z)
}

const geometry = new THREE.BufferGeometry()
geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3))

const material = new THREE.PointsMaterial({ color: 0x888888 })

const points = new THREE.Points(geometry, material)

scene.add(points)
```

---
