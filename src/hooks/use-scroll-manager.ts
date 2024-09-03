"use client";
import { useEffect } from "react";
import useHashStore from "../store/hash-store";
import {
  HashChangeCallback,
  ObserverCallback,
  HandleLinkClick,
} from "@/types/hash-types";

const useScrollManager = () => {
  const { hash, setHash } = useHashStore(); // URL의 해시 상태를 관리하기 위한 hooks

  /**
   *. 1. 해시가 변경될 때마다 호출되는 함수
   *  2. 페이지 내에서 해시가 변경되면 해당 해시로 스크롤을 이동하고, 상태를 업데이트
   */
  useEffect(() => {
    const handleHashChange: HashChangeCallback = () => {
      const currentHash = window.location.hash || "#home";
      setHash(currentHash); // 상태를 업데이트
      const targetElement = document.querySelector(currentHash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState({ hash: currentHash }, "", currentHash);
      }
    };
    // 3. 페이지를 처음 로드할 때, 저장된 상태 또는 해시로 이동
    const savedState = window.history.state;
    const savedHash = savedState?.hash || "#home";

    setTimeout(() => {
      window.location.hash = savedHash;
      handleHashChange();
    }, 0);

    // 4. IntersectionObserver를 사용하여 섹션이 뷰포트에 들어올 때 해시를 업데이트
    const observerCallback: ObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          const currentHash = `#${id}`;
          if (id && window.location.hash !== currentHash) {
            window.history.replaceState({ hash: currentHash }, "", currentHash);
            setHash(currentHash);
          }
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-30% 0px -70% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1.0],
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    window.addEventListener("popstate", handleHashChange);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("popstate", handleHashChange);
    };
  }, [setHash]);

  // 5. 링크 클릭을 처리하는 함수
  const handleLinkClick: HandleLinkClick = (href, event) => {
    event?.preventDefault();
    setHash(href);
    window.history.pushState({ hash: href }, "", href);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return {
    hash,
    handleLinkClick,
  };
};

export default useScrollManager;
