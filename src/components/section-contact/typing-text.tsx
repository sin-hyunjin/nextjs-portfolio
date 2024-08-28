import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type TypingTextProps = {
  text: string;
  className?: string;
};

const TypingText: React.FC<TypingTextProps> = ({ text, className }) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [isBlinking, setIsBlinking] = useState<boolean>(true);

  useEffect(() => {
    let index = 0;

    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100); // 타이핑 속도

    return () => clearInterval(typeInterval);
  }, [text]);

  // 깜빡임 효과
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 500); // 깜빡임 속도

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="typing-text">
      <span>{displayedText}</span>
      <motion.span
        animate={{ opacity: isBlinking ? 1 : 0 }}
        transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }}
        className={className}
      >
        |
      </motion.span>
    </div>
  );
};

export default TypingText;
