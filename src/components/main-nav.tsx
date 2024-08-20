"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import GithubIcon from "@/assets/icons/github-icon";
import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";
import useScrollManager from "@/lib/use-scroll-manager";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Project", href: "#project" },
  { name: "Constant", href: "#constant" },
];

export default function MainNav() {
  const { handleLinkClick } = useScrollManager(); // 훅을 사용
  const [menuToggle, setMenuToggle] = useState<boolean>(true);
  const sectionLog = localStorage.getItem("currentHash");
  const handleClickMenuToggle = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-background/95 border-border backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b-0 shadow-b-shadow">
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
              <Menu />
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
                      "text-foreground": sectionLog === link.href,
                    }
                  )}
                >
                  <p>{link.name}</p>
                </Link>
              ))}
              <div className="flex h-[48px] items-center justify-center gap-1 p-3 text-sm font-medium">
                {"|"}
                <ModeToggle />
                <Link href="#">
                  <GithubIcon
                    className="fill-foreground/60 hover:fill-foreground"
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
                  "bg-sky-100 text-blue-600": sectionLog === link.href,
                }
              )}
            >
              <p>{link.name}</p>
            </Link>
          ))}
        </div>
      </header>
      <div className="fixed w-30 right-0 top-1/2 pr-3 transform -translate-y-1/2 flex flex-col justify-center space-y-1">
        {links.map((link) => (
          <div key={link.name} className="flex justify-end group">
            <div className="hidden text-tiny text-foreground/75 group-hover:block">
              {link.name}
            </div>
            <Link
              href={link.href}
              className="w-4 h-4 flex justify-center items-center cursor-pointer"
              onClick={(e) => handleLinkClick(link.href, e)}
            >
              <div
                className={cn(
                  " bg-foreground/80 rounded-full transition-all duration-100 ",
                  {
                    "w-2.5 h-2.5": sectionLog === link.href,
                    "w-1 h-1 group-hover:w-2 group-hover:h-2":
                      sectionLog !== link.href,
                  }
                )}
              ></div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
