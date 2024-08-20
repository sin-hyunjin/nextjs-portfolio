"use client";

import { useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect } from "react";

export default function ScrollLogger() {
  const { scrollY } = useScroll();

  // useMotionValueEvent를 사용하여 스크롤 위치의 변화를 감지
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  return (
    <div>
      <h1>Scroll Logger</h1>
      <p>Scroll down to see the log in the console.</p>
      <div style={{ height: "2000px" }}>
        {/* Dummy content to allow scrolling */}
      </div>
    </div>
  );
}
