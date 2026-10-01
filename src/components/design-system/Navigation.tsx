"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "WORK", href: "#work" },
    { label: "ABOUT", href: "#about" },
    { label: "STACK", href: "#stack" },
    { label: "PROCESS", href: "#process" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F7EFEB] border-b border-[#171812] select-none">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <Link
          href="/"
          className="font-display text-xl md:text-2xl uppercase tracking-tight text-[#0C1108] hover:text-[#0C1108] flex items-center gap-2 group"
        >
          <span className="w-2.5 h-2.5 bg-[#D7FF24] border border-[#171812] rounded-full group-hover:scale-125 transition-transform" />
          <span>HEMANTH KONDURI</span>
          <span className="font-mono text-[0.65rem] text-[#AAA6A1] font-normal tracking-wider ml-1 hidden sm:inline">
            // FULL-STACK DEV
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-[0.8rem] uppercase tracking-wider font-semibold">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#0C1108] hover:bg-[#D7FF24] px-2.5 py-1 transition-colors border border-transparent hover:border-[#171812] rounded-full"
            >
              <span className="text-[#AAA6A1] text-[0.7rem] mr-1.5">0{idx + 1}.</span>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <Button variant="primary" size="sm" onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
          }}>
            CONTACT
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden font-mono text-[0.75rem] uppercase tracking-widest px-3 py-1.5 border border-[#171812] rounded-full bg-[#F7EFEB] text-[#0C1108] font-bold"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? "CLOSE [X]" : "MENU [=]"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#171812] bg-[#F7EFEB] px-6 py-6 flex flex-col gap-4 font-mono uppercase text-sm">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#171812]/20 flex items-center justify-between text-[#0C1108] font-bold"
            >
              <span>{link.label}</span>
              <span className="text-[#AAA6A1] text-xs">0{idx + 1}</span>
            </a>
          ))}
          <div className="pt-2">
            <Button
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                const contactSection = document.getElementById("contact");
                if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
              }}
            >
              CONTACT
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
