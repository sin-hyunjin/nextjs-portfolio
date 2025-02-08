import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./canvas-loader";

// 새 타입 정의
interface ComputersProps {
  isScreenXS: boolean; // 320px 이하
  isScreenSM: boolean; // 630px 이하
  isScreenMD: boolean; // 770px 이하
  isScreenLG: boolean; // 976px 이하
  isScreenXL: boolean; // 1440px 이하
}

const Computers = ({
  isScreenXS,
  isScreenSM,
  isScreenMD,
  isScreenLG,
  isScreenXL,
}: ComputersProps) => {
  const computer = useGLTF("./the_moon/scene.gltf");

  // 회전 상태를 애니메이션 처리합니다.
  useFrame(() => {
    if (computer.scene) {
      computer.scene.rotation.y -= 0.001;
      computer.scene.rotation.x -= 0.001;
      computer.scene.rotation.z += 0.0001;
    }
  });

  return (
    <mesh>
      <hemisphereLight intensity={3.3} groundColor="black" />
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
        scale={
          isScreenXS
            ? 0.75
            : isScreenSM
            ? 0.85
            : isScreenMD
            ? 1
            : isScreenLG
            ? 1.3
            : isScreenXL
            ? 1.3
            : 1.3
        }
        position={
          isScreenXS
            ? [0, 2.2, 0]
            : isScreenSM
            ? [0, 2.2, -0.3]
            : isScreenMD
            ? [0, 2.1, -0.3]
            : isScreenLG
            ? [0, 2.1, -0.1]
            : isScreenXL
            ? [0, 2.1, -0.1]
            : [0, 2.2, -0.9]
        }
        rotation={[0.0, -0.2, -0.13]}
      />
    </mesh>
  );
};

const MoonCanvas = () => {
  const [isScreenXS, setIsScreenXS] = useState(false);
  const [isScreenSM, setIsScreenSM] = useState(false);
  const [isScreenMD, setIsScreenMD] = useState(false);
  const [isScreenLG, setIsScreenLG] = useState(false);
  const [isScreenXL, setIsScreenXL] = useState(false);

  useEffect(() => {
    const mediaQueryXS = window.matchMedia("(max-width: 320px)");
    const mediaQuerySM = window.matchMedia("(max-width: 630px)");
    const mediaQueryMD = window.matchMedia("(max-width: 770px)");
    const mediaQueryLG = window.matchMedia("(max-width: 976px)");
    const mediaQueryXL = window.matchMedia("(max-width: 1440px)");

    const setResponsiveStates = () => {
      setIsScreenXS(mediaQueryXS.matches);
      setIsScreenSM(mediaQuerySM.matches);
      setIsScreenMD(mediaQueryMD.matches);
      setIsScreenLG(mediaQueryLG.matches);
      setIsScreenXL(mediaQueryXL.matches);
    };

    setResponsiveStates(); // 초기 값 설정

    mediaQueryXS.addEventListener("change", setResponsiveStates);
    mediaQuerySM.addEventListener("change", setResponsiveStates);
    mediaQueryMD.addEventListener("change", setResponsiveStates);
    mediaQueryLG.addEventListener("change", setResponsiveStates);
    mediaQueryXL.addEventListener("change", setResponsiveStates);

    return () => {
      mediaQueryXS.removeEventListener("change", setResponsiveStates);
      mediaQuerySM.removeEventListener("change", setResponsiveStates);
      mediaQueryMD.removeEventListener("change", setResponsiveStates);
      mediaQueryLG.removeEventListener("change", setResponsiveStates);
      mediaQueryXL.removeEventListener("change", setResponsiveStates);
    };
  }, []);

  return (
    <Canvas
      className="absolute z-10 ml-[10rem] xs:ml-[12rem] md:ml-[31rem] sm:ml-[21rem] "
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [15, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false} // 줌 활성화
          enableRotate={true} // 회전 활성화
          rotateSpeed={1.0} // 회전 속도
          zoomSpeed={0.8} // 줌 속도
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers
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

export default MoonCanvas;
