"use client";

import Link from "next/link";
import { ArrowBigDownDash } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import Stacks from "@/components/overview/section-about/stacks";
import Introduce from "@/components/overview/section-about/introduce";
import { SectionTitle } from "../section-title";

import HeadInCludesCanvas from "@/components/overview/canvas/floating-fox-canvas";
import { StarsCanvas } from "../canvas/stars-canvas";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex flex-col px-10  min-h-screen scroll-mt-16 bg-cover bg-center "
      style={{
        backgroundImage: `linear-gradient(to top, rgba(20, 28, 48, 0.2), rgba(0, 0, 0, 1)), url('./2.png')`,
      }}
    >
      {/* <StarsCanvas /> */}

      <div className="w-full h-full mx-auto max-w-5xl ">
        {/* 제목 */}
        <div className="relative ">
          <div className="flex justify-start flex-col ">
            <SectionTitle
              title="ABOUT."
              description="  저는 이런 생각을 가지고 있습니다."
            />
          </div>
          <div className="absolute h-[30rem]  ">
            <HeadInCludesCanvas />
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
