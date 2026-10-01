"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface HighlightProps {
  children: React.ReactNode;
  color?: "lime" | "yellow" | "dark";
  className?: string;
}

export function Highlight({
  children,
  color = "lime",
  className,
}: HighlightProps) {
  const colorStyles = {
    lime: "bg-[#D7FF24] text-[#0C1108]",
    yellow: "bg-[#F5D52B] text-[#0C1108]",
    dark: "bg-[#0C1108] text-[#F7EFEB]",
  };

  return (
    <span
      className={cn(
        "inline-block px-2.5 py-0.5 font-display uppercase leading-none tracking-tight rounded-[2px]",
        colorStyles[color],
        className
      )}
    >
      {children}
    </span>
  );
}
