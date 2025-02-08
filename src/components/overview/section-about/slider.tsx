"use client";

import { motion, useInView } from "framer-motion";
import { CSSProperties, useEffect, useRef, useState } from "react";

const Slider = () => {
  // 슬라이드 항목 정의
  const items = [
    "창의력",
    "소통력",
    "책임감",
    "적응력",
    "협업성",
    "집중력",
    "열정",
    "문제해결",
  ];

  // 상태 관리: activeIndex와 hoveredIndex
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeText, setActiveText] = useState<string>("");

  // 화면이 보이는지 여부 체크
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3 });

  // 클릭 시 activeIndex와 텍스트 설정
  const handleClick = (index: number) => {
    if (index === activeIndex) {
      setActiveIndex(null);
      setActiveText(""); // 클릭 해제 시 텍스트 초기화
    } else {
      setActiveIndex(index);
      setActiveText(items[index]); // 클릭된 아이템의 텍스트 저장
    }
  };

  // 화면 크기에 따른 translateZ 값 설정
  const [translateZValue, setTranslateZValue] = useState("40vw");

  useEffect(() => {
    const handleResize = () => {
      // 화면 너비에 따라 translateZ값 설정
      setTranslateZValue(window.innerWidth >= 1024 ? "400px" : "40vw");
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // 초기 설정

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="slider-container relative z-10">
      {/* 화면에 보일 때 애니메이션 적용 */}
      <motion.div
        className="absolute top-6 sm:top-7 md:top-9 w-full h-full flex justify-center items-center text-slide stylish-regular "
        initial={{ opacity: 0 }}
        animate={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "scale(1)" : "scale(0.1)", // 글자가 커지거나 작아지는 애니메이션
        }}
        transition={{ duration: 0.8, ease: [0.68, -0.55, 0.27, 1.55] }}
      >
        <motion.div className="px-1 xs:px-3 md:px-6 stylish-regular">
          {"저는 ("}
        </motion.div>
        <div>
          {/* hoveredIndex가 있으면 그 값을, 없으면 activeIndex 또는 기본값("적응력")을 사용 */}
          {hoveredIndex !== null ? (
            items[hoveredIndex]
          ) : activeIndex !== null ? (
            items[activeIndex]
          ) : (
            <span className="invisible stylish-regular">적응력</span>
          )}
        </div>
        <div className="px-1 xs:px-3 md:px-6 stylish-regular">
          {") 이 강점 입니다. "}
        </div>
      </motion.div>

      {/* 슬라이더 항목을 회전하는 방식으로 배치 */}
      <motion.div
        ref={sectionRef}
        className="slider"
        style={{
          transform: `rotateY(${
            activeIndex === null ? 0 : -activeIndex * (360 / items.length)
          }deg)`,
        }}
      >
        {/* 슬라이드 항목을 렌더링 */}
        {items.map((item, index) => (
          <motion.div
            className={`slider-item stylish-regular ${
              activeIndex === index ? "slider-item-active" : ""
            } ${
              hoveredIndex === index && activeIndex !== index
                ? "slider-item-hover"
                : ""
            }`}
            key={index}
            style={
              {
                "--index": index,
                "--total": items.length,
              } as CSSProperties
            }
            onClick={() => handleClick(index)} // 클릭 시 아이템 텍스트 저장
            onMouseEnter={() => setHoveredIndex(index)} // hover 시 hoveredIndex 설정
            onMouseLeave={() => setHoveredIndex(null)} // hover 해제 시 hoveredIndex 초기화
            initial={{
              opacity: 0,
              transform: "translateZ(0vw)",
            }} // 초기 상태
            animate={
              isInView
                ? {
                    opacity: 1,
                    transform: `rotateY(calc(var(--index) * (360deg / var(--total)))) translateZ(${translateZValue}) scale(1)`,
                  }
                : { opacity: 0 }
            }
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
          >
            <div className="slider-item-text">{item}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
