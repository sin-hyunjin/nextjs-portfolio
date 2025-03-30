import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./canvas-loader";

// `isMobile` prop의 타입을 명시해줍니다.
interface ComputersProps {
  isMobile: boolean;
  isVerySmall: boolean; // 추가
}

const Computers = ({ isMobile, isVerySmall }: ComputersProps) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={5} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isVerySmall ? 0.4 : isMobile ? 0.5 : 0.6} // 매우 작은 화면일 때 적용
        position={
          isVerySmall
            ? [0, -2.5, -0.55]
            : isMobile
            ? [0, -2.4, -0.6]
            : [-14, -1.3, -6.5]
        }
        rotation={[-0.0, -0.2, -0.01]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVerySmall, setIsVerySmall] = useState(false); // 추가

  useEffect(() => {
    // `max-width: 640px` 미디어 쿼리
    const mediaQueryMobile = window.matchMedia("(max-width: 770px)");
    // `max-width: 380px` 미디어 쿼리 추가
    const mediaQueryVerySmall = window.matchMedia("(max-width: 640px)");

    // `isMobile` 상태의 초기 값을 설정
    setIsMobile(mediaQueryMobile.matches);
    setIsVerySmall(mediaQueryVerySmall.matches); // `isVerySmall` 상태 설정

    // 미디어 쿼리 변경을 처리하는 콜백 함수 정의
    const handleMediaQueryChange = () => {
      setIsMobile(mediaQueryMobile.matches);
      setIsVerySmall(mediaQueryVerySmall.matches); // `isVerySmall` 상태 설정
    };

    // 미디어 쿼리 변경 시 콜백 함수를 리스너로 추가
    mediaQueryMobile.addEventListener("change", handleMediaQueryChange);
    mediaQueryVerySmall.addEventListener("change", handleMediaQueryChange);

    // 컴포넌트가 언마운트될 때 리스너 제거
    return () => {
      mediaQueryMobile.removeEventListener("change", handleMediaQueryChange);
      mediaQueryVerySmall.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      className="absolute -top-1/2 z-[1]"
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} isVerySmall={isVerySmall} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
