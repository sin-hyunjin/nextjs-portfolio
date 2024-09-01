"use client";

import GithubIcon from "@/assets/icons/github-icon";
import About from "@/components/section-about/about";
import Constant from "@/components/section-constant/constant";
import Home from "@/components/section-home/home";
import Project from "@/components/section-project/project";
import Link from "next/link";

export default function Page() {
  return (
    <main className="w-full flex h-screen  flex-col ">
      <div className="w-full flex-1 mt-10 max-w-5xl mx-auto ">
        {/* section-home */}
        <Home />
        {/* section-about */}
        <About />
        {/* section-project */}
        <Project />
        {/* section-constant */}
        <Constant />
        <footer className="flex flex-col items-center p-16">
          <div className="text-xs md:text-sm text-foreground/70 leading-relaxed">
            Copyright 2024. HYUNJIN All rights reserved.
          </div>
          <div className="flex mt-2 p-1 text-sm md:text-base text-foreground/70 leading-relaxed">
            <Link href="https://github.com/sin-hyunjin" className="flex">
              <GithubIcon className="p-1"></GithubIcon> <p>GitHub/portfolio</p>
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
