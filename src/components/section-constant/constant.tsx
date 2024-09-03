import Link from "next/link";

import GithubIcon from "@/assets/icons/github-icon";
import MessageWithForm from "./message-with-form";

export default function Constant() {
  return (
    <section
      id="constant"
      className="flex flex-col  min-h-screen p-8  scroll-mt-14"
    >
      {/* 제목 */}
      <div className="flex justify-end border-t-2 border-t-foreground/10">
        <h1
          className={`font-bold text-foreground/80 text-5xl tracking-tighter md:text-7xl sm:text-6xl`}
        >
          CONSTANT.
          <p className="text-xs tracking-normal text-foreground/50 pl-1 md:text-base sm:text-sm">
            끝까지 봐주셔서 정말 감사합니다!
          </p>
        </h1>
      </div>
      {/* 나의 생각 */}
      <div className="mb-20 flex flex-col  gap-4 max-w-3xl p-10">
        <span className="text-base md:text-lg text-foreground leading-relaxed">
          &quot;어떻게 하면 사용자가 더 쓰기 편한 서비스를 만들 수 있을까?&quot;
        </span>

        <p className="text-xs md:text-sm text-foreground/70 leading-relaxed">
          {" "}
          안녕하세요! 프론트엔드 개발자 신현진입니다.
        </p>
        <p className="text-xs md:text-sm text-foreground/70 leading-relaxed max-w-xl">
          인공지능 사관학교에서 다양한 프로젝트와 스터디에서 여러 프로젝트를
          진행하였고, 이를 통해 웹 개발 업무 프로세스에 대한 전반적인 이해를
          습득하였습니다.
        </p>
        <p className="text-xs md:text-sm text-foreground/70 leading-relaxed max-w-xl">
          개발하면서 제가 느낀 좋은 IT 서비스는 사용자의 입장에서 쓰기 편한
          서비스라고 생각하며, 항상 사용자의 관점을 고려하여 개발하고 있습니다.
        </p>
        <p className="text-xs md:text-sm text-foreground/70 leading-relaxed">
          현재는 거창한 업무 성과보다 사용자의 작은 문제 해결에 끝까지 몰입할 수
          있는 신입 개발자입니다. <br />
          이런 저의 성장 가능성을 믿고 이끌어 줄 회사를 찾고 있습니다.
        </p>
      </div>
      <div className="w-full h-1 border border-foreground/10 shadow-xl"></div>
      {/* 카드  */}
      <div className="relative flex flex-col md:flex-row w-full p-10 mt-10 rounded-lg  ">
        {/* Left Section */}

        <div className="flex flex-col justify-between w-full md:w-1/3 mb-6 md:mb-0">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-foreground/80 text-xl md:text-2xl">
              CONTACT
            </h1>
            <h1 className="font-bold text-foreground/80 text-sm md:text-base ">
              어떠한 말씀도 소중하게 담고 배우겠습니다.
            </h1>
            <span className="mb-10 font-bold text-foreground/80 text-sm md:text-base ">
              사소한 의견도 감사히 받겠습니다.
            </span>
          </div>
          <div className="space-y-4">
            <Link href="mailto:blackduvet52@gmail.com?">
              <button className="w-full px-4 py- h-12 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-300">
                MAIL
              </button>
            </Link>
            <Link href="https://github.com/sin-hyunjin">
              <button className="w-full px-4 py-2 h-12 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:ring-2 focus:ring-gray-400 flex items-center justify-center space-x-2">
                <GithubIcon className="w-5 h-5" />
                <span>GITHUB</span>
              </button>
            </Link>
            <Link href="https://sin-hyunjin.github.io">
              <button className="w-full px-4 py-2 h-12 text-sm font-medium text-white bg-teal-500 rounded-lg hover:bg-teal-600 focus:ring-2 focus:ring-teal-300">
                BLOG
              </button>
            </Link>
          </div>
        </div>
        {/* Right Section with Form */}
        <div className="flex-1 w-full md:w-2/3 ml-0 md:ml-8">
          <MessageWithForm />
        </div>
      </div>
    </section>
  );
}
