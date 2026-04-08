"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, PerspectiveCamera, Sparkles, Stars, Environment, MeshTransmissionMaterial, Text } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useScroll } from "framer-motion";

function BackgroundText() {
  const textRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    textRef.current.rotation.y = time * 0.3;
    textRef.current.position.y = Math.sin(time * 0.5) * 0.2;
  });

  return (
    <group ref={textRef} position={[0, 0, -5]}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Text
          fontSize={6}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          maxWidth={20}
          lineHeight={1}
          font="https://fonts.gstatic.com/s/spacegrotesk/v15/V8mQoQDjQSkFtoMM3T6rjif3Prf0vI0.woff"
          fillOpacity={0.6}
          strokeWidth={0.05}
          strokeColor="#3b82f6"
          strokeOpacity={0.8}
          letterSpacing={0.1}
        >
          BHUMIHAR
        </Text>
      </Float>
    </group>
  );
}

function MovingGrid() {
  const gridRef = useRef<THREE.GridHelper>(null!);
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    gridRef.current.position.z = (time * 1.5) % 4;
  });

  return (
    <group position={[0, -10, 0]}>
      <gridHelper 
        ref={gridRef}
        args={[100, 25, "#1e1e1e", "#0a0a0a"]} 
        rotation={[0, 0, 0]}
      />
    </group>
  );
}

function ParticleBackground() {
  const points = useMemo(() => {
    const p = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      p[i * 3] = (Math.random() - 0.5) * 25;
      p[i * 3 + 1] = (Math.random() - 0.5) * 25;
      p[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return p;
  }, []);

  const ref = useRef<THREE.Points>(null!);
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ref.current.rotation.y = time * 0.03;
    ref.current.rotation.x = Math.sin(time * 0.05) * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#ffffff"
        transparent
        opacity={0.2}
        sizeAttenuation
      />
    </points>
  );
}

function Shapes({ scrollYProgress }: { scrollYProgress: any }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const meshRef2 = useRef<THREE.Mesh>(null!);
  const meshRef3 = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const progress = scrollYProgress.get();
    const time = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.position.y = progress * 4;
      groupRef.current.rotation.y = progress * Math.PI * 0.2;
    }

    meshRef.current.rotation.x = time * 0.1 + progress * Math.PI;
    meshRef.current.rotation.y = time * 0.15;
    
    meshRef2.current.rotation.x = -time * 0.2;
    meshRef2.current.rotation.z = time * 0.1 + progress * Math.PI;

    meshRef3.current.position.y = Math.sin(time * 0.5) * 0.5;
    meshRef3.current.rotation.x = time * 0.3;
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <mesh ref={meshRef} position={[4, 0, -5]}>
            <octahedronGeometry args={[2, 0]} />
            <MeshDistortMaterial
              color="#1a1a1a"
              speed={1.5}
              distort={0.4}
              radius={1}
              metalness={1}
              roughness={0.2}
              emissive="#222"
            />
          </mesh>

      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
        <mesh ref={meshRef2} position={[-5, -4, -8]}>
          <icosahedronGeometry args={[3, 1]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={1}
            chromaticAberration={0.02}
            anisotropy={0.1}
            distortion={0.1}
            distortionScale={0.1}
            temporalDistortion={0.1}
            color="#050505"
          />
        </mesh>
      </Float>

      <Float speed={3} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={meshRef3} position={[0, -8, -10]}>
          <torusGeometry args={[5, 0.02, 16, 100]} />
          <meshStandardMaterial color="#333" emissive="#111" />
        </mesh>
      </Float>
    </group>
  );
}

function DarkNebula() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ref.current.rotation.z = time * 0.05;
    ref.current.rotation.x = time * 0.02;
  });

  return (
    <mesh ref={ref} position={[0, 0, -15]} scale={[50, 50, 50]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#050505"
        emissive="#0a0a0a"
        side={THREE.BackSide}
        wireframe={false}
      />
    </mesh>
  );
}

export default function Scene() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed inset-0 -z-10 h-screen w-full bg-[radial-gradient(circle_at_center,_#111_0%,_#000_100%)]">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 50 }} gl={{ alpha: true }}>
        {/* Transparent background to show CSS gradient */}
        
        <fog attach="fog" args={["#000000", 5, 25]} />
        
        <ambientLight intensity={0.1} />
        <spotLight position={[15, 15, 15]} angle={0.15} penumbra={1} intensity={2} color="#444" />
        <pointLight position={[-15, -15, -15]} intensity={1} color="#222" />
        <directionalLight position={[0, 5, 5]} intensity={0.5} color="#3b82f6" />
        
        <Stars radius={100} depth={50} count={7000} factor={4} saturation={0} fade speed={1} />
        <Sparkles count={150} scale={25} size={1} speed={0.3} opacity={0.1} color="#ffffff" />
        
          <ParticleBackground />
          <MovingGrid />
          <BackgroundText />
          <Shapes scrollYProgress={scrollYProgress} />
          <DarkNebula />

        
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}

