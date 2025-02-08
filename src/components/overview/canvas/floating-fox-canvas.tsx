import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./canvas-loader";
import { AnimationMixer } from "three";
import * as THREE from "three";

interface ComputersProps {
  isScreenXS: boolean; // 320px
  isScreenSM: boolean; // 630px
  isScreenMD: boolean; // 770px
  isScreenLG: boolean; // 976px
  isScreenXL: boolean; // 1440px
}

const FloatingFox = ({
  isScreenXS,
  isScreenSM,
  isScreenMD,
  isScreenLG,
  isScreenXL,
}: ComputersProps) => {
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
        scale={
          isScreenXS
            ? 1.3
            : isScreenSM
            ? 1.6
            : isScreenMD
            ? 2.0
            : isScreenLG
            ? 2.2
            : isScreenXL
            ? 2.3
            : 2.2
        } // 화면 크기별로 scale 조정
        position={
          isScreenXS
            ? [-1, -5.4, 0.5]
            : isScreenSM
            ? [0, -4, 1]
            : isScreenMD
            ? [0, -2, 1.5]
            : isScreenLG
            ? [0, -0.4, 1]
            : isScreenXL
            ? [0, 0, 1]
            : [0, 0, 1]
        } // 화면 크기별로 position 조정
        rotation={[-0.0, 2, -0.1]}
      />
    </mesh>
  );
};

const FloatingFoxCanvas = () => {
  const [isScreenXS, setIsScreenXS] = useState(false);
  const [isScreenSM, setIsScreenSM] = useState(false);
  const [isScreenMD, setIsScreenMD] = useState(false);
  const [isScreenLG, setIsScreenLG] = useState(false);
  const [isScreenXL, setIsScreenXL] = useState(false);

  useEffect(() => {
    const mediaQueryScreenXS = window.matchMedia("(max-width: 320px)");
    const mediaQueryScreenSM = window.matchMedia("(max-width: 630px)");
    const mediaQueryScreenMD = window.matchMedia("(max-width: 768px)");
    const mediaQueryScreenLG = window.matchMedia("(max-width: 976px)");
    const mediaQueryScreenXL = window.matchMedia("(max-width: 1440px)");

    // 초기 값 설정
    setIsScreenXS(mediaQueryScreenXS.matches);
    setIsScreenSM(mediaQueryScreenSM.matches);
    setIsScreenMD(mediaQueryScreenMD.matches);
    setIsScreenLG(mediaQueryScreenLG.matches);
    setIsScreenXL(mediaQueryScreenXL.matches);

    // 미디어 쿼리 변경을 처리하는 콜백 함수 정의
    const handleMediaQueryChange = () => {
      setIsScreenXS(mediaQueryScreenXS.matches);
      setIsScreenSM(mediaQueryScreenSM.matches);
      setIsScreenMD(mediaQueryScreenMD.matches);
      setIsScreenLG(mediaQueryScreenLG.matches);
      setIsScreenXL(mediaQueryScreenXL.matches);
    };

    // 미디어 쿼리 변경 시 콜백 함수를 리스너로 추가
    mediaQueryScreenXS.addEventListener("change", handleMediaQueryChange);
    mediaQueryScreenSM.addEventListener("change", handleMediaQueryChange);
    mediaQueryScreenMD.addEventListener("change", handleMediaQueryChange);
    mediaQueryScreenLG.addEventListener("change", handleMediaQueryChange);
    mediaQueryScreenXL.addEventListener("change", handleMediaQueryChange);

    // 컴포넌트가 언마운트될 때 리스너 제거
    return () => {
      mediaQueryScreenXS.removeEventListener("change", handleMediaQueryChange);
      mediaQueryScreenSM.removeEventListener("change", handleMediaQueryChange);
      mediaQueryScreenMD.removeEventListener("change", handleMediaQueryChange);
      mediaQueryScreenLG.removeEventListener("change", handleMediaQueryChange);
      mediaQueryScreenXL.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      className="absolute -top-24 xs:-top-28  z-[1] cursor-pointer "
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
        <FloatingFox
          isScreenXS={isScreenXS}
          isScreenSM={isScreenSM}
          isScreenMD={isScreenMD}
          isScreenLG={isScreenLG}
          isScreenXL={isScreenXL}
        />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default FloatingFoxCanvas;
