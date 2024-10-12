import type { Metadata } from "next";
import "@/assets/css/globals.css";
import "normalize.css"; // reset.css
import { poppins } from "@/assets/fonts/fonts";
import { ThemeProvider } from "@/stores/providers/theme-provider";
import { MainNav } from "@/components/(overview)";

export const metadata: Metadata = {
  title: "HJ Portfolio",
  description: "HYUNJIN 포트폴리오 페이지입니다.",
  keywords: ["Portfolio", "Hyunjin", "Web Developer", "Frontend"],
  icons: {
    icon: "/HJ..svg",
  },
  openGraph: {
    title: "HJ Portfolio",
    description: "HYUNJIN 포트폴리오 페이지입니다.",
    url: "https://shj-portfolio-git-main-sin-hyunjins-projects.vercel.app",
    siteName: "HJ Portfolio",
    images: [
      {
        url: "https://shj-portfolio-git-main-sin-hyunjins-projects.vercel.app/og-image.jpg",
        width: 800,
        height: 600,
        alt: "HJ Portfolio 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HJ Portfolio",
    description: "HYUNJIN 포트폴리오 페이지입니다.",
    images: [
      "https://shj-portfolio-git-main-sin-hyunjins-projects.vercel.app/twitter-image.jpg",
    ],
  },
  alternates: {
    canonical:
      "https://shj-portfolio-git-main-sin-hyunjins-projects.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${poppins.className} w-full flex h-screen flex-col justify-center`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* 네비 게이션 */}
          <MainNav />

          {/* 콘텐츠 */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
