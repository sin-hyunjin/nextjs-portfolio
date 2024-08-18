import { Inter as FontSans, Lusitana, Poppins } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--lusitana",
});

export const poppins = Poppins({
  weight: ["400", "500", "600", "700"], // 원하는 가중치 추가 (기본, 볼드)
  subsets: ["latin"], // 필요한 서브셋 추가
  style: ["normal"], // 스타일 설정
  display: "swap", // 폰트 로딩 전략
});
