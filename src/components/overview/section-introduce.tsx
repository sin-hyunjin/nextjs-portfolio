import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User, Code, Briefcase, Mail } from "lucide-react";

export const SectionIntro = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1, once: false });

  const sections = [
    {
      number: "01",
      title: "ABOUT",
      description:
        "프론트엔드 개발자로서의 저의 이야기와 성장 과정을 소개합니다.",
      icon: <User className="w-8 h-8" />,
    },
    {
      number: "02",
      title: "SKILLS",
      description:
        "React, TypeScript, Next.js 등 웹 개발에 사용하는 기술 스택을 소개합니다.",
      icon: <Code className="w-8 h-8" />,
    },
    {
      number: "03",
      title: "PROJECTS",
      description:
        "지금까지 진행했던 프로젝트들과 그 과정에서 배운 점들을 공유합니다.",
      icon: <Briefcase className="w-8 h-8" />,
      isHighlight: true,
    },
    {
      number: "04",
      title: "CONTACT",
      description: "함께 일하고 싶으시다면 언제든 연락주세요.",
      icon: <Mail className="w-8 h-8" />,
      isHighlight: false,
    },
  ];

  const boxVariant = {
    hidden: (i: number) => ({
      opacity: 0,
      y: 50,
    }),
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <div id="introduce" className="flex justify-center  bg-black/90 py-20">
      <div className="w-full max-w-5xl px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6" ref={ref}>
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className={cn(
                "flex flex-col p-8 h-[300px] rounded-sm backdrop-blur-sm border border-white/10",
                section.isHighlight
                  ? "bg-gradient-to-br from-orange-500/90 to-orange-600/90 text-white"
                  : "bg-black/40 text-white hover:bg-black/50 transition-colors"
              )}
              variants={boxVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={index}
            >
              <div className="text-xs mb-8 font-mono text-white/60"></div>
              <div
                className={cn(
                  "mb-6",
                  section.isHighlight ? "text-white" : "text-white/80"
                )}
              >
                {section.icon}
              </div>
              <h2
                className={cn(
                  "text-xl font-mono tracking-wider mb-4",
                  section.isHighlight ? "text-white" : "text-white/90"
                )}
              >
                {section.title}_
              </h2>
              <p
                className={cn(
                  "text-sm leading-relaxed font-light",
                  section.isHighlight ? "text-white/90" : "text-white/60",
                  section.description ? "mb-4" : "mb-0"
                )}
              >
                {section.description}
              </p>
              {section.isHighlight && (
                <button className="mt-auto py-2 px-4 bg-black/80 text-white text-sm font-mono tracking-wide hover:bg-black transition-all border border-white/10">
                  VIEW MORE
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
