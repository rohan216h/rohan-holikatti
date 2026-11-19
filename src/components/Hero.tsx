import React from "react";
import { ArrowDown, Mail, Github, Linkedin, FileText, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="relative pt-16 pb-20 md:pt-28 md:pb-32 overflow-hidden border-b border-white/[0.06]">
      {/* Subtle ambient gradient mesh in background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/[0.04] blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-gray-300 mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
          <span>B.Tech Chemical Engineering @ IIT Hyderabad (2023–2027)</span>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
          {personal.name}
        </h1>

        {/* Role / Tagline from CV */}
        <p className="text-xl sm:text-2xl font-semibold text-emerald-400/90 tracking-tight mb-5">
          {personal.title}
        </p>

        {/* Short Intro */}
        <p className="text-base sm:text-lg text-gray-300/90 max-w-2xl leading-relaxed mb-8">
          {personal.bio}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <a
            href="#internship"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-black bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-sm transition-all duration-200"
          >
            <span>View work</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-200 bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.12] hover:border-white/[0.2] rounded-lg transition-all duration-200"
          >
            <Mail className="w-4 h-4 text-gray-400" />
            <span>Contact</span>
          </a>

          <a
            href={personal.cvUrl}
            download="Rohan_Holikatti_CV.pdf"
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-gray-300 hover:text-white bg-transparent hover:bg-white/[0.04] border border-white/[0.08] hover:border-emerald-500/30 rounded-lg transition-all duration-200"
          >
            <FileText className="w-4 h-4 text-emerald-400" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Key Quant & Engineering Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/[0.06]">
          <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.05]">
            <div className="text-2xl font-bold font-mono text-white">8.45</div>
            <div className="text-xs text-gray-400 mt-1">CGPA @ IIT Hyderabad</div>
          </div>
          <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.05]">
            <div className="text-2xl font-bold font-mono text-emerald-400">5M+</div>
            <div className="text-xs text-gray-400 mt-1">Intraday Futures Bars Analyzed</div>
          </div>
          <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.05]">
            <div className="text-2xl font-bold font-mono text-white">1.18 & 4.88</div>
            <div className="text-xs text-gray-400 mt-1">Sharpe Ratios (SRA & YBA Butterflies)</div>
          </div>
          <div className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.05]">
            <div className="text-2xl font-bold font-mono text-emerald-400">10-Stage</div>
            <div className="text-xs text-gray-400 mt-1">Deterministic AP Audit Engine</div>
          </div>
        </div>
      </div>
    </section>
  );
}

