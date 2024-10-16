"use client";

import Link from "next/link";
import SlotMachine from "@/components/(overview)/section-home/slot-machine";
import { scrollToSection } from "@/lib/utils";
import { ArrowBigDownDash } from "lucide-react";
import { SectionTitle } from "../section-title";

const textData = [
  "사용자 중심의 웹 개발을 배우고 성장하는 중인",
  "더 나은 UI/UX를 위해 지속적으로 노력하는 ",
  "배움을 실천으로 옮기며 웹 개발을하는",
  "실패를 두려워하지 않는",
];

export default function Home() {
  return (
    <section
      id="home"
      className="flex flex-col justify-between min-h-screen p-10 scroll-mt-14 "
    >
      <SectionTitle
        title="Home"
        description="소중한시간 내주셔서 감사합니다!"
      />

      <div className="transform -translate-y-14">
        <h2 className="text-base md:text-xl sm:text-lg">안녕하세요.</h2>
        <div className="my-5 rounded-sm whitespace-nowrap text-ellipsis">
          <SlotMachine textData={textData} />
        </div>
        <p className="text-base md:text-xl sm:text-lg">
          프론트엔드 개발자 <span className="font-bold">신현진</span>
          입니다.
        </p>
      </div>
      <div className="flex justify-center items-center ">
        <Link href="#about" onClick={(e) => scrollToSection(e, "#about")}>
          {" "}
          <ArrowBigDownDash className="arrow" />
        </Link>
      </div>
    </section>
  );
}
