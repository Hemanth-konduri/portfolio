"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "lime" | "yellow" | "dark";
  shape?: "pill" | "box";
  className?: string;
}

export function Tag({
  children,
  variant = "default",
  shape = "pill",
  className,
}: TagProps) {
  const baseStyles =
    "inline-flex items-center font-mono text-[0.72rem] uppercase tracking-wider font-semibold border border-[#171812] transition-colors duration-150 select-none";

  const shapes = {
    pill: "rounded-full px-3.5 py-1",
    box: "rounded-[4px] px-2.5 py-1",
  };

  const variants = {
    default: "bg-transparent text-[#0C1108] border-[#171812] hover:bg-[#0C1108]/5",
    lime: "bg-[#D7FF24] text-[#0C1108] border-[#171812]",
    yellow: "bg-[#F5D52B] text-[#0C1108] border-[#171812]",
    dark: "bg-transparent text-[#F7EFEB] border-[#F7EFEB]/40 hover:border-[#F7EFEB]",
  };

  return (
    <span className={cn(baseStyles, shapes[shape], variants[variant], className)}>
      {children}
    </span>
  );
}
