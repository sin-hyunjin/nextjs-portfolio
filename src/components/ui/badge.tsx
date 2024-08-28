// src/components/ui/badge.tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        badge1:
          "text-[11px] md:text-[12px] border-transparent bg-badge1 hover:bg-badge1/70",
        badge2:
          "text-[11px] md:text-[12px] border-transparent bg-badge2 hover:bg-badge2/70",
        badge3:
          "text-[11px] md:text-[12px] border-transparent bg-badge3 hover:bg-badge3/70",
        badge4:
          "text-[11px] md:text-[12px] border-transparent bg-badge4 hover:bg-badge4/70",
        badge5:
          "text-[11px] md:text-[12px] border-transparent bg-badge5 hover:bg-badge5/70",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export type BadgeVariant =
  | "default"
  | "secondary"
  | "destructive"
  | "outline"
  | "badge1"
  | "badge2"
  | "badge3"
  | "badge4"
  | "badge5";

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
