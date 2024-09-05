import { motion } from "framer-motion";

// LoadingScreen 컴포넌트
interface LoadingScreenProps {
  text: string;
}

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // 각 글자 사이의 애니메이션 간격
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, x: -50 }, // 글자가 왼쪽에서 시작
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 8 }, // 스프링 애니메이션 효과
  },
};

const LoadingScreen = ({ text }: LoadingScreenProps) => {
  return (
    <motion.div
      className="flex items-center justify-center h-screen bg-background"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className="text-6xl font-bold"
        >
          {letter === " " ? "\u00A0" : letter} {/* 공백 처리 */}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default LoadingScreen;
