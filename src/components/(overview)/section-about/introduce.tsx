"use client";

import Image from "next/image";
import { ProfileSee } from "@/assets/icons/(overview)/index";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Introduce() {
  const { scrollY } = useScroll();
  const xRange = useTransform(scrollY, [410, 420], [0, 1]);

  return (
    <div className=" shadow-foreground/10 p-12 mb-16 rounded-lg md:mb-24">
      <h1 className="inline font-bold text-foreground/80 text-xl tracking-tighter md:text-2xl">
        Introduce
      </h1>
      <motion.div
        style={{ opacity: xRange }}
        className="  flex flex-col  md:flex-row items-center  my-10"
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }} // 초기 상태
          animate={{ x: 0, opacity: 1 }} // 애니메이션 상태
          transition={{ duration: 0.5 }}
          className="flex-shrink-0 mb-6 md:mb-0 md:mr-8"
        >
          <div className="rounded-full relative overflow-hidden shadow-md">
            <Image
              src={ProfileSee}
              alt="ProfileSee"
              className=" rounded-full  object-cover w-44 h-44 md:w-56 md:h-56"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }} // 초기 상태
          animate={{ x: 0, opacity: 1 }} // 애니메이션 상태
          transition={{ duration: 0.5 }}
          className="mt-5 md:mt-3 md:ml-10 "
        >
          <ol className=" space-y-4 text-xs text-foreground/75 leading-relaxed md:text-sm">
            <li className="flex">
              <span className=" border-b pb-4">
                주로 React와 TypeScript를 사용하며 웹 프론트엔드 개발에 집중하고
                있습니다.
              </span>
            </li>
            <li className="flex">
              <span className=" border-b pb-4">
                {" "}
                사용자에게 긍정적인 첫인상을 남기는 매력적인 인터페이스 개발에
                관심이 많습니다.
              </span>
            </li>
            <li className="flex ">
              <span className=" border-b pb-4">
                프론트엔드/백엔드 등의 직군에 구애받지 않고, 제품의 완성도를
                높일 수 있다면 어떠한 작업이라도 경험하고 싶습니다.
              </span>
            </li>

            <li className="flex">
              <span className=" border-b pb-4">
                stackoverflow를 통해 문제해결이 가능합니다.
              </span>
            </li>
          </ol>
        </motion.div>
      </motion.div>
    </div>
  );
}
