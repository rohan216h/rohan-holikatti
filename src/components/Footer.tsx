import React from "react";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer className="py-10 bg-[#06080c] border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-gray-400 font-mono">
          © {new Date().getFullYear()} {portfolioData.personal.name} · IIT Hyderabad
        </div>
        <div className="text-xs text-gray-400 flex items-center gap-4">
          <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
          <span>·</span>
          <a href="#internship" className="hover:text-gray-300 transition-colors">Internship</a>
          <span>·</span>
          <a href="#projects" className="hover:text-gray-300 transition-colors">Projects</a>
          <span>·</span>
          <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}

