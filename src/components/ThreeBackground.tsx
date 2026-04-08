"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { useScroll, useTransform } from "framer-motion";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { scrollYProgress } = useScroll();
  
  // Transform scroll position to 3D properties
  const yPos = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const rotation = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 2]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 0.8]);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = yPos.get();
      meshRef.current.rotation.z = rotation.get();
      meshRef.current.scale.setScalar(scale.get());
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#4f46e5"
          speed={3}
          distort={0.4}
          radius={1}
          emissive="#2d26a3"
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function Grid() {
  return (
    <gridHelper 
      args={[100, 50, "#333", "#111"]} 
      position={[0, -5, 0]} 
      rotation={[Math.PI / 4, 0, 0]}
    />
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#4f46e5" intensity={1} />
        <AnimatedSphere />
        <Grid />
      </Canvas>
    </div>
  );
}
