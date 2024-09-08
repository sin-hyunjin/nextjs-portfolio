// src/data/
import { CardContent } from "@/types/card-type";
import {
  Chukapoka,
  ChukapokaIcon,
  NDB,
  ReactVue,
  Portfolio,
  PortfolioIcon,
  GamgiMoniter,
  GamgiIcon,
} from "@/assets/icons/(overview)";

export const CardContents: CardContent[] = [
  {
    title: "Portfoilo",
    subtitle: "개인 포트폴리오",
    image: { src: Portfolio, alt: "portfolio 이미지" }, // 수정
    titleIcon: { src: PortfolioIcon, alt: "portfolio 아이콘" }, // 수정
    description:
      "Next.js를 활용하여 데스크탑, 아이패드, 모바일 3가지 반응형과 시스템에 따른 다크모드를 지원하며, framer-motion을 이용해 다양한 동적 요소를 추가하여 인터랙티브한 페이지를 구현했습니다.",
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Zustand", "Vercel"],
    details: [
      "Next.js 사용 SSR 개발 및 반응형 웹사이트",
      "ui.shadcn,framer-motion등 library를 적용한 빠른 개발",
      "Intersection Observer API를 활용하여 스크롤 감지",
      "Custom Hook을 사용하여 hash 기반의 페이지 스크롤 관리",
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
    image: { src: Chukapoka, alt: "Cukapoka 이미지" },
    titleIcon: { src: ChukapokaIcon, alt: "Cukapoka 아이콘" },
    description:
      "온라인으로 선물과 편지를 손쉽게 공유할 수 있는 플랫폼입니다. 사용자들은 다양한 선물과 개인화된 편지를 트리로 제작하고, 소중한 순간에 맞춰 친구와 가족에게 전송할 수 있습니다. ",
    techStack: [
      "Vue.js",
      "TypeScript",
      "SCSS",
      "PostgreSQL",
      "SpringBoot",
      "JPA",
    ],
    details: [
      "Swagger로 사용자 데이터, 선물, 편지 API 설계",
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
    image: { src: GamgiMoniter, alt: "Cukapoka 이미지" }, // 수정
    titleIcon: { src: GamgiIcon, alt: "Cukapoka 아이콘" }, // 수정
    description:
      "AI 감정분석 기술을 통해 사용자가 자신을 돌아보고 감정을 관리할 수 있는 경험을 제공하는 플랫폼입니다. 일기 쓰기를 통해 본인의 감정을 파악하여 다스릴 수 있으며 감정을 관리하는데 도움을 줄 수 있는 감정 일기의 필요성을 느껴서 이 프로젝트를 진행하게 되었습니다.",
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
      "figma를 활용하여 웹페이지 디자인 및 데이터베이스 설계",

      "Chartjs를 library를 통해 사용자 감정 기록에 따른 그래프 표시",
      "많은 내용의 일기를 페이징 처리  ",
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
    titleIcon: { src: GamgiIcon, alt: "Cukapoka 아이콘" }, // 수정
    description:
      "IT취업 희망자 수가 증가하고 있습니다. 저 역시 공부중이지만 javascript를 공부하고 axios와 promise, async/await를 활용 등 원하는 개념의 예제를 찾기가 어렵다는 점 이 있었습니다. 그래서 내가 원하는 개념을 쉽게 찾고, 설명이 있으면 좋겠다 생각하여 개발하게 되었습니다.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Node.js", "MySQL", "ChatGPT"],
    details: [
      "사용자가 언어선택과 검색어를 입력하면 관련 openAPI를 연동해 문제과 결과를 확인가능",
      "openAPI를 활용하여 ChatBot를 이용한 코드 리뷰 및 피드백 기능",
    ],
    card: [
      { src: "https://ndb-project.vercel.app", msg: "home" },
      { src: "https://github.com/sin-hyunjin/NDB_Project", msg: "github" },
    ],
    leftURL: [
      {
        home: "https://ndb-project.vercel.app",
        code: "https://github.com/sin-hyunjin/NDB_Project",
      },
    ],
  },
  {
    title: "React & Vue Clone",
    subtitle: "React와 Vue에 대한 기술키우기",
    image: { src: ReactVue, alt: "ReactVue 이미지" }, // 수정
    titleIcon: { src: ReactVue, alt: "Cukapoka 아이콘" }, // 수정
    description:
      "React.dev 공식 사이트 레이아웃과 Vue.dev 공식 사이트 레이아웃를 클론코딩하여 구현하면서 기술에 대한 이해도를 키웠습니다.",
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
