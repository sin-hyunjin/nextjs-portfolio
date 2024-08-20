"use client";
import { useEffect, useState } from "react";

const useScrollManager = () => {
  const [hash, setHash] = useState<string>("");

  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash || "#home";
      setHash(currentHash);
      const targetElement = document.querySelector(currentHash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        localStorage.setItem("currentHash", currentHash); // 해시값 저장
      }
    };

    // 페이지 로드 시 URL 해시값 및 스크롤 위치 복원
    const savedHash = localStorage.getItem("currentHash") || "#home";
    const savedScrollPosition = localStorage.getItem("scrollPosition");

    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition, 10));
    }

    // 해시값 복원
    window.location.hash = savedHash;
    handleHashChange();

    // Intersection Observer 설정
    const sections = document.querySelectorAll("section");

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -30% 0px", // 하단 마진을 조금 줄여서 감지 영역 확장
      threshold: 0.4, // 섹션이 40% 보일 때를 기준으로 설정
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          const currentHash = `#${id}`;
          if (id && window.location.hash !== currentHash) {
            window.history.replaceState(null, "", currentHash);
            setHash(currentHash);
            localStorage.setItem("currentHash", currentHash);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((section) => observer.observe(section));

    // `popstate` 이벤트 리스너 추가
    window.addEventListener("popstate", handleHashChange);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("popstate", handleHashChange);
    };
  }, []);

  const handleLinkClick = (
    href: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault(); // 기본 링크 동작 방지
    setHash(href);
    window.history.pushState(null, "", href); // URL의 해시를 업데이트
    localStorage.setItem("currentHash", href); // 해시값 저장
    localStorage.setItem("scrollPosition", window.scrollY.toString()); // 현재 스크롤 위치 저장
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" }); // 부드러운 스크롤 이동
    }
  };

  return {
    hash,
    handleLinkClick,
  };
};

export default useScrollManager;
