import type { Metadata } from "next";
import "./globals.css";
import { LenisProvider } from "@/components/design-system/LenisProvider";
import { CustomCursor } from "@/components/design-system/CustomCursor";

export const metadata: Metadata = {
  title: "Hemanth Konduri — Full-Stack Developer & Creative Technologist",
  description: "Portfolio of Hemanth Konduri: Full-Stack Developer, Creative Technologist, and Interaction Designer specializing in Next.js, React, Node.js, and GSAP physical motion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F7EFEB] text-[#0C1108] font-mono selection:bg-[#D7FF24] selection:text-[#0C1108]">
        <LenisProvider>
          <CustomCursor />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
