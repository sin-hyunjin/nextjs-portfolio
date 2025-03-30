"use client";

import "@/assets/css/banner.css";
import { SectionTitle } from "../section-title";
import FloatingFoxCanvas from "@/components/overview/canvas/floating-fox-canvas";
import { CSSProperties, useRef } from "react";
import Link from "next/link";
import { ArrowBigDownDash } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import Stacks from "@/components/overview/section-about/stacks";
import Introduce from "@/components/overview/section-about/introduce";
import { StarsCanvas } from "../canvas/stars-canvas";
import Slider from "./slider";
import BubbleSpeechCanvas from "../canvas/bubble-speech";
import { motion, useInView } from "framer-motion";

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.45 });

  return (
    <section
      id="about"
      className="relative flex flex-col sm:px-10 px-5  min-h-screen scroll-mt-16 bg-cover bg-center "
      style={{
        backgroundImage: `linear-gradient(to top, rgba(20, 28, 48, 0.2), rgba(0, 0, 0, 1)), url('background-image/2.png')`,
      }}
    >
      {/* <StarsCanvas /> */}

      <div className="w-full h-full mx-auto max-w-5xl ">
        {/* 제목 */}
        <StarsCanvas />
        <div className="relative">
          <div className="flex justify-start flex-col ">
            <SectionTitle
              title="ABOUT."
              description="  저는 이런 생각을 가지고 있습니다."
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="absolute  w-full xs:w-3/5 xs:h-2/6 mx-auto mt-10  ">
            <FloatingFoxCanvas />
          </div>
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, x: -140, y: 100 }} // 초기 상태: 투명하고 z축으로 멀리 시작
            animate={{
              opacity: isInView ? 1 : 0, // 화면에 들어오면 불투명
              x: isInView ? 0 : -140,
              y: isInView ? 0 : 100,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut", // 부드럽게 움직이게 설정
            }}
            className="absolute -top-10 w-full xs:w-4/5 xs:h-3/6 mx-auto"
          >
            <BubbleSpeechCanvas />
          </motion.div>

          <Slider />
        </div>

        <div className="flex justify-end h-60 banner">
          <div
            className="w-2/3 border flex `"
            style={{ "--quantity": 10 } as CSSProperties}
          >
            <div
              className="w-1/12 h-10 m-1 bg-white text-black item"
              style={{ "--position": 1 } as CSSProperties}
            ></div>
            <div
              className="w-1/12 h-10 m-1 bg-white text-black item"
              style={{ "--position": 2 } as CSSProperties}
            ></div>
            <div
              className="w-1/12 h-10 m-1 bg-white text-black item"
              style={{ "--position": 3 } as CSSProperties}
            ></div>
            <div
              className="w-1/12 h-10 m-1 bg-white text-black item"
              style={{ "--position": 4 } as CSSProperties}
            ></div>
            <div
              className="w-1/12 h-10 m-1 bg-white text-black item"
              style={{ "--position": 5 } as CSSProperties}
            ></div>
          </div>
        </div>
        {/* introduce */}
        {/* <Introduce /> */}

        {/* stacks */}
        {/* <Stacks></Stacks> */}

        {/* <div className="flex justify-center items-center mt-20 mb-12">
          {" "}
          <Link href="#project" onClick={(e) => scrollToSection(e, "#project")}>
            {" "}
            <ArrowBigDownDash className="arrow" />
          </Link>
        </div> */}
      </div>
    </section>
  );
}
