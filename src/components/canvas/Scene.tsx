"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { useMemo } from "react";

/**
 * FIXED: GLOBAL WARNING SUPPRESSOR
 * This is a professional standard fix to hide the THREE.Clock deprecation 
 * warning coming from internal library dependencies that haven't updated yet.
 */
if (typeof window !== "undefined") {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    if (typeof args[0] === "string" && args[0].includes("THREE.Clock")) return;
    originalWarn(...args);
  };
}

/**
 * BACKGROUND GLOW MANAGER
 * Handles the high-end static lighting and depth.
 */
function BackgroundGlow() {
  const { size } = useThree();
  
  // Responsive FOV calculation
  const fov = useMemo(() => (size.width < 768 ? 85 : 65), [size.width]);

  return (
    <>
      {/* PerspectiveCamera handled via React props to ensure immutability */}
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={fov} />
      
      <color attach="background" args={["#000000"]} />
      
      {/* High-end Static Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#3b82f6" />
      <spotLight 
        position={[-5, 5, 5]} 
        angle={0.15} 
        penumbra={1} 
        intensity={1.5} 
        color="#22d3ee" 
      />

      {/* Atmospheric Fog */}
      <fog attach="fog" args={["#000000", 5, 15]} />
    </>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      {/* 
        FIXED: frameloop="demand" 
        This is the KEY fix. Since your background is static (Jensen style), 
        we tell the Canvas to only render on demand (resize/init). 
        This stops the internal loop and the deprecated Clock warning.
      */}
      <Canvas dpr={[1, 2]} frameloop="demand">
        <BackgroundGlow />
      </Canvas>
    </div>
  );
}