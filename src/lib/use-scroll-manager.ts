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
    setTimeout(() => {
      window.location.hash = savedHash;
      handleHashChange();
    }, 0); // 스크롤 위치 보정을 위한 딜레이

    // Intersection Observer 설정
    const sections = document.querySelectorAll("section");

    const observerOptions = {
      root: null,
      // 높이가 큰 섹션을 고려한 해시 처리
      rootMargin: "-30% 0px -70% 0px", // 상단 마진을 조정하여 감지
      threshold: [0, 0.25, 0.5, 0.75, 1.0], // 다양한 threshold 설정
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
    // Mutation Observer 설정 (섹션의 높이가 변경될 때 감지)
    const mutationObserver = new MutationObserver(() => {
      sections.forEach((section) => observer.observe(section));
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
    });

    // `popstate` 이벤트 리스너 추가
    window.addEventListener("popstate", handleHashChange);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("popstate", handleHashChange);
    };
  }, []);

  const handleLinkClick = (
    href: string,
    event?: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event?.preventDefault(); // 기본 링크 동작 방지
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
