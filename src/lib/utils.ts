import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

export const scrollToSection = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  sectionId: string
) => {
  event.preventDefault();
  const section = document.querySelector(sectionId);
  if (section) {
    if (sectionId === "#introduce") {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
};
