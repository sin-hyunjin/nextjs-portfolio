"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import GithubIcon from "@/assets/icons/github-icon";
import { ModeToggle } from "./mode-toggle";

// 내비게이션 링크의 배열
const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Project", href: "#project" },
  { name: "Constant", href: "#constant" },
];

export default function MainNav() {
  const [hash, setHash] = useState<string>("");

  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash || "#home";
      setHash(currentHash);
      const targetElement = document.querySelector(currentHash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        localStorage.setItem("currentHash", currentHash); // 해시값 저장
      }
    };

    // 페이지 로드 시 URL 해시값 및 스크롤 위치 복원
    const savedHash = localStorage.getItem("currentHash") || "#home";
    const savedScrollPosition = localStorage.getItem("scrollPosition");

    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition, 10));
    }

    // 해시값 복원
    window.location.hash = savedHash;
    handleHashChange();

    // Intersection Observer 설정
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8, // 섹션이 80% 보일 때를 기준으로 설정
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          const currentHash = `#${id}`;
          if (id && hash !== currentHash) {
            setHash(currentHash);
            localStorage.setItem("currentHash", currentHash);
            // 섹션 상단으로 즉시 스크롤 이동
            entry.target.scrollIntoView({ behavior: "smooth", block: "start" });
            window.history.replaceState(null, "", currentHash);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    sections.forEach((section) => observer.observe(section));

    // `popstate` 이벤트 리스너 추가
    window.addEventListener("popstate", handleHashChange);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("popstate", handleHashChange);
    };
  }, [hash]);

  const handleLinkClick = (
    href: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault(); // 기본 링크 동작 방지
    setHash(href);
    window.history.pushState(null, "", href); // URL의 해시를 업데이트
    localStorage.setItem("currentHash", href); // 해시값 저장
    localStorage.setItem("scrollPosition", window.scrollY.toString()); // 현재 스크롤 위치 저장
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" }); // 부드러운 스크롤 이동
    }
  };

  const [menuToggle, setMenuToggle] = useState<boolean>(true);
  const handleClickMenuToggle = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/95 border-border backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex justify-between max-w-5xl mx-auto">
        {/* 제목왼쪽 */}
        <div className="flex justify-start items-center text-lg font-semibold px-10">
          <Link href={links[0].href}>현진 포트폴리오</Link>
        </div>
        {/* Link 오른쪽 */}
        <div className="flex p-5">
          {/* 햄버거 버튼 (768px 이하 화면에서만 보임) */}
          <button
            className="md:hidden flex items-center p-3"
            onClick={handleClickMenuToggle}
          >
            버튼
          </button>

          {/* (768px 이상 화면에서만 보임) */}
          <div className={cn("hidden md:flex")}>
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(link.href, e)}
                className={cn(
                  "flex h-[48px] items-center justify-center gap-2 p-3 text-sm font-medium text-foreground/60 hover:text-foreground/85",
                  {
                    "text-foreground": hash === link.href,
                  }
                )}
              >
                <p>{link.name}</p>
              </Link>
            ))}
            <div className="flex h-[48px] items-center justify-center gap- p-3 text-sm font-medium">
              {"|"}
              <ModeToggle />
              <Link href="#">
                <GithubIcon
                  className="fill-foreground/60"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* (768px 이상 화면에서 메뉴버튼 활성화 할 시 보임) */}
      <div
        className={cn("w-full md:hidden", {
          block: !menuToggle, // menuToggle이 true일 때 "block" 클래스를 적용
          hidden: menuToggle, // menuToggle이 false일 때 "hidden" 클래스를 적용
        })}
      >
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={(e) => handleLinkClick(link.href, e)}
            className={cn(
              "flex h-[48px] items-center justify-center gap-2 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600",
              {
                "bg-sky-100 text-blue-600": hash === link.href,
              }
            )}
          >
            <p>{link.name}</p>
          </Link>
        ))}
      </div>
    </header>
  );
}
