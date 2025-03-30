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
  const arrowRef = useRef(null);

  const isInView = useInView(sectionRef, { amount: 0.2 });
  const isArrowInView = useInView(arrowRef, { amount: 1 });

  return (
    <section
      id="home"
      className="relative scroll-mt-14 bg-cover bg-center h-screen   "
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
            <div className="w-5 h-5 rounded-full bg-white shadow-glow" />
            <div className="w-1 sm:h-80 h-56 white-gradient " />
          </div>

          <motion.div
            className="flex mt-10 z-20"
            ref={sectionRef}
            initial={{ opacity: 0 }} // 초기 상태
            animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          >
            <motion.div
              {...fadeInUp}
              className={`text-clamp-lg font-black text-white md:text-6xl sm:text-5xl xs:text-4xl text-[40px] md:leading-[98px]  whitespace-nowrap 
              `}
            >
              <div className="absolute stroke-text mt-16 leading-tight uppercase md:text-6xl sm:text-5xl xs:text-4xl">
                <span className="ml-1">front</span>
                <span className="ml-1">end</span>
                <div className="mt-2">developer</div>
              </div>
            </motion.div>

            <div
              className={` text-clamp-sm text-[#e4e0fd] font-medium md:text-2xl sm:text-xl  xs:text-base text-[16px] md:leading-[40px] mt-10 md:mt-3 text-white-100 
                `}
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
                className="my-3  text-ellipsis transition-all"
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

      <motion.div
        ref={arrowRef}
        initial={{ opacity: 0 }} // 초기 상태
        animate={isArrowInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="flex justify-center items-center -mt-16 mb-12 text-violet-100"
      >
        <div ref={arrowRef}>
          <Link href="#project" onClick={(e) => scrollToSection(e, "#about")}>
            <ArrowBigDownDash className="arrow" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
