"use client";

import Link from "next/link";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Image from "next/image";
import github from "@assets/icons/github.svg";
const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Project", href: "#project" },
  { name: "Constant", href: "#constant" },
];

export default function NavLink() {
  //url(#)해쉬 설정
  const [hash, setHash] = useState<string>("");
  useEffect(() => {
    // 초기 해시 값 설정
    const updateHash = () => {
      setHash(window.location.hash);
    };
    window.addEventListener("hashchange", updateHash);
    updateHash();
    // 컴포넌트 언마운트 시 이벤트 리스너를 제거
    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  const handleLinkClick = (href: string) => {
    setHash(href);
    // 해시값을 실제로 URL에 적용
    window.location.hash = href;
  };

  // 햄버거 토글 버튼 설정
  const [meneToggle, setMenuToogle] = useState<boolean>(true);
  const handleClickMenuToggle = () => {
    setMenuToogle(!meneToggle);
  };

  return (
    <div>
      <div className=" flex justify-between  max-w-5xl mx-auto  ">
        {/* 제목왼쪽 */}
        <div className="flex justify-start items-center text-lg font-semibold px-10">
          <Link href={links[0].href}>현진 포트폴리오</Link>
        </div>
        {/* Link 오른쪽 */}
        <div className="flex p-5 ">
          {/* 햄버거 버튼 (768px 이하 화면에서만 보임) */}
          <button
            className="md:hidden flex items-center p-3 "
            onClick={handleClickMenuToggle}
          >
            버튼{" "}
          </button>

          {/* (768px 이상 화면에서만 보임) */}
          <div className={clsx(" hidden md:flex ")}>
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={clsx(
                  "flex h-[48px] items-center justify-center gap-2  p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600",
                  {
                    "bg-sky-100 text-blue-600": hash === link.href,
                  }
                )}
                // className="absolute"
              >
                <p>{link.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div
        className={clsx("w-full md:hidden", {
          block: !meneToggle, // meneToggle이 true일 때 "block" 클래스를 적용
          hidden: meneToggle, // meneToggle이 false일 때 "hidden" 클래스를 적용
        })}
      >
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => handleLinkClick(link.href)}
            className={clsx(
              "flex h-[48px] items-center justify-center gap-2  p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600",
              {
                // "bg-sky-100 text-blue-600": hash === link.href,
              }
            )}
            // className="absolute"
          >
            <p>{link.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
