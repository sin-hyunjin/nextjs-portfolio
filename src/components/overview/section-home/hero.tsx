"use client";

import { motion, useInView } from "framer-motion";
import SlotMachine from "./slot-machine";
import { StarsCanvas } from "../canvas/stars-canvas";
import { cn, scrollToSection } from "@/lib/utils";
import Link from "next/link";
import { ArrowBigDownDash, Copyright } from "lucide-react";
import { useRef } from "react";
import MoonCanvas from "../canvas/moon-canvas";
import WaveText from "./wave-text";

const textData = [
  "사용자 중심의 웹 개발을 배우고 성장하는 중인",
  "더 나은 UI/UX를 위해 지속적으로 노력하는 ",
  "배움을 실천으로 옮기며 웹 개발을하는",
  "실패를 두려워하지 않는",
];
const Hero = () => {
  const sectionRef = useRef(null);
  const arrowRef = useRef(null);

  const isInView = useInView(sectionRef, { amount: 0.1 });
  const isArrowInView = useInView(arrowRef, { amount: 1 });

  return (
    <section
      id="home"
      className="relative scroll-mt-14 bg-cover bg-center h-screen "
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url('/background-image/4.png')`,
      }}
    >
      {/* 별 배경 Canvas */}
      <div className="absolute w-full h-3/6">
        <StarsCanvas />
      </div>

      <div className="w-full h-full  mx-auto max-w-5xl ">
        <div
          className="absolute w-full h-[27%] md:h-[20%]  flex flex-col justify-center px-3.5 md:px-8 sm:px-[2rem] mt-16 xs:mt-20 sm:mt-28 md:mt-32 leading-tight uppercase text-4xl xs:text-5xl sm:text-7xl md:text-8xl stroke-text 
       "
        >
          <WaveText text="front end" delay={0.05} className="ml-1" />
          <WaveText
            text="developer"
            delay={0.1}
            className="mt-2 ml-1 xs:ml-9 sm:ml-28 md:ml-32 z-20"
          />
        </div>

        <div
          className={`h-full inset-0 sm:px-10 px-5 flex flex-col justify-center items-start gap-5`}
        >
          <div className="mt-20  sm:mt-5 md:mt-10 border border-white/40   text-xs p-1 uppercase">
            portfolio
          </div>
          {/* 애니메이션 원 */}
          <div className="flex items-start">
            {[5, 4, 3, 2, 1].map((size, index) => (
              <div
                key={index}
                className={cn(
                  `rounded-full bg-white shadow-glow`,
                  `w-${size} h-${size}`,
                  `mt-${index}`
                )}
              />
            ))}
          </div>
          {/* 슬로건 및 소개 텍스트 */}
          <motion.div
            className="flex flex-col items-center z-20 "
            ref={sectionRef}
            initial={{ opacity: 0 }} // 초기 상태
            animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          >
            <div
              className={`text-clamp-sm text-[#e4e0fd] font-medium text-[14px] xs:text-base  sm:text-xl   md:text-2xl md:leading-[40px] mt-1  text-white-100 
                `}
            >
              <motion.p
                initial={{ x: 50, opacity: 0 }} // 초기 상태
                animate={
                  isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }
                }
                transition={{ delay: 0.2, duration: 1 }}
              >
                새로운 것을 창조하고
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }} // 초기 상태
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="my-3 text-ellipsis transition-all"
              >
                <SlotMachine textData={textData} />
              </motion.div>
              <motion.p
                initial={{ x: 50, opacity: 0 }}
                animate={
                  isInView
                    ? {
                        x: 0,
                        opacity: 1,
                        transition: { delay: 1, duration: 1 },
                      }
                    : { x: 50, opacity: 0 }
                }
              >
                프론트엔드 개발자 신현진 입니다.
              </motion.p>
            </div>
          </motion.div>
          {/* 저작권 표시 */}
          <div className="absolute flex bottom-10 right-10  mr-5 ">
            <div className="inline-block h-4">
              <Copyright size={14} strokeWidth={0.75} />
            </div>
            <span className="text-xs text-white/70">2024</span>
          </div>
        </div>
        {/* 달 배경 Canvas */}
        <div className=" absolute inset-0 ml-[-20%] cursor-pointer">
          <MoonCanvas />
        </div>
      </div>

      {/* about 이동 화살표 */}
      <motion.div
        ref={arrowRef}
        initial={{ opacity: 0 }} // 초기 상태
        animate={isArrowInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="flex justify-center items-center -mt-16 mb-12 text-violet-100 "
      >
        <div ref={arrowRef} className="z-30">
          <Link href="#project" onClick={(e) => scrollToSection(e, "#about")}>
            <ArrowBigDownDash className="arrow" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
