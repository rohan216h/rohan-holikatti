"use client";

import React, { useState, useEffect } from "react";
import { Download, Menu, X, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Internship Work", href: "#internship" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? "bg-[#080a0f]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-base font-semibold text-gray-100 hover:text-white transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="tracking-tight font-medium">
            {portfolioData.personal.name}
          </span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-gray-400 hidden sm:inline-block font-mono">
            IIT Hyderabad
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={portfolioData.personal.cvUrl}
            download="Rohan_Holikatti_CV.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-gray-200 bg-white/[0.05] hover:bg-emerald-500/10 hover:text-emerald-300 border border-white/[0.1] hover:border-emerald-500/30 rounded-lg transition-all duration-200"
          >
            <Download className="w-3.5 h-3.5" />
            <span>CV</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.06] transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0c101a] px-4 pt-3 pb-5 space-y-2.5 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-gray-300 hover:text-emerald-400 hover:bg-white/[0.04] rounded-md transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={portfolioData.personal.cvUrl}
              download="Rohan_Holikatti_CV.pdf"
              className="flex items-center justify-center gap-2 w-full px-4 py-2 text-sm font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 rounded-lg"
            >
              <Download className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

