import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./canvas-loader";
import { AnimationMixer } from "three";
import * as THREE from "three"; // 여기에서 THREE를 import
// `isMobile` prop의 타입을 명시해줍니다.
interface ComputersProps {
  isMobile: boolean;
  isVerySmall: boolean; // 추가
}

const FloatingFox = ({ isMobile, isVerySmall }: ComputersProps) => {
  const floatingFox = useGLTF("./floating_fox/scene.gltf");
  const mixer = useRef(new AnimationMixer(floatingFox.scene));
  // 애니메이션 클립을 추가합니다.
  useEffect(() => {
    if (floatingFox.animations && floatingFox.animations.length) {
      floatingFox.animations.forEach((clip) => {
        const action = mixer.current.clipAction(clip);
        action.setLoop(THREE.LoopRepeat, Infinity); // 루프를 설정
        action.play(); // 애니메이션 재생
      });
    }
  }, [floatingFox]);

  // 매 프레임마다 애니메이션 업데이트
  useFrame((state, delta) => {
    mixer.current.update(delta); // 애니메이션 업데이트
  });
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
        object={floatingFox.scene}
        scale={isVerySmall ? 1.6 : isMobile ? 1.8 : 2} // 매우 작은 화면일 때 적용
        position={
          isVerySmall ? [0, -1, 3] : isMobile ? [0, -1, 2.5] : [0, -0.4, 2]
        }
        rotation={[-0.0, 2, -0.1]}
      />
    </mesh>
  );
};

const FloatingFoxCanvas = () => {
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
      className="absolute -top-1/4"
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [40, 3, 5], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <FloatingFox isMobile={isMobile} isVerySmall={isVerySmall} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default FloatingFoxCanvas;
