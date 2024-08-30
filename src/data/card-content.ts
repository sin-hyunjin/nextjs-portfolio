// src/data/cardContent.ts
import { CardContent } from "@/types/index";

import chukapoka from "@/assets/icons/chukapoka.png";
import chukapokaIcon from "@/assets/icons/chukapoka-icon.png";
import gamgi from "@/assets/icons/gamgi-moniter.png";
import gamgiIcon from "@/assets/icons/gamgi-icon.png";
import NDB from "@/assets/icons/NDB.png";
import portfolio from "@/assets/icons/portfolio.svg";
import portfolioIcon from "@/assets/icons/resume-and-cv.png";
import ReactVue from "@/assets/icons/react-vue.svg";

export const CardContents: CardContent[] = [
  {
    title: "Portfoilo",
    subtitle: "개인 포트폴리오",
    image: { src: portfolio, alt: "portfolio 이미지" }, // 수정
    titleIcon: { src: portfolioIcon, alt: "portfolio 아이콘" }, // 수정
    description:
      "Next.js를 사용하여 SSR 웹 개발과 SEO를 중점적으로 개발한 웹사이트 입니다. framer-motion을 활용하여 몇가지 동적인 요소를 넣어 인터랙티브한 페이지를 만들었습니다.",
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Vercle"],
    details: [
      "Next.js 사용 SSR 개발 및 반응형 웹사이트",
      "ui.shadcn,framer-motion등 library를 적용한 빠른 개발",
      "Intersection Observer API를 활용한 스크롤 감지 및 섹션 활성화",
      "Custom Hook을 사용한 hash 기반의 페이지 스크롤 관리",
    ],
    card: [
      { src: "https://shj-portfolio.vercel.app/", msg: "home" },
      { src: "https://github.com/sin-hyunjin/nextjs-portfolio", msg: "github" },
    ],
    leftURL: [
      {
        home: "https://shj-portfolio.vercel.app/",
        code: "https://github.com/sin-hyunjin/nextjs-portfolio",
      },
    ],
  },
  {
    title: "Cukapoka",
    subtitle: "온라인 축하 편지 공유 사이트",
    image: { src: chukapoka, alt: "Cukapoka 이미지" },
    titleIcon: { src: chukapokaIcon, alt: "Cukapoka 아이콘" },
    description:
      "온라인으로 선물과 편지를 손쉽게 공유할 수 있는 플랫폼입니다. 사용자들은 다양한 선물과 개인화된 편지를 트리로 제작하고, 소중한 순간에 맞춰 친구와 가족에게 전송할 수 있습니다. ",
    techStack: [
      "Vue.js",
      "TypeScript",
      "SCSS",
      "PostgreSQL",
      "SpringBoot",
      "SPA",
    ],
    details: [
      "공지사항 및 알림 페이지 구현",
      "Swagger로 사용자 데이터, 선물, 편지 API 개발",
      "Spring Security, JWT, OAuth2를 활용한 로그인 처리 구현",
      "이메일을 통한 인증코드 전송 기능",
    ],
    card: [
      { src: "https://chkapoka-client.vercel.app/", msg: "home" },
      { src: "https://github.com/Chukapoka", msg: "github" },
      {
        src: "https://www.figma.com/design/6Tu7H514UE9JcZyPffyKjw/20231222_CHUKAPOKA?node-id=16-766&t=FQXtS8SdmNU5HLrB-1",
        msg: "figma",
      },
    ],
    leftURL: [
      {
        home: "https://chkapoka-client.vercel.app/",
        code: "https://github.com/Chukapoka",
      },
    ],
  },
  {
    title: "감기",
    subtitle: "사용자 감정일기 분석 서비스 개발",
    image: { src: gamgi, alt: "Cukapoka 이미지" }, // 수정
    titleIcon: { src: gamgiIcon, alt: "Cukapoka 아이콘" }, // 수정
    description:
      "AI 감정분석 기술을 통해 사용자가 자신을 돌아보고 감정을 관리할 수 있는 경험을 제공하는 플랫폼입니다. 일기 쓰기를 통해 본인의 감정을 파악하여 다스릴 수 있으 며 감정을 관리하는데 도움을 줄 수 있는 감정 일기의 필요성을 느껴서 이프로젝트 를 진행하게 되었습니다.",
    techStack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "Python",
      "MySQL",
      "Chartjs",
    ],
    details: [
      "figma를 활용하여 웹페이지 디자인 및 데이터 설계현",
      "jwt를 이용 토큰 처리 및 로그인 관리",

      "Chartjs로 사용자 감정 기록에 따른 그래프 표시",
      "최근 일기 기록 목록리스트 페이지 ",
    ],
    card: [
      { src: "https://diary-feelings.vercel.app/", msg: "home" },
      { src: "https://github.com/JS-A-CoreProject", msg: "github" },
      {
        src: "https://www.figma.com/design/BJDk4xSL2vRA6EzlMn618t/%EC%8B%A4%EC%A0%84%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?node-id=5-438&t=EeGEilf3xREagSBN-1",
        msg: "figma",
      },
    ],
    leftURL: [
      {
        home: "https://diary-feelings.vercel.app/",
        code: "https://github.com/sin-hyunjin/DiaryFeelings",
      },
    ],
  },
  {
    title: "NDB",
    subtitle: "Chat GPT를 이용한 코딩학습서비스",
    image: { src: NDB, alt: "Cukapoka 이미지" }, // 수정
    titleIcon: { src: gamgiIcon, alt: "Cukapoka 아이콘" }, // 수정
    description:
      "IT취업 희망자 수가 증가하고 있습니다. 저 역시 공부중이지만 javascript를 공부하고 axios와 promise, async/await를 활용 등 원하는 개념의 예제를 찾기가 어렵다는 점 이 있었습니다. 그래서 내가 원하는 개념을 쉽게 찾고, 설명이 있으면 좋겠다 생각하 여 개발하게 되었습니다.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Node.js", "MySQL", "ChatGPT"],
    details: [
      "사용자가 직접 코딩 학습을 위한 문제를 생성하고 공유할 수 있는 기능을 제공",
      "ChatBot를 이용한 자동 코드 리뷰 및 피드백 기능",
      "JavaScript, Axios, Promise, Async/Await 등을 포함한 다양한 학습 모듈 제공",
    ],
    card: [
      { src: "#", msg: "home" },
      { src: "https://github.com/eunwooGOD/NDB_Core_Project", msg: "github" },
    ],
    leftURL: [{ home: "#", code: "#" }],
  },
  {
    title: "React & Vue",
    subtitle: "React와 Vue에 대한 기술키우기",
    image: { src: ReactVue, alt: "ReactVue 이미지" }, // 수정
    titleIcon: { src: ReactVue, alt: "Cukapoka 아이콘" }, // 수정
    description:
      "React.dev 공식 사이트 레이아웃과 Vue.dev 공식 사이트 레이아웃 구현하면서 기술에 대한 이해도를 키웠습니다.",
    techStack: ["React.js", "Vue.js", "tailwindCSS", "HTML", "Javascript"],
    details: [
      "React 컴포넌트를 활용하여 각 섹션의 구성 요소를 모듈화하고 재사용 가능한 컴포넌트를 개발",
      "Vue 컴포넌트 기반의 개발 방식을 적용하여 각 섹션을 컴포넌트로 분할하고 재사용성을 높임",
    ],
    card: [
      { src: "https://doyou1.github.io/web-study-clone/react/", msg: "react" },
      { src: "https://doyou1.github.io/web-study-clone/vue/", msg: "vue" },
      { src: "https://github.com/doyou1/web-study-clone", msg: "github" },
    ],
    leftURL: [
      {
        home: "https://doyou1.github.io/web-study-clone/react/",
        code: "https://github.com/doyou1/web-study-clone",
      },
      {
        home: "https://doyou1.github.io/web-study-clone/vue/",
        code: "https://github.com/doyou1/web-study-clone",
      },
    ],
  },
];
