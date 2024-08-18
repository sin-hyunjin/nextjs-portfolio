"use client";

import * as React from "react";
import { MonitorCog, Moon, MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const theme = localStorage.getItem("theme");
  console.log(localStorage.getItem("theme"));
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="group" size="icon" variant="ghost">
          <Sun
            className={cn(
              "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 group-hover:stroke-foreground",
              { "stroke-sky-500": theme === "light" }
            )}
          />

          <MoonStar
            className={cn(
              "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 group-hover:stroke-foreground",
              { "stroke-sky-500": theme === "dark" }
            )}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="z-50 rounded-xl bg-background "
        align="end"
      >
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="p-1 mr-1"></Sun> Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="p-1 mr-1"></Moon> Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <MonitorCog className="p-1 mr-1" /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
