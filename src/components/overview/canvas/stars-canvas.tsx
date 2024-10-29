"use client";

import React, { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { Points as ThreePoints } from "three";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

interface StarBackgroundProps {
  [key: string]: any;
}

const StarBackground = (props: StarBackgroundProps) => {
  const ref = useRef<ThreePoints>(null!);

  const sphere = useMemo(() => {
    const positions = random.inSphere(new Float32Array(5000), { radius: 1.2 });
    // NaN 값이 있는지 확인
    for (let i = 0; i < positions.length; i++) {
      if (isNaN(positions[i])) {
        console.error(`NaN detected at index ${i}`);
        positions[i] = 0; // NaN 값이 있으면 0으로 대체
      }
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => (
  <div className="w-full h-4/ absolute inset-0 ">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
      <Preload all />
    </Canvas>
  </div>
);
