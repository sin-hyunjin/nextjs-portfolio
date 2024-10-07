import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// 텍스트 변형 정의
const textVariants = cva("transition-colors focus-visible:outline-none", {
  variants: {
    type: {
      title:
        "font-bold text-foreground/80 text-5xl tracking-tighter md:text-7xl sm:text-6xl",
      subtitle: "text-gray-500 dark:text-gray-400",
      description:
        "text-xs tracking-normal text-foreground/50 pl-1 md:text-base sm:text-sm",
      error: "text-destructive",
    },
    size: {
      default: "text-base",
      sm: "text-sm",
      lg: "text-lg",
      xl: "text-xl",
    },
  },
  defaultVariants: {
    type: "title",
    size: "default",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean;
}

// 텍스트 컴포넌트 정의
const HJText = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, type, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "span"; // Slot을 사용해 다른 요소로 대체 가능
    return (
      <Comp
        className={cn(textVariants({ type, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
HJText.displayName = "Text";

export { HJText, textVariants };
