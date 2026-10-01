"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navigation } from "@/components/design-system/Navigation";
import { Button } from "@/components/design-system/Button";
import { Tag } from "@/components/design-system/Tag";
import { Highlight } from "@/components/design-system/Highlight";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function DesignSystemShowcase() {
  const heroTextRef = useRef<HTMLDivElement>(null);
  const darkSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero reveal animation
      if (heroTextRef.current) {
        gsap.from(heroTextRef.current.children, {
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        });
      }

      // ScrollTrigger for dark section reveal
      if (darkSectionRef.current) {
        gsap.from(darkSectionRef.current, {
          scrollTrigger: {
            trigger: darkSectionRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: false,
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-[#F7EFEB] text-[#0C1108] selection:bg-[#D7FF24] selection:text-[#0C1108] flex flex-col">
      {/* Sticky Editorial Navigation */}
      <Navigation />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1600px] mx-auto px-6 md:px-12">
        {/* HERO DISPLAY SECTION (Rules 3, 4, 18, 19) */}
        <section className="py-16 md:py-24 border-b border-[#171812] flex flex-col justify-between min-h-[85vh]">
          {/* Top Metadata & System Indicator */}
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[0.75rem] uppercase tracking-wider text-[#0C1108] border-b border-[#171812]/20 pb-4">
            <div className="flex items-center gap-2 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#D7FF24] border border-[#171812] animate-pulse" />
              <span>00 // DESIGN SYSTEM & VISUAL FOUNDATION</span>
            </div>
            <div className="text-[#AAA6A1]">
              FULL-STACK DEVELOPER × CREATIVE TECHNOLOGIST
            </div>
            <div className="hidden sm:block">
              BUILD // 2026.10
            </div>
          </div>

          {/* Hero Oversized Graphic Typography */}
          <div ref={heroTextRef} className="my-12 select-none">
            <div className="hero-display text-[#0C1108]">
              HEMANTH
            </div>
            <div className="hero-display text-[#0C1108] flex flex-wrap items-baseline gap-4">
              <span>KONDURI</span>
              <span className="text-[0.22em] font-mono font-normal tracking-normal text-[#AAA6A1] normal-case lowercase leading-normal align-middle">
                [he-manth • kon-du-ri]
              </span>
            </div>
            <div className="mt-8 max-w-2xl text-body text-[#0C1108]/90 font-mono">
              Engineering full-stack web applications, scalable backends, and high-impact digital experiences with editorial precision and physical motion.
            </div>
          </div>

          {/* Bottom Hero Controls & Quick Links */}
          <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-[#171812]/20">
            <div className="flex flex-wrap gap-3">
              <Button
                variant="primary"
                size="md"
                data-cursor="EXPLORE"
                onClick={() => {
                  const el = document.getElementById("colors");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                EXPLORE SYSTEM →
              </Button>
              <Button
                variant="secondary"
                size="md"
                data-cursor="VIEW"
                onClick={() => {
                  const el = document.getElementById("components");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                VIEW COMPONENTS
              </Button>
            </div>
            <div className="flex items-center gap-2 font-mono text-[0.75rem] text-[#AAA6A1]">
              <span>NEXT.JS 16</span>
              <span>/</span>
              <span>REACT 19</span>
              <span>/</span>
              <span>GSAP</span>
              <span>/</span>
              <span>TAILWIND 4</span>
            </div>
          </div>
        </section>

        {/* SECTION 01: COLOR SYSTEM (Rule 1) */}
        <section id="colors" className="py-20 border-b border-[#171812]">
          <div className="font-mono text-[0.75rem] uppercase tracking-wider text-[#AAA6A1] mb-4">
            01 // COLOR SYSTEM TOKENS
          </div>
          <h2 className="section-display text-[#0C1108] mb-8">
            EDITORIAL PALETTE
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {/* Color 1: Cream */}
            <div className="border border-[#171812] rounded-[14px] p-5 bg-[#F7EFEB] flex flex-col justify-between h-52">
              <div className="font-mono text-xs uppercase font-bold">Background</div>
              <div>
                <div className="font-mono text-sm font-bold text-[#0C1108]">#F7EFEB</div>
                <div className="font-mono text-[0.7rem] text-[#AAA6A1]">Warm Cream</div>
              </div>
            </div>

            {/* Color 2: Ink */}
            <div className="border border-[#171812] rounded-[14px] p-5 bg-[#0C1108] text-[#F7EFEB] flex flex-col justify-between h-52">
              <div className="font-mono text-xs uppercase font-bold text-[#D7FF24]">Primary Ink</div>
              <div>
                <div className="font-mono text-sm font-bold text-[#F7EFEB]">#0C1108</div>
                <div className="font-mono text-[0.7rem] text-[#AAA6A1]">Dark Green-Black</div>
              </div>
            </div>

            {/* Color 3: Acid Lime */}
            <div className="border border-[#171812] rounded-[14px] p-5 bg-[#D7FF24] text-[#0C1108] flex flex-col justify-between h-52">
              <div className="font-mono text-xs uppercase font-bold">Primary Accent</div>
              <div>
                <div className="font-mono text-sm font-bold">#D7FF24</div>
                <div className="font-mono text-[0.7rem] text-[#0C1108]/70">Acid Lime</div>
              </div>
            </div>

            {/* Color 4: Yellow */}
            <div className="border border-[#171812] rounded-[14px] p-5 bg-[#F5D52B] text-[#0C1108] flex flex-col justify-between h-52">
              <div className="font-mono text-xs uppercase font-bold">Secondary Accent</div>
              <div>
                <div className="font-mono text-sm font-bold">#F5D52B</div>
                <div className="font-mono text-[0.7rem] text-[#0C1108]/70">Editorial Yellow</div>
              </div>
            </div>

            {/* Color 5: Muted */}
            <div className="border border-[#171812] rounded-[14px] p-5 bg-[#AAA6A1]/15 text-[#0C1108] flex flex-col justify-between h-52">
              <div className="font-mono text-xs uppercase font-bold">Muted Text</div>
              <div>
                <div className="font-mono text-sm font-bold">#AAA6A1</div>
                <div className="font-mono text-[0.7rem] text-[#0C1108]/70">Metadata Grey</div>
              </div>
            </div>

            {/* Color 6: Border */}
            <div className="border border-[#171812] rounded-[14px] p-5 bg-white text-[#0C1108] flex flex-col justify-between h-52">
              <div className="font-mono text-xs uppercase font-bold">Border Outline</div>
              <div>
                <div className="font-mono text-sm font-bold">#171812</div>
                <div className="font-mono text-[0.7rem] text-[#AAA6A1]">Thin Line Border</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02: TYPOGRAPHY SYSTEM (Rules 2, 3, 4) */}
        <section className="py-20 border-b border-[#171812]">
          <div className="font-mono text-[0.75rem] uppercase tracking-wider text-[#AAA6A1] mb-4">
            02 // TYPOGRAPHY HIERARCHY & CONTRAST
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <h2 className="section-display text-[#0C1108] mb-6">
                ANTON × SPACE MONO
              </h2>
              <p className="text-body text-[#0C1108]/90">
                The visual identity is anchored by high-contrast typography: condensed, graphic display headings paired with technical monospace labels and body text.
              </p>
            </div>

            <div className="lg:col-span-7 border border-[#171812] rounded-[14px] p-6 md:p-8 bg-white/40 space-y-6">
              <div>
                <div className="font-mono text-[0.7rem] text-[#AAA6A1] uppercase mb-1">Display Headings // Anton (Condensed, Bold)</div>
                <div className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-[#0C1108]">
                  FULL-STACK ENGINEERING
                </div>
              </div>

              <div className="border-t border-[#171812]/15 pt-4">
                <div className="font-mono text-[0.7rem] text-[#AAA6A1] uppercase mb-1">Project Titles // Anton</div>
                <div className="project-display text-[#0C1108]">
                  ONENEXUS ENTERPRISE PLATFORM
                </div>
              </div>

              <div className="border-t border-[#171812]/15 pt-4">
                <div className="font-mono text-[0.7rem] text-[#AAA6A1] uppercase mb-1">Body Text // Space Mono</div>
                <p className="font-mono text-sm leading-relaxed text-[#0C1108]">
                  Architecting resilient microservices, robust GraphQL & REST APIs, real-time WebSockets, and immersive web frontends.
                </p>
              </div>

              <div className="border-t border-[#171812]/15 pt-4">
                <div className="font-mono text-[0.7rem] text-[#AAA6A1] uppercase mb-1">Technical Metadata & Labels // Space Mono</div>
                <div className="font-mono text-xs uppercase tracking-wider text-[#0C1108] font-bold">
                  // DEPLOYED: VERCEL / NODE.JS / DOCKER / POSTGRESQL
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 03: EDITORIAL HIGHLIGHT BLOCKS (Rule 14) */}
        <section className="py-20 border-b border-[#171812]">
          <div className="font-mono text-[0.75rem] uppercase tracking-wider text-[#AAA6A1] mb-4">
            03 // EDITORIAL HIGHLIGHT BLOCKS
          </div>

          <div className="space-y-6">
            <h2 className="section-display text-[#0C1108] leading-none">
              I <Highlight color="lime">DESIGN.</Highlight> I <Highlight color="yellow">BUILD.</Highlight> I <Highlight color="dark">SHIP.</Highlight>
            </h2>

            <p className="text-body max-w-3xl text-[#0C1108]">
              No generic gradients or standard card grids. We use solid physical color blocks behind typography to create emphasis and editorial energy.
            </p>
          </div>
        </section>

        {/* SECTION 04: BUTTON & TAG SYSTEM (Rules 9, 10) */}
        <section id="components" className="py-20 border-b border-[#171812]">
          <div className="font-mono text-[0.75rem] uppercase tracking-wider text-[#AAA6A1] mb-4">
            04 // BUTTON & TAG PRIMITIVES
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Buttons Showcase */}
            <div className="border border-[#171812] rounded-[14px] p-6 bg-white/50 space-y-6">
              <div className="font-mono text-xs uppercase font-bold text-[#AAA6A1] border-b border-[#171812]/20 pb-2">
                Button Variants
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" size="md" data-cursor="CLICK">
                  DISCUSS A PROJECT
                </Button>
                <Button variant="secondary" size="md" data-cursor="OPEN">
                  VIEW PROJECT
                </Button>
              </div>
            </div>

            {/* Tags Showcase */}
            <div className="border border-[#171812] rounded-[14px] p-6 bg-white/50 space-y-6">
              <div className="font-mono text-xs uppercase font-bold text-[#AAA6A1] border-b border-[#171812]/20 pb-2">
                Technology Pills & Tags
              </div>
              <div className="flex flex-wrap gap-2">
                <Tag variant="default">NEXT.JS 16</Tag>
                <Tag variant="lime">REACT 19</Tag>
                <Tag variant="yellow">GSAP 3</Tag>
                <Tag variant="default">TYPESCRIPT</Tag>
                <Tag variant="default" shape="box">NODE.JS</Tag>
                <Tag variant="default" shape="box">POSTGRESQL</Tag>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 05: EDITORIAL 12-COLUMN GRID & IMAGE TREATMENT (Rules 5, 11, 12) */}
        <section className="py-20 border-b border-[#171812]">
          <div className="font-mono text-[0.75rem] uppercase tracking-wider text-[#AAA6A1] mb-4">
            05 // 12-COLUMN ASYMMETRICAL EDITORIAL LAYOUT
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Col (Span 7) */}
            <div className="lg:col-span-7 border border-[#171812] rounded-[14px] p-8 bg-[#F7EFEB] flex flex-col justify-between group overflow-hidden">
              <div>
                <div className="font-mono text-xs text-[#AAA6A1] uppercase mb-2">
                  // FULL-STACK SYSTEM // 01
                </div>
                <h3 className="project-display text-[#0C1108] mb-4">
                  REAL-TIME COLLABORATIVE CANVAS
                </h3>
                <p className="text-body text-[#0C1108]/80 mb-6">
                  Engineered with Next.js, WebSockets, Redis, and Canvas rendering engines. Low-latency state synchronization with editorial control interface.
                </p>
              </div>

              {/* Technical Caption Bar */}
              <div className="pt-4 border-t border-[#171812] flex flex-wrap items-center justify-between gap-2 font-mono text-[0.7rem] uppercase">
                <span className="font-bold text-[#0C1108]">// DESIGN × CODE × MOTION</span>
                <span className="text-[#AAA6A1]">2026 // CASE STUDY</span>
              </div>
            </div>

            {/* Right Col (Span 5) */}
            <div className="lg:col-span-5 border border-[#171812] rounded-[14px] p-8 bg-[#0C1108] text-[#F7EFEB] flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs text-[#D7FF24] uppercase mb-2">
                  // BACKEND & INFRASTRUCTURE
                </div>
                <h3 className="font-display text-4xl uppercase mb-4 text-[#F7EFEB]">
                  MICROSERVICES & API ARCHITECTURE
                </h3>
                <p className="font-mono text-sm text-[#AAA6A1] leading-relaxed mb-6">
                  High-throughput REST and GraphQL gateways, resilient worker queues, PostgreSQL database optimizations, and automated CI/CD pipelines.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Tag variant="dark">NODE.JS</Tag>
                <Tag variant="dark">REDIS</Tag>
                <Tag variant="dark">DOCKER</Tag>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 06: DARK SECTION CONTRAST (Rule 13) */}
        <section
          ref={darkSectionRef}
          className="my-20 border border-[#171812] rounded-[14px] bg-[#0C1108] text-[#F7EFEB] p-8 md:p-16 select-none"
        >
          <div className="max-w-4xl space-y-6">
            <div className="font-mono text-[0.75rem] uppercase tracking-wider text-[#D7FF24]">
              // HIGH-CONTRAST DARK SECTION
            </div>

            <h2 className="section-display text-[#F7EFEB] leading-none">
              BUILT FOR SPEED. <br />
              DESIGNED FOR <Highlight color="lime">EXCELLENCE.</Highlight>
            </h2>

            <p className="font-mono text-body text-[#AAA6A1]">
              Dark sections introduce maximum contrast against cream backgrounds, maintaining structural borders and energetic Acid Lime typography callouts.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button variant="dark" size="md">
                GET IN TOUCH →
              </Button>
              <Button variant="dark-outline" size="md">
                GITHUB PROFILE
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 07: PROCESS NUMBERED STEPS (Rule 18) */}
        <section id="process" className="py-20 border-b border-[#171812]">
          <div className="font-mono text-[0.75rem] uppercase tracking-wider text-[#AAA6A1] mb-8">
            07 // ENGINEERING & DESIGN PROCESS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-[#171812] rounded-[14px] p-6 bg-white/40">
              <div className="font-display text-5xl text-[#0C1108] mb-4">01</div>
              <h3 className="font-mono font-bold uppercase text-lg mb-2">DISCOVERY & ARCHITECTURE</h3>
              <p className="font-mono text-sm text-[#0C1108]/80 leading-relaxed">
                Defining data models, system flow, component boundaries, and UX wireframes before writing line one.
              </p>
            </div>

            <div className="border border-[#171812] rounded-[14px] p-6 bg-white/40">
              <div className="font-display text-5xl text-[#D7FF24] bg-[#0C1108] px-3 py-1 inline-block rounded-[4px] mb-4">02</div>
              <h3 className="font-mono font-bold uppercase text-lg mb-2">DEVELOPMENT & MOTION</h3>
              <p className="font-mono text-sm text-[#0C1108]/80 leading-relaxed">
                Building scalable full-stack React components, server actions, GSAP scroll triggers, and Lenis smooth scrolling.
              </p>
            </div>

            <div className="border border-[#171812] rounded-[14px] p-6 bg-white/40">
              <div className="font-display text-5xl text-[#0C1108] mb-4">03</div>
              <h3 className="font-mono font-bold uppercase text-lg mb-2">OPTIMIZATION & DEPLOYMENT</h3>
              <p className="font-mono text-sm text-[#0C1108]/80 leading-relaxed">
                Auditing Lighthouse metrics, SEO tags, bundle sizes, accessibility, and automated edge deployment.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="contact" className="w-full bg-[#0C1108] text-[#F7EFEB] border-t border-[#171812] py-16 px-6 md:px-12 mt-12">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 font-mono text-sm">
          <div>
            <div className="font-display text-3xl text-[#F7EFEB] uppercase mb-2">
              HEMANTH KONDURI
            </div>
            <div className="text-[#AAA6A1] text-xs uppercase tracking-wider">
              FULL-STACK DEVELOPER & CREATIVE TECHNOLOGIST // 2026
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-xs uppercase tracking-widest font-bold">
            <a href="https://github.com/Hemanth-konduri" target="_blank" rel="noreferrer" className="text-[#D7FF24] hover:underline">
              GITHUB
            </a>
            <a href="#" className="text-[#F7EFEB] hover:text-[#D7FF24]">
              LINKEDIN
            </a>
            <a href="#" className="text-[#F7EFEB] hover:text-[#D7FF24]">
              TWITTER / X
            </a>
            <a href="mailto:contact@hemanth.dev" className="text-[#F7EFEB] hover:text-[#D7FF24]">
              EMAIL
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
