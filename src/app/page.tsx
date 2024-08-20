"use client";

import Home from "@/components/section-home/home";
import Stacks from "@/components/section-about/stacks";
import { ArrowBigDownDash } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import Link from "next/link";
import Introduce from "@/components/section-about/introduce";

export default function Page() {
  return (
    <main className="w-full flex h-screen  flex-col  scrollbar-hide">
      <div className="w-full flex-1 mt-10 max-w-5xl mx-auto">
        {/* section-home */}
        <Home></Home>
        {/* section-about */}
        <section
          id="about"
          className="flex flex-col px-10 justify-around min-h-screen scroll-mt-20 border-b-2 border-b-foreground/10"
        >
          {/* 제목 */}
          <div className="flex justify-end">
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
            <Link
              href="#project"
              onClick={(e) => scrollToSection(e, "#project")}
            >
              {" "}
              <ArrowBigDownDash className="arrow" />
            </Link>
          </div>
        </section>

        {/* section-project */}
        <section id="project" className="min-h-screen  p-8 scroll-mt-20">
          {/* 제목 */}
          <div className="flex justify-start">
            <h1
              className={`font-bold text-foreground/80 text-5xl tracking-tighter md:text-7xl sm:text-6xl`}
            >
              PROJECT.
              <p className="text-xs tracking-normal text-foreground/50 pl-1 md:text-base sm:text-sm">
                저는 이런 생각을 가지고 있습니다.
              </p>
            </h1>
          </div>
        </section>
        <section
          id="constant"
          className="min-h-screen bg-gray-400 p-8 scroll-mt-20"
        >
          <h2 className="text-3xl font-bold">Constant</h2>
          <span>Information on constants.</span>
        </section>
      </div>
      <div className="w-full bg-slate-50">목차</div>
    </main>
  );
}
