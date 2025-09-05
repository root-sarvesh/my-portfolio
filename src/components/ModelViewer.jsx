import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function LaptopModel({ mouse }) {
  const { scene } = useGLTF("/models/scene.gltf"); // Make sure the path is correct
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      // Smoothly rotate model based on cursor position
      ref.current.rotation.y += (mouse.x * Math.PI - ref.current.rotation.y) * 0.05;
      ref.current.rotation.x += (mouse.y * Math.PI /3.5  - ref.current.rotation.x) * 0.05;
    }
  });

  return <primitive ref={ref} object={scene} scale={1.5} position={[-0.5, -1, 0]} rotation={[0, -1, 0]} />;
}

export default function ModelViewer() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouse({
        x: (event.clientX - window.innerWidth / 2) / window.innerWidth,
        y: (event.clientY - window.innerHeight / 2) / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <LaptopModel mouse={mouse} />
        </Suspense>
      </Canvas>
    </div>
  );
}
