"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "dark" | "dark-outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  icon = true,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-mono font-bold uppercase tracking-wider transition-all duration-200 ease-out select-none border rounded-full group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0C1108]";

  const variants = {
    primary:
      "bg-[#D7FF24] text-[#0C1108] border-[#171812] hover:bg-[#cbf712] hover:-translate-y-[2px] hover:scale-[1.01] active:translate-y-0 active:scale-100",
    secondary:
      "bg-transparent text-[#0C1108] border-[#171812] hover:bg-[#0C1108] hover:text-[#F7EFEB] hover:-translate-y-[2px] hover:scale-[1.01] active:translate-y-0 active:scale-100",
    dark:
      "bg-[#D7FF24] text-[#0C1108] border-[#D7FF24] hover:bg-[#e4ff61] hover:-translate-y-[2px] hover:scale-[1.01] active:translate-y-0 active:scale-100",
    "dark-outline":
      "bg-transparent text-[#F7EFEB] border-[#F7EFEB] hover:bg-[#F7EFEB] hover:text-[#0C1108] hover:-translate-y-[2px] hover:scale-[1.01] active:translate-y-0 active:scale-100",
  };

  const sizes = {
    sm: "px-4 py-2 text-[0.7rem] gap-1.5",
    md: "px-6 py-3 text-[0.78rem] gap-2",
    lg: "px-8 py-4 text-[0.85rem] gap-3",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      <span>{children}</span>
      {icon && (
        <span className="transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      )}
    </button>
  );
}
