- ### 라이브러리 버전

  - **pnpm**: 패키지 관리 도구로 사용 중
  - **Tailwind CSS**: `^3.4.1`
  - **Next.js**: `14.2.8`
  - **TypeScript**: `^5`
  - **clsx**: `^2.1.1`

  ### 주요 라이브러리

  #### UI 및 다크 모드

  - **Shadcn/ui**: [Shadcn UI 문서](https://ui.shadcn.com/docs/installation/next)
    - 다크 모드 및 다양한 UI 컴포넌트 제공
    - 설치 및 사용법이 간단하여 빠르게 UI를 구성할 수 있습니다.
  - **Next-Themes**:
    - 코드 단 2줄로 다크 모드 적용 가능
    - 시스템 옵션 추가 (prefers-color-scheme 변수 활용)
    - 최초 로드 시 깜빡임 없음 (SSR, SSG 모두 지원)
    - 테마 전환 시 번쩍임 없음
    - 페이지별 테마 구분 가능
    - `useTheme` 훅 사용 가능

  #### 아이콘

  - Lucide React

    : 

    Lucide Icons 문서

    - 다양한 아이콘을 React 컴포넌트 형태로 제공

  #### 애니메이션

  - Framer Motion

    : 

    Framer Motion 문서

    - 복잡한 애니메이션을 쉽게 구현할 수 있는 라이브러리

  ### 배포 및 데이터베이스

  - **Vercel**: 애플리케이션 배포

  ### 테스트

  - **React Testing Library**: React 컴포넌트의 유닛 테스트 및 DOM 테스트
  - **Jest**: 테스트 러너 및 프레임워크

  ### 에러 처리

  - LocalStorage 에러
    - **원인**: CSR과 SSR의 차이로 인한 에러
      - Next.js는 클라이언트 사이드 렌더링 전에 서버 사이드 렌더링을 수행하는데 서버 사이드에서는 `window`와 `document` 전역 객체를 사용할 수 없음.
      - `localStorage` 접근 시 `ReferenceError: localStorage is not defined` 에러 발생.
    - **해결 방법**:
      1. `typeof window !== 'undefined'`: 클라이언트에 마운트된 후 `localStorage`에 접근하고
      2. `useEffect`: CSR 전용 이벤트로, 클라이언트 사이드에서만 실행되므로 `localStorage`에 안전하게 접근할 수 있게함.
