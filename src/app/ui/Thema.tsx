"use client";
import React, { useEffect, useState } from "react";

const App = () => {
  const [theme, setTheme] = useState(() => {
    // 로컬 스토리지에서 테마 불러오기
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }
    // 시스템의 색상 모드 기반으로 기본 테마 설정
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    // 테마 변경 시 document.body의 data-theme 속성 업데이트
    document.body.setAttribute("data-theme", theme);
    // 로컬 스토리지에 테마 저장
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    // 현재 테마를 기반으로 토글
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="App">
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>Hello, React!</h1>
      <p>Current theme is {theme}</p>
    </div>
  );
};
export default App;
