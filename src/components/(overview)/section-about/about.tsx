"use client";

import Link from "next/link";
import { ArrowBigDownDash } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import Stacks from "@/components/(overview)/section-about/stacks";
import Introduce from "@/components/(overview)/section-about/introduce";
import { SectionTitle } from "../section-title";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col px-10 justify-around min-h-screen scroll-mt-16 "
    >
      {/* 제목 */}
      <div className="flex justify-end border-t-2 border-t-foreground/10">
        <SectionTitle
          title="ABOUT."
          description="  저는 이런 생각을 가지고 있습니다."
        />
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
