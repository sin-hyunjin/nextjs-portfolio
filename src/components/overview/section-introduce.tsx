import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const SectionIntro = () => {
  const ref = useRef(null); // 감지할 DOM 요소
  const inView = useInView(ref, { amount: 0.1 }); // 요소가 보이면 애니메이션 트리거

  // 박스 애니메이션 정의
  const boxVariant = {
    hidden: (i: number) => ({
      x: `-${23 * i}vw`, // 모든 박스는 왼쪽에서 시작
      opacity: 0,
    }), // 초기 상태: 투명, 왼쪽 이동
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.75, // 각 박스의 딜레이 설정
        duration: 0.5,
      },
    }),
  };

  const sections = [
    {
      title: "Home",
      subtitle: "포트폴리오 시작",
      description: "프론트엔드 개발자로서의 여정을 시작합니다.",
    },
    {
      title: "About",
      subtitle: "자기소개",
      description: "저의 경력과 기술을 소개합니다.",
    },
    {
      title: "Skills",
      subtitle: "기술 스택",
      description: "React, TypeScript, Three.js 등 다양한 기술을 다룹니다.",
    },
    {
      title: "Contact",
      subtitle: "연락하기",
      description: "프로젝트 협업이나 문의 사항이 있으시면 연락주세요.",
    },
  ];

  return (
    <div className="flex justify-center min-h-80 bg-black mx-auto z-10">
      <div
        className="w-[92vw] h-[50vh] relative flex max-w-5xl mx-0 xl:px-10"
        ref={ref}
      >
        {/* 전체 크기 박스 */}
        <div
          className="w-full h-full flex bg-[rgb(8,9,9)]"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url('/background-image/4.png')`,
          }}
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className={cn(
                `flex flex-col justify-center items-center w-[23vw] h-full bg-black/70 p-8 text-white border border-white/20  rounded-lg`
              )}
              style={{
                zIndex: 4 - index,
              }}
              variants={boxVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={index}
            >
              <h2 className="text-lg font-semibold">{section.title}</h2>
              <h3 className="text-md">{section.subtitle}</h3>
              <p className="text-xs mt-1">{section.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
