import { CarouselDApiDemo } from "@/components/(overview)/section-project/carousel-d-api-demo";
import { Text } from "@/components/text";
import { scrollToSection } from "@/lib/utils";
import { ArrowBigDownDash } from "lucide-react";
import Link from "next/link";

export default function Project() {
  return (
    <section
      id="project"
      className="flex flex-col min-h-screen p-8 justify-between scroll-mt-10"
    >
      {/* 제목 */}

      <div className="flex justify-start border-t-2 border-t-foreground/10">
        <h1
          className={`font-bold text-foreground/80 text-5xl tracking-tighter md:text-7xl sm:text-6xl`}
        >
          PROJECT.
          <p className="text-xs tracking-normal text-foreground/50 pl-1 md:text-base sm:text-sm">
            지금까지 수행한 작업과 프로젝트 결과물입니다.
          </p>
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        {/* carousel */}
        <CarouselDApiDemo />
      </div>
      <div className="flex justify-center items-center mt-20">
        <Link href="#constant" onClick={(e) => scrollToSection(e, "#constant")}>
          {" "}
          <ArrowBigDownDash className="arrow" />
        </Link>
      </div>
    </section>
  );
}
