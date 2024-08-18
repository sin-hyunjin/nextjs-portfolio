import Home from "@/components/section-home/home";
import Image from "next/image";
import Group2 from "@/assets/icons/Group 2 1.svg";
import Group3 from "@/assets/icons/Group 2.svg";

export default function Page() {
  return (
    <>
      <main className="w-full flex-1 mt-10 max-w-5xl mx-auto">
        {/* section-home */}
        <Home></Home>
        {/* section-about */}
        <section
          id="about"
          className="flex flex-col px-10 justify-around min-h-[40rem]  scroll-mt-20 "
        >
          {/* 제목 */}
          <div className="flex justify-end">
            <h1
              className={`font-bold text-foreground/80 text-5xl tracking-tighter md:text-7xl sm:text-6xl`}
            >
              ABOUT.
              <p className="text-xs tracking-normal text-foreground/50 pl-1 md:text-base sm:text-sm">
                저는 이런 생각을 가지고 있습니다.
              </p>
            </h1>
          </div>
          {/* introduce */}
          <div>123123</div>
          {/* skills */}
          <div>
            <h3
              className={`font-bold text-foreground/80 text-lg pl-12 tracking-tighter md:text-2xl sm:text-xl`}
            >
              Stacks
            </h3>

            <div className="flex flex-row justify-between ">
              {/* 왼쪽 스킬 */}
              <div className="flex flex-col w-60 m-10 ">
                <strong className="pl-2 mt-4"># Front-end</strong>
                <div className="flex flex-wrap  mt-5">
                  <div className="flex justify-center items-center font-medium p-2 m-2 text-center text-xs rounded-lg bg-foreground/10 text-foreground/75">
                    HTML
                  </div>
                  <div className="flex justify-center items-center font-medium p-2 m-2 text-center text-xs rounded-lg bg-foreground/10 text-foreground/75">
                    CSS
                  </div>
                  <div className="flex justify-center items-center font-medium p-2 m-2 text-center text-xs rounded-lg bg-foreground/10 text-foreground/75">
                    JavaScript
                  </div>
                  <div className="flex justify-center items-center font-medium p-2 m-2 text-center text-xs rounded-lg bg-foreground/10 text-foreground/75">
                    TypeScript
                  </div>
                  <div className="flex justify-center items-center font-medium p-2 m-2 text-center text-xs rounded-lg bg-foreground/10 text-foreground/75">
                    React
                  </div>
                  <div className="flex justify-center items-center font-medium p-2 m-2 text-center text-xs rounded-lg bg-foreground/10 text-foreground/75">
                    Nextjs
                  </div>
                  <div className="flex justify-center items-center font-medium p-2 m-2 text-center text-xs rounded-lg bg-foreground/10 text-foreground/75">
                    React Query
                  </div>
                </div>
              </div>
              {/* 이미지 */}
              <div className="hidden items-center my-5 md:flex">
                <Image className="w-60" src={Group2} alt=""></Image>
              </div>
              {/* 오른쪽 스킬 */}
              <div className="flex flex-col w-60 m-10 ">
                <strong className="pl-2 mt-4"># Back-end</strong>
                <div className="flex flex-wrap  mt-5">
                  <div className="flex justify-center items-center font-medium p-2 m-2 text-center text-xs rounded-lg bg-foreground/10 text-foreground/75">
                    Java
                  </div>
                  <div className="flex justify-center items-center font-medium p-2 m-2 text-center text-xs rounded-lg bg-foreground/10 text-foreground/75">
                    RestAPI
                  </div>
                  <div className="flex justify-center items-center font-medium p-2 m-2 text-center text-xs rounded-lg bg-foreground/10 text-foreground/75">
                    Spring Boot
                  </div>

                  <div className="flex justify-center items-center font-medium p-2 m-2 text-center text-xs rounded-lg bg-foreground/10 text-foreground/75">
                    Spring Security
                  </div>
                  <div className="flex justify-center items-center font-medium p-2 m-2 text-center text-xs rounded-lg bg-foreground/10 text-foreground/75">
                    JPA
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center my-5 md:hidden">
            <Image className="w-60" src={Group2} alt=""></Image>
          </div>
          <div className="flex justify-center items-center "></div>
        </section>

        {/* section-project */}
        <section
          id="project"
          className="min-h-screen bg-gray-300 p-8 scroll-mt-20"
        >
          <h2 className="text-3xl font-bold">Project</h2>
          <p>Details of our projects.</p>
        </section>
        <section
          id="constant"
          className="min-h-screen bg-gray-400 p-8 scroll-mt-20"
        >
          <h2 className="text-3xl font-bold">Constant</h2>
          <span>Information on constants.</span>
        </section>
      </main>
      <div className="w-full bg-slate-50">목차</div>
    </>
  );
}
