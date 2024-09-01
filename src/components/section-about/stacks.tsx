"use client";

import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import StackCoreIcon from "@/assets/icons/stack-core-icon.svg";
import StackMoreIcon from "@/assets/icons/stack-more-icon.svg";
import { StackSeleton } from "@/components/ui/skeleton";
import { useState, useRef } from "react";

const stacksText = {
  front: [
    { name: "HTML" },
    { name: "CSS" },
    { name: "Tailwind CSS" },
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "React" },
    { name: "Nextjs" },
    { name: "React Query" },
  ],
  back: [
    { name: "Java" },
    { name: "Spring Boot" },
    { name: "Spring Security" },
    { name: "RestAPI" },
    { name: "JPA" },
  ],
  dbSkills: [
    { name: "MySQL" },
    { name: "H2 Database" },
    { name: "PostgreSQL" },
  ],
  utils: [
    { name: "Git" },
    { name: "GitHub" },
    { name: "Swagger" },
    { name: "Vercel" },
  ],
};

export default function Stacks() {
  const [isMoreSkills, setIsMoreSkills] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { scrollY } = useScroll();
  const yRange = useTransform(scrollY, [830, 1000], [0.1, 1]); // 스크롤 범위와 변환 범위를 조정
  // 스크롤 위치에 따라 x축 변환 값 생성
  const xLeftRange = useTransform(scrollY, [500, 1100], [-100, 0]);
  const xRightRange = useTransform(scrollY, [900, 1100], [100, 0]);

  // Spring으로 부드럽게 애니메이션
  const xLeft = useSpring(xLeftRange, { stiffness: 300, damping: 30 });
  const xRight = useSpring(xRightRange, { stiffness: 300, damping: 30 });

  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log("Page scroll: ", latest);
  });

  const handleButtonClick = () => {
    setIsLoading(true); // 로딩 시작
    setTimeout(() => {
      setIsMoreSkills(!isMoreSkills);
      setIsLoading(false); // 로딩 시작
    }, 1000); // 1초(1000밀리초) 뒤에 상태 변경
  };
  return (
    <>
      <div className="mb-14">
        <h3
          className={` inline font-bold text-foreground/80 text-xl pl-12 tracking-tighter md:text-2xl `}
        >
          Stacks
        </h3>
        <button
          onClick={handleButtonClick}
          className="text-[10px] font-medium text-background/90 bg-foreground/80   ml-3 px-2 py-1  rounded-2xl md:text-xs sm:text-xs hover:bg-foreground/70 hover:text-background/80"
        >
          {isMoreSkills ? "Core Stack >" : "More Stack >"}
        </button>
        {isLoading ? (
          <StackSeleton />
        ) : (
          <motion.div
            style={{ opacity: yRange }}
            className="flex flex-row justify-between "
          >
            {/* 왼쪽 스킬 */}
            <motion.div
              style={{ x: xLeft }}
              initial={{ x: -100, opacity: 0 }} // 초기 상태
              animate={{ x: 0, opacity: 1 }} // 애니메이션 상태
              transition={{ duration: 0.5 }}
              className="flex flex-col w-60 m-10"
            >
              <strong className="pl-2 mt-4">
                {isMoreSkills ? "# Utils" : "# Front-end"}
              </strong>
              <div className="flex flex-wrap  mt-5">
                {(isMoreSkills ? stacksText.utils : stacksText.front).map(
                  (stack, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center font-medium p-2 m-2 text-center text-xs rounded-lg bg-foreground/10 text-foreground/75"
                    >
                      {stack.name}
                    </div>
                  )
                )}
              </div>
            </motion.div>
            {/* 이미지 */}
            <div className="hidden items-center  md:flex my-4 ">
              <Image
                className="w-60 cursor-pointer rounded-full hover:bg-foreground/5"
                onClick={handleButtonClick}
                src={isMoreSkills ? StackMoreIcon : StackCoreIcon}
                alt=""
              ></Image>
            </div>
            {/* 오른쪽 스킬 */}
            <motion.div
              style={{ x: xRight }}
              initial={{ x: 100, opacity: 0 }} // 초기 상태
              animate={{ x: 0, opacity: 1 }} // 애니메이션 상태
              transition={{ duration: 0.5 }}
              className="flex flex-col w-60 m-10 "
            >
              <strong className="pl-2 mt-4">
                {isMoreSkills ? "# DB" : "# Back-end"}
              </strong>
              <div className="flex flex-wrap  mt-5">
                {(isMoreSkills ? stacksText.dbSkills : stacksText.back).map(
                  (stack, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center font-medium p-2 m-2 text-center text-xs rounded-lg bg-foreground/10 text-foreground/75"
                    >
                      {stack.name}
                    </div>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>

      {isLoading ? (
        ""
      ) : (
        <div className=" flex items-center justify-center my-5 md:hidden">
          <Image
            className="w-60 cursor-pointer rounded-full hover:bg-foreground/5"
            onClick={handleButtonClick}
            src={isMoreSkills ? StackMoreIcon : StackCoreIcon}
            alt="skills image"
          ></Image>
        </div>
      )}
    </>
  );
}
