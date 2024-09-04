"use client";

import { useEffect, useState } from "react";
import { Menu, FileDown } from "lucide-react";
import Link from "next/link";
import GithubIcon from "@/assets/icons/github-icon";
import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";
import useScrollManager from "@/hooks/use-scroll-manager";
import ScrollMotion from "@/components/scroll-motion";
import { useTheme } from "next-themes";
import SubNav from "./sub-nav";

// Theme labels를 객체로 관리하여 OCP 준수
const themeLabels: Record<string, string> = {
  light: "라이트",
  dark: "다크",
  system: "시스템",
};

const links = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "PROJECT", href: "#project" },
  { name: "CONSTANT", href: "#constant" },
];

const getThemeLabel = (theme: string | null) => themeLabels[theme || "system"];

// 메뉴 토글 상태를 위한 별도 컴포넌트로 분리
function HambergerMenuToggle({
  menuToggle,
  handleClick,
}: {
  menuToggle: boolean;
  handleClick: () => void;
}) {
  return (
    <button className="md:hidden flex items-center p-3" onClick={handleClick}>
      <Menu />
    </button>
  );
}

// 메인 네비게이션 컴포넌트
export default function MainNav() {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string | null>(null);
  const { hash, handleLinkClick } = useScrollManager();
  const [menuToggle, setMenuToggle] = useState<boolean>(true);

  useEffect(() => {
    setCurrentTheme(theme || "light");
  }, [theme]);

  const handleClickMenuToggle = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <header>
      {/* Main Nav */}
      <div className="fixed top-0 left-0 w-full z-50 bg-background/95 border-border backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b-0 shadow-b-shadow">
        <ScrollMotion />
        <div className="flex justify-between max-w-5xl mx-auto">
          {/* 제목왼쪽 */}
          <div className="flex justify-start items-center text-lg font-semibold px-10">
            <Link
              href={links[0].href}
              onClick={(e) => handleLinkClick(links[0].href, e)}
            >
              현진 포트폴리오
            </Link>
          </div>
          {/* Link 오른쪽 */}
          <div className="flex p-5">
            <HambergerMenuToggle
              menuToggle={menuToggle}
              handleClick={handleClickMenuToggle}
            />

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
              <div className="relative flex h-[48px] items-center justify-center p-2 text-sm font-medium">
                <div className="mr-1 opacity-40">{"|"}</div>

                <div className="group -m-1 ">
                  {" "}
                  <ModeToggle />
                  <p className=" absolute hidden group-hover:block w-9 text-[10px] px-1 text-foreground/75 text-center">
                    {getThemeLabel(currentTheme)}
                  </p>
                </div>

                <div className="group">
                  <Link href="https://github.com/sin-hyunjin">
                    <div className="hover:bg-foreground/10 rounded-full p-1">
                      <GithubIcon
                        className="fill-foreground/60 hover:fill-foreground "
                        width={24}
                        height={24}
                      />
                    </div>
                    <p className="absolute hidden group-hover:block text-[10px] px-1  text-foreground/75 ">
                      깃허브
                    </p>
                  </Link>
                </div>

                <div className="ml-1 group">
                  <Link href="https://drive.google.com/file/d/12cvzd1Ip7ItjbMB-EDypu63PZrRGHxMr/view?usp=drive_link">
                    <div className="hover:bg-foreground/10 rounded-md p-1">
                      <FileDown className="stroke-foreground/60 hover:stroke-foreground" />
                    </div>
                    <p className="absolute hidden group-hover:block text-[10px] px-1  text-foreground/75 ">
                      이력서
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* (768px 이하 화면에서 메뉴버튼 활성화 할 시 보임) */}
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
                "flex h-[48px] items-center justify-center gap-2 p-3 text-sm font-medium hover:bg-foreground/10 hover:text-foreground",
                {
                  "bg-foreground/90 text-background": hash === link.href,
                }
              )}
            >
              <p>{link.name}</p>
            </Link>
          ))}
          <div className="flex items-center justify-center">
            <div>
              {" "}
              <ModeToggle />
            </div>
            <Link href="https://github.com/sin-hyunjin">
              <div className="m-4 hover:bg-foreground/10 p-1 rounded-full">
                <GithubIcon />
              </div>
            </Link>
            <Link href="https://drive.google.com/file/d/12cvzd1Ip7ItjbMB-EDypu63PZrRGHxMr/view?usp=drive_link">
              <div className="ml-2 hover:bg-foreground/10 p-1 rounded-sm">
                <FileDown />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Sub-Navigation */}
      <SubNav
        links={links}
        hash={hash}
        handleLinkClick={handleLinkClick}
      ></SubNav>
    </header>
  );
}
