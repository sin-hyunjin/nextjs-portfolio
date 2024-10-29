export function slideInFromLeft(delay: number) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export function slideInFromRight(delay: number) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export const slideInFromTop = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

export const fadeInUp = {
  initial: { y: -50, opacity: 0 }, // 초기 상태: 위로 이동하고 투명
  animate: { y: 0, opacity: 1 }, // 애니메이션 상태: 원래 위치로 오고 불투명
  transition: { delay: 0.5, duration: 1 }, // 딜레이와 애니메이션 시간
};

export const fadeInRight = {
  initial: { x: 100, opacity: 0 }, // 초기 상태: 오른쪽으로 이동하고 투명
  animate: { x: 0, opacity: 1 }, // 애니메이션 상태: 원래 위치로 오고 불투명
  transition: { delay: 0.6, duration: 1 }, // 딜레이와 애니메이션 시간
};

export const fadeInDelayed = {
  initial: { opacity: 0 }, // 초기 상태: 투명
  animate: { opacity: 1 }, // 애니메이션 상태: 불투명
  transition: { delay: 0.6, duration: 1 }, // 딜레이와 애니메이션 시간
};
