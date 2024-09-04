"use client";

import { motion, useScroll, useSpring } from "framer-motion";
export default function ScrollMotion() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="absolute top-[4.5rem] left-0 w-full h-1 origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #3a3a3c , #c9c9c9 )",
      }}
    />
  );
}
