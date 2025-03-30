import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  Text,
  Text3D,
} from "@react-three/drei";
import CanvasLoader from "./canvas-loader";
import { Svg } from "@react-three/drei";
// import User from "public/user.svg";
interface BubbleSpeechProps {
  isScreenXS: boolean; // 320px
  isScreenSM: boolean; // 630px
  isScreenMD: boolean; // 770px
  isScreenLG: boolean; // 976px
  isScreenXL: boolean; // 1440px
}

const BubbleSpeech = ({
  isScreenXS,
  isScreenSM,
  isScreenMD,
  isScreenLG,
  isScreenXL,
}: BubbleSpeechProps) => {
  const bubbleSpeech = useGLTF("bubble_speech/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={8} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={1.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={2048}
      />
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} castShadow intensity={1} />

      <pointLight intensity={1} />
      <primitive
        object={bubbleSpeech.scene}
        scale={
          isScreenXS
            ? 1.3
            : isScreenSM
            ? 1.6
            : isScreenMD
            ? 3
            : isScreenLG
            ? 3.3
            : isScreenXL
            ? 3.7
            : 3.7
        } // 화면 크기별로 scale 조정
        position={
          isScreenXS
            ? [-1, -5.4, 0.5]
            : isScreenSM
            ? [0, -4, 1]
            : isScreenMD
            ? [0, 1.5, -6]
            : isScreenLG
            ? [0, 2.5, -6]
            : isScreenXL
            ? [0, 2.5, -6]
            : [0, 2.5, -6]
        } // 화면 크기별로 position 조정
        rotation={[-1.6, 3.2, 2.15]}
      />

      {/* 3D Text */}

      <Text3D
        font={"fonts/optimer_bold.typeface.json"}
        position={
          isScreenXS
            ? [0.5, 4.15, -4.3]
            : isScreenSM
            ? [0.5, 4.15, -4.3]
            : isScreenMD
            ? [0.5, 3.15, -4.3]
            : isScreenLG
            ? [0.5, 4.15, -4.3]
            : isScreenXL
            ? [0.5, 4.15, -4.1]
            : [0.5, 4.15, -4.1]
        } // y축 위치만 점차 증가
        size={
          isScreenXS
            ? 0.55
            : isScreenSM
            ? 0.55
            : isScreenMD
            ? 0.6
            : isScreenLG
            ? 0.5
            : isScreenXL
            ? 0.65
            : 0.65
        }
        rotation={[0.06, 0.95, -0.09]} // 동일한 회전값
        castShadow // 그림자 활성화
        height={0.03} // 텍스트 두께
        // bevelEnabled
        bevelSize={0.012}
        bevelThickness={0.0003}
      >
        Sin Hyun Jin
        <meshStandardMaterial attach="material" color={"black"} />
      </Text3D>

      <Text
        position={
          isScreenXS
            ? [2, 3.95, -6.2]
            : isScreenSM
            ? [2, 3.95, -6.2]
            : isScreenMD
            ? [2, 2.95, -6.1]
            : isScreenLG
            ? [2, 3.95, -6.2]
            : isScreenXL
            ? [2, 3.95, -6.3]
            : [2, 3.95, -6.3]
        }
        fontSize={
          isScreenXS
            ? 0.65
            : isScreenSM
            ? 0.65
            : isScreenMD
            ? 0.37
            : isScreenLG
            ? 0.38
            : isScreenXL
            ? 0.42
            : 0.42
        }
        color="black"
        anchorX="center"
        anchorY="middle"
        rotation={[0.06, 0.95, -0.09]} // 동일한 회전값
        castShadow // 그림자 활성화
      >
        Sin Hyun Jin
      </Text>
      {/* <Svg
            src="user.svg" // SVG 파일 경로
            position={[-1, 1.89, -2]} // 텍스트 아래 위치
            scale={0.0006} // SVG 크기 조정
            rotation={[0.06, 1, -0.09]}
            fillMaterial={{ color: "#60656b" }}
          /> */}

      <Text3D
        font={"fonts/optimer_bold.typeface.json"}
        position={
          isScreenXS
            ? [-1, -5.4, 0.5]
            : isScreenSM
            ? [0, -4, 1]
            : isScreenMD
            ? [0, -2, 1.5]
            : isScreenLG
            ? [0.7, 3.05, -4.5]
            : isScreenXL
            ? [0.7, 3.05, -4.45]
            : [0.7, 3.05, -4.45]
        } // 텍스트 위치 설정
        size={
          isScreenXS
            ? 0.65
            : isScreenSM
            ? 0.65
            : isScreenMD
            ? 0.65
            : isScreenLG
            ? 0.44
            : isScreenXL
            ? 0.52
            : 0.52
        } // 텍스트 크기
        rotation={[0.06, 0.95, -0.09]}
        castShadow // 그림자 활성화
        height={0.03} // 텍스트 두께
        // bevelEnabled
        bevelSize={0.012}
        bevelThickness={0.0003}
      >
        1996. 07. 20
        <meshStandardMaterial attach="material" color={"black"} />
        {/* 아이콘 svg */}
      </Text3D>

      <Text
        position={
          isScreenXS
            ? [-1, -5.4, 0.5]
            : isScreenSM
            ? [0, -4, 1]
            : isScreenMD
            ? [0, -2, 1.5]
            : isScreenLG
            ? [0.95, 2.05, -4.85]
            : isScreenXL
            ? [0.95, 2.05, -4.8]
            : [0.95, 2.05, -4.8]
        } // 텍스트 위치 설정
        fontSize={
          isScreenXS
            ? 0.65
            : isScreenSM
            ? 0.65
            : isScreenMD
            ? 0.65
            : isScreenLG
            ? 0.44
            : isScreenXL
            ? 0.52
            : 0.52
        } // 텍스트 크기
        color="black" // 텍스트 색상
        anchorX="center" // 수평 정렬
        anchorY="middle" // 수직 정렬
        rotation={[0.06, 0.95, -0.09]}
      >
        010. 9813. 5413
      </Text>
      <Svg
        src="phone.svg" // SVG 파일 경로
        position={
          isScreenXS
            ? [-0.6, 1.85, -2.7]
            : isScreenSM
            ? [-0.6, 1.85, -2.7]
            : isScreenMD
            ? [-0.6, 1.85, -2.7]
            : isScreenLG
            ? [-0.6, 1.85, -2.9]
            : isScreenXL
            ? [-0.6, 1.85, -2.5]
            : [-0.6, 1.85, -2.5]
        } // 텍스트 아래 위치
        scale={0.0006} // SVG 크기 조정
        rotation={[0.06, 0.95, -0.09]}
        fillMaterial={{ color: "#60656b" }}
      />

      <Text
        position={
          isScreenXS
            ? [1.65, 1, -5.45]
            : isScreenSM
            ? [1.65, 1, -5.45]
            : isScreenMD
            ? [1.65, 1, -5.45]
            : isScreenLG
            ? [1.65, 1, -5.65]
            : isScreenXL
            ? [1.65, 1, -5.8]
            : [1.65, 1, -5.8]
        } // 텍스트 위치 설정
        fontSize={
          isScreenXS
            ? 0.65
            : isScreenSM
            ? 0.65
            : isScreenMD
            ? 0.65
            : isScreenLG
            ? 0.44
            : isScreenXL
            ? 0.52
            : 0.52
        } // 텍스트 크기
        color="black" // 텍스트 색상
        anchorX="center" // 수평 정렬
        anchorY="middle" // 수직 정렬
        rotation={[0.06, 0.95, -0.09]}
      >
        blackduvet52@gmail.com
      </Text>
      <Svg
        src="mail.svg" // SVG 파일 경로
        position={
          isScreenXS
            ? [-0.6, 0.85, -2.7]
            : isScreenSM
            ? [-0.6, 0.85, -2.7]
            : isScreenMD
            ? [-0.6, 0.85, -2.7]
            : isScreenLG
            ? [-0.6, 0.85, -2.9]
            : isScreenXL
            ? [-0.6, 0.85, -2.5]
            : [-0.6, 0.85, -2.5]
        } // 텍스트 아래 위치
        scale={
          isScreenXS
            ? 0.65
            : isScreenSM
            ? 0.65
            : isScreenMD
            ? 0.65
            : isScreenLG
            ? 0.00055
            : isScreenXL
            ? 0.0006
            : 0.0006
        } // SVG 크기 조정
        rotation={[0.06, 0.95, -0.09]}
        fillMaterial={{ color: "#60656b" }}
      />
    </mesh>
  );
};

const BubbleSpeechCanvas = () => {
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
      className="absolute  z-[1] cursor-pointer "
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [40, 3, 5], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
      />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <BubbleSpeech
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

export default BubbleSpeechCanvas;
