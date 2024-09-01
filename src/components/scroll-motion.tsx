"use client";

import { motion, useScroll, useSpring } from "framer-motion";
export default function ScrollMotion() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  console.log(scaleX);
  return (
    <motion.div
      className="absolute top-[5.5rem] left-0 w-full h-1 bg-foreground/75 origin-left"
      style={{ scaleX }}
    />
  );
}
