"use client";
import Stacks from "@/components/section-about/stacks";
import { ArrowBigDownDash } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import Link from "next/link";
import Introduce from "@/components/section-about/introduce";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col px-10 justify-around min-h-screen scroll-mt-20 "
    >
      {/* 제목 */}
      <div className="flex justify-end border-t-2 border-t-foreground/10">
        <h1
          className={`font-bold text-foreground/80 text-5xl tracking-tighter md:text-7xl sm:text-6xl`}
        >
          ABOUT.
          <p className="text-xs tracking-normal text-foreground/50 pl-1 md:text-base sm:text-sm">
            저는 이런 생각을 가지고 있습니다.
          </p>
        </h1>
      </div>
      {/* introduce */}
      
      <Introduce />
      
      {/* stacks */}
      <Stacks></Stacks>
      
      <div className="flex justify-center items-center mt-20 mb-12">
        {" "}
        <Link href="#project" onClick={(e) => scrollToSection(e, "#project")}>
          {" "}
          <ArrowBigDownDash className="arrow" />
        </Link>
      </div>
    </section>
  );
}
