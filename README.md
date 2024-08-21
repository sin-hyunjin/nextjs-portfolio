- pnpm :
- tailwind :
- nextjs :
- typescript :
- clsx :

## library:

#### 다크모드 및 ui

- shadcn/ui : https://ui.shadcn.com/docs/installation/next

#### Icon

- lucide-react : https://lucide.dev/icons/monitor-cog

#### 애니메이션

- framer-motion : https://www.framer.com/motion/

## 다크 모드

Next-Themes
코드 단 2줄로 다크모드 완벽 적용
system 옵션 추가 (prefers-color-scheme 변수 활용)
최초 load시 깜빡임 없음 (SSR, SSG 모두)
탭, 윈도우 전환시 테마 유지
테마 전환시 번쩍임 없음
페이지별로 테마 구분 지정 가능
class, data-theme 환경에서 모두 사용 가능
useTheme hook 사용 가능

## 배포

- vercle
- postgreSql

## 에러

localStorage 에러
에러 원인
CSR과 SSR의 차이로 인한 에러!

Next.js는 client-side 렌더를 하기전에 server-side 렌더를 수행한다.
Next.js에서 제공하는 Server Side Rendering(SSR)에선 client-side에 존재하는 window, document 전역객체를 사용할 수 없다.
그래서 console.log(localStorage)만 코드에 써두고 실행시켜도

ReferenceError: localStorage is not defined
라는 에러가 나온다.

해결방법

1. typeof window !== 'undefined'
   페이지가 client에 마운트될 때까지 기다렸다가 localStorage에 접근해야함.
   window 객체가 참조되지 않을 경우, undefined를 반환함.
   if (typeof window !== 'undefined') {
   localStorage.getItem('accesstoken');
   }
2. useEffect
   useEffect는 렌더링이 되고 난 후 실행되기때문에 server-side에서는 실행되지 않는 CSR 전용 이벤트라고 생각하자.
   useEffect는 렌더링 시 실행되므로, 초기 서버 빌드 시 useEffect 내부 코드는 실행되지 않는다.
   useEffect는 client-side에서만 실행되므로 localStorage에 안전하게 접근 가능하다.
