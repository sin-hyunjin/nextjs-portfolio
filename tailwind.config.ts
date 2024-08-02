import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: [
    "class", // 다크 모드를 클래스 기반으로 설정
  ],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        dark: "black",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
