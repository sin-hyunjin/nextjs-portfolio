"use client";

import GithubIcon from "@/assets/icons/github-icon";
import Link from "next/link";

import Home from "@/components/section-home/home";
import About from "@/components/section-about/about";
import Project from "@/components/section-project/project";
import Constant from "@/components/section-constant/constant";
import LoadingScreen from "@/components/loading-screen";
import { useEffect, useState } from "react";
import useScrollManager from "@/hooks/use-scroll-manager";

// Main Page 컴포넌트
export default function Page() {
  const [loading, setLoading] = useState(true); //로딩 상태를 관리하는 상태 변수
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>{loading ? <LoadingScreen text="HJ. PORTFOLIO" /> : <MainContent />}</>
  );
}

// MainContent를 별도로 분리하여 SRP 원칙 적용
function MainContent() {
  // 해시 값을 페이지 로딩 후 처리하기 위해, MainContent 컴포넌트 내에서 useScrollManager 훅을 호출하도록 수정
  useScrollManager();
  return (
    <>
      <main className="w-full flex h-screen flex-col">
        <div className="w-full flex-1 mt-10 max-w-5xl mx-auto ">
          <Home />
          <About />
          <Project />
          <Constant />
          <Footer />
        </div>
      </main>
    </>
  );
}

// Footer를 분리하여 Footer 관리
function Footer() {
  return (
    <footer className="flex flex-col items-center p-16">
      <div className="text-xs md:text-sm text-foreground/70 leading-relaxed">
        Copyright 2024. HYUNJIN All rights reserved.
      </div>
      <div className="flex mt-2 p-1 text-sm md:text-base text-foreground/70 leading-relaxed">
        <Link href="https://github.com/sin-hyunjin" className="flex">
          <GithubIcon className="p-1" /> <p>GitHub/portfolio</p>
        </Link>
      </div>
    </footer>
  );
}
