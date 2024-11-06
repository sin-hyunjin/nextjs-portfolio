"use client";

import { motion, useInView } from "framer-motion";
import ComputersCanvas from "./canvas/computers-canvas";
import SlotMachine from "./section-home/slot-machine";
import { fadeInUp, fadeInRight, fadeInDelayed } from "@/lib/motion";
import { StarsCanvas } from "./canvas/stars-canvas";
import { scrollToSection } from "@/lib/utils";
import Link from "next/link";
import { ArrowBigDownDash } from "lucide-react";
import { useRef } from "react";
import MoonCanvas from "./canvas/moon-canvas";

const textData = [
  "사용자 중심의 웹 개발을 배우고 성장하는 중인",
  "더 나은 UI/UX를 위해 지속적으로 노력하는 ",
  "배움을 실천으로 옮기며 웹 개발을하는",
  "실패를 두려워하지 않는",
];
const Hero = () => {
  const sectionRef = useRef(null);
  // useInView 훅 사용, 60% 이상 보일 때 true가 됨
  const isInView = useInView(sectionRef, { amount: 0.3 });

  return (
    <section
      id="home"
      className="relative scroll-mt-14 bg-cover bg-center h-[48rem] md:h-[60rem] sm:h-[55rem]   "
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url('./4.png')`,
      }}
    >
      <div className="absolute w-full h-2/4">
        <StarsCanvas />
      </div>
      <div className=" w-full h-full mx-auto max-w-5xl ">
        <div
          className={`inset-0 sm:px-16 px-6 flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-32">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-56 violet-gradient" />
          </div>

          <motion.div
            className="mt-10 z-20"
            ref={sectionRef}
            initial={{ opacity: 0 }} // 초기 상태
            animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          >
            <motion.div
              {...fadeInUp}
              className={`font-black text-white md:text-6xl sm:text-5xl xs:text-4xl text-[40px] md:leading-[98px] mt-20 md:mt-16 whitespace-nowrap `}
            >
              FRONT-END
              <span className="text-[#915EFF]"> DEV</span>
            </motion.div>

            <div
              className={`text-[#dfd9ff] font-medium md:text-2xl sm:text-xl  xs:text-base text-[16px] md:leading-[40px] mt-10 md:mt-3 text-white-100`}
            >
              <motion.p
                initial={{ x: 50, opacity: 0 }} // 초기 상태
                animate={
                  isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }
                }
                transition={{ delay: 0.2, duration: 1 }}
              >
                안녕하세요
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }} // 초기 상태
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="my-3  text-ellipsis"
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
        </div>
        <div className=" absolute inset-0  ml-[-20%]">
          <MoonCanvas />
        </div>
        {/* <ComputersCanvas /> */}
      </div>

      <div className="flex justify-center items-center -mt-16 mb-12 text-violet-100">
        <Link href="#project" onClick={(e) => scrollToSection(e, "#about")}>
          <ArrowBigDownDash className="arrow" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
