// src/types/index.ts
import type { StaticImageData } from "next/image";

type Card = {
  src: string;
  msg: string;
};

type LeftURLType = {
  home: string;
  code: string;
};

export interface CardImage {
  src: StaticImageData;
  alt: string;
}

export interface CardContent {
  title: string;
  subtitle: string;
  image: CardImage;
  titleIcon: CardImage;
  description: string;
  techStack: string[];
  details: string[];
  card: Card[];
  leftURL: LeftURLType[];
}
