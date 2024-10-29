"use client";

import { motion } from "framer-motion";
import ComputersCanvas from "./canvas/computers-canvas";
import SlotMachine from "./section-home/slot-machine";
import { fadeInUp, fadeInRight, fadeInDelayed } from "@/lib/motion";
import { StarsCanvas } from "./canvas/stars-canvas";
import { scrollToSection } from "@/lib/utils";
import Link from "next/link";
import { ArrowBigDownDash } from "lucide-react";

const textData = [
  "사용자 중심의 웹 개발을 배우고 성장하는 중인",
  "더 나은 UI/UX를 위해 지속적으로 노력하는 ",
  "배움을 실천으로 옮기며 웹 개발을하는",
  "실패를 두려워하지 않는",
];
const Hero = () => {
  return (
    <section
      id="home"
      className="relative scroll-mt-14 bg-cover bg-center h-[50rem] "
      style={{ backgroundImage: "url('/herobg.png')" }}
    >
      <StarsCanvas />
      <div className=" w-full h-full mx-auto max-w-5xl ">
        <div
          className={`inset-0 sm:px-16 px-6 flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-20">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-56 violet-gradient" />
          </div>

          <div>
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
              <motion.p {...fadeInRight}>안녕하세요</motion.p>
              <motion.div {...fadeInDelayed} className="my-3  text-ellipsis">
                <SlotMachine textData={textData} />
              </motion.div>
              <motion.p {...fadeInRight}>
                프론트엔드 개발자 신현진 입니다.
              </motion.p>
            </div>
          </div>
        </div>

        <ComputersCanvas />
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
