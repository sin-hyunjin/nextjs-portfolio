"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BetweenHorizontalEnd,
  CodeXml,
  TvMinimal,
  BetweenHorizontalStart,
  House,
} from "lucide-react";
import Image from "next/image";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { cardContents } from "@/data/card-content";
import BadgeList from "../ui/badge-list";
import GithubIcon from "@/assets/icons/github-icon";
import FigmaIcon from "@/assets/icons/figma-icon";
import Link from "next/link";
import ReactIcon from "@/assets/icons/react-icon";
import VueIcon from "@/assets/icons/vue-icon";

export function CarouselDApiDemo() {
  const [collet, setCollect] = useState<boolean>(false);

  const handleButtonClickCollte = () => {
    setCollect(!collet);
    console.log(collet);
  };

  const chuka = "Cukapoka 이미지";

  return (
    <>
      <div className="flex w-full justify-end">
        {/* 전체보기 / 간추려서보기 */}
        <button
          className="mr-12 border border-foreground/20 hover:border-foreground/40 p-1 rounded-md group"
          onClick={handleButtonClickCollte}
        >
          {collet ? (
            <BetweenHorizontalStart className="stroke-foreground/50 group-hover:stroke-foreground" />
          ) : (
            <BetweenHorizontalEnd className="stroke-foreground/50 group-hover:stroke-foreground" />
          )}
        </button>
      </div>
      <div className="flex flex-row flex-wrap p-5">
        {cardContents.map((content, index) => (
          <div
            key={index}
            className={cn("flex p-2", {
              "w-[22rem] sm:w-1/2 md:w-1/3 lg:w-1/4": collet,
              "w-full mx-5": !collet,
            })}
          >
            <Card
              className={cn("p-2 shadow-lg group flex flex-col", {
                "w-full ": collet,
                "w-[22rem] sm:w-2/5 mr-4 h-96 md:h-full sm:h-72": !collet,
              })}
            >
              <CardHeader
                className={cn("relative", {
                  "h-40": collet,
                  "h-60": !collet,
                })}
              >
                <Image
                  src={content.image.src}
                  alt={content.image.alt}
                  className=" rounded-lg w-full h-full"
                />
                {/* Hover overlay  inset?*/}
                <div className="absolute m-1 -top-[2px] bottom-1 inset-0 flex justify-center items-center gap-2 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-lg ">
                  {/* github address */}
                  {content.leftURL.map((item, index) => (
                    <div className="flex " key={index}>
                      <Link
                        href={item.home}
                        className="mr-1 p-2 border-2 rounded-full border-white/60 hover:border-white"
                      >
                        <TvMinimal
                          className={cn(" stroke-white", {
                            "w-5 h-5": collet,
                            "w-5 md:w-7 h-5 md:h-7": !collet,
                          })}
                        />
                      </Link>
                      <Link
                        href={item.code}
                        className="ml-1 p-2 border-2 rounded-full border-white/60 hover:border-white"
                      >
                        <CodeXml
                          className={cn(" stroke-white", {
                            "w-5 h-5": collet,
                            "w-5 md:w-7 h-5 md:h-7": !collet,
                          })}
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 justify-between gap-4 relative z-10 ">
                {/* Title */}
                <div className="p-1">
                  <div className="inline-flex">
                    <Image
                      src={content.titleIcon.src}
                      alt={content.titleIcon.alt}
                      className="w-4 h-4 mt-[2px]"
                    ></Image>
                    <span className="text-xs ml-1.5 mb-1 md:text-base">
                      {content.title}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-foreground/80">
                    {content.subtitle}
                  </p>
                </div>

                {/* Stack Badge */}
                <BadgeList techStack={content.techStack} />
              </CardContent>
              <CardFooter className="flex justify-between items-center relative z-10"></CardFooter>
            </Card>
            {/* 오른쪽 카드 콘텐츠  */}
            {!collet && (
              <div className="hidden flex-col sm:flex">
                <Card className=" flex  flex-col  flex-1  ml-4 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-base md:text-xl">
                      {content.subtitle}
                    </CardTitle>
                    <div className=" text-[11px] md:text-[12px] text-foreground/80 leading-relaxed">
                      {content.description}
                    </div>
                  </CardHeader>
                  <CardContent className="p-1 text-base md:text-lg leading-1 text-foreground/90">
                    <h3 className="text-xs md:text-sm font-semibold mb-2 mt-4">
                      개발내용
                    </h3>
                    <ul className="list-disc list-inside  text-[11px] md:text-[12px] mb-4">
                      {content.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <div className="flex justify-around py-5 mt-4 ml-4  rounded-lg shadow-lg">
                  {content.card.map((item, index) => (
                    <div
                      key={index}
                      className="relative flex flex-col justify-center items-center p-1 rounded-full group"
                    >
                      <div className="absolute flex flex-col items-center justify-center transition-all duration-200 ease-in-out">
                        {item.msg === "react" && (
                          <Link href={item.src}>
                            <ReactIcon className="items-center group-hover:fill-blue-400 transition-all duration-200 ease-in-out transform group-hover:-translate-y-1" />
                          </Link>
                        )}
                        {item.msg === "vue" && (
                          <Link href={item.src}>
                            <VueIcon className=" group-hover:stroke-blue-400 transition-all duration-200 ease-in-out transform group-hover:-translate-y-1" />
                          </Link>
                        )}
                        {item.msg === "home" && (
                          <Link href={item.src}>
                            <House className="group-hover:stroke-blue-400 transition-all duration-200 ease-in-out transform group-hover:-translate-y-1" />
                          </Link>
                        )}
                        {item.msg === "github" && (
                          <Link href={item.src}>
                            <GithubIcon className="group-hover:fill-blue-400 transition-all duration-200 ease-in-out transform group-hover:-translate-y-1" />
                          </Link>
                        )}
                        {item.msg === "figma" && (
                          <Link href={item.src}>
                            <FigmaIcon className="group-hover:fill-blue-400 transition-all duration-200 ease-in-out transform group-hover:-translate-y-1" />
                          </Link>
                        )}

                        <div className="hidden text-xs text-center transform scale-75 opacity-0 translate-y-2 group-hover:block group-hover:scale-100 group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-blue-400 transition-all duration-300 ease-in-out">
                          {item.msg}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
