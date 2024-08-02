"use client";

import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [mode, setMode] = useState("system");

  useEffect(() => {
    // 초기 테마 설정
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setMode(savedTheme);
    } else {
      setMode("system");
    }
  }, []);

  useEffect(() => {
    // 다크 모드 클래스 적용
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (mode === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else if (mode === "system") {
      if (prefersDarkScheme) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", "system");
    }
  }, [mode]);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else if (mode === "dark") {
      setMode("system");
    } else if (mode === "system") {
      setMode("light");
    }
  };

  const getButtonLabel = () => {
    if (mode === "light") {
      return "☀️ Light Mode";
    } else if (mode === "dark") {
      return "🌙 Dark Mode";
    } else {
      return "🌐 System Mode";
    }
  };

  console.log(mode);
  return (
    <button
      onClick={toggleMode}
      className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
    >
      {getButtonLabel()}
    </button>
  );
};

export default DarkModeToggle;
