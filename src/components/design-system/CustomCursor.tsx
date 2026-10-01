"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };
    checkTouch();

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if target has custom cursor data attribute
      const target = e.target as HTMLElement | null;
      const cursorTarget = target?.closest("[data-cursor]") as HTMLElement | null;

      if (cursorTarget) {
        const text = cursorTarget.getAttribute("data-cursor");
        setCursorText(text || "");
        setIsHovered(true);
      } else {
        setCursorText("");
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center rounded-full font-mono text-[10px] font-bold tracking-wider uppercase"
      animate={{
        x: position.x - (isHovered ? 40 : 8),
        y: position.y - (isHovered ? 40 : 8),
        width: isHovered ? 80 : 16,
        height: isHovered ? 80 : 16,
        backgroundColor: isHovered ? "#D7FF24" : "#0C1108",
        color: "#0C1108",
        border: isHovered ? "1.5px solid #171812" : "none",
        scale: isHovered ? 1 : 1,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 350,
        mass: 0.2,
      }}
    >
      {isHovered && cursorText && (
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center px-1 font-mono font-bold leading-none text-[#0C1108]"
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  );
}
