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
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // 섹션이 뷰포트에 보이면 해시 값을 업데이트
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id && window.location.hash !== `#${id}`) {
            window.history.replaceState(null, "", `#${id}`);
            setHash(`#${id}`);
          }
        }
      });
    };
    // Intersection Observer 인스턴스를 생성
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  // 링크를 클릭했을 때 해시 값을 업데이트
  const handleLinkClick = (href: string) => {
    setHash(href);
    window.location.hash = href;
  };

  const [menuToggle, setMenuToggle] = useState<boolean>(true);
  const handleClickMenuToggle = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex justify-between max-w-5xl mx-auto ">
        {/* 제목왼쪽 */}
        <div className="flex justify-start items-center text-lg font-semibold px-10">
          <Link href={links[0].href}>현진 포트폴리오</Link>
        </div>
        {/* Link 오른쪽 */}
        <div className="flex p-5 ">
          {/* 햄버거 버튼 (768px 이하 화면에서만 보임) */}
          <button
            className="md:hidden flex items-center p-3"
            onClick={handleClickMenuToggle}
          >
            버튼
          </button>

          {/* (768px 이상 화면에서만 보임) */}
          <div className={cn("hidden md:flex")}>
            {links.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
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
            onClick={() => handleLinkClick(link.href)}
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
