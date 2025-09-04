import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"

function LaptopModel() {
  const { scene } = useGLTF("/models/scene.gltf") // make sure this path is correct
  return <primitive object={scene} scale={1.5} position={[-0.5, -1, 0]} rotation={[0,-1,0]} />
}

export default function ModelViewer() {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <LaptopModel />
        </Suspense>
        <OrbitControls enableZoom={false} enableRotate={true} autoRotate={true} minDistance={5} maxDistance={6}/>
      </Canvas>
    </div>
  )
}
