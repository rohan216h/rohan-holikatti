"use client";

import React, { useState } from "react";
import { Mail, Linkedin, Github, FileText, Copy, Check, ArrowUpRight, MapPin, Users, Trophy } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Contact() {
  const { personal, positions, extracurriculars } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-widest mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Contact
          </h2>
          <p className="text-base text-gray-300 mt-2 max-w-xl">
            Open to quantitative research opportunities, algorithmic trading roles, and high-impact software engineering collaborations.
          </p>
        </div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {/* Email Card */}
          <div className="glass-panel glass-panel-hover rounded-xl p-5 flex flex-col justify-between">
            <div>
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 w-fit mb-3">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-gray-400">Institutional Email</div>
              <div className="text-sm font-semibold text-white mt-1 break-all">
                {personal.email}
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center gap-2">
              <a
                href={`mailto:${personal.email}`}
                className="text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1"
              >
                <span>Send email</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <button
                onClick={handleCopyEmail}
                className="ml-auto p-1.5 rounded text-gray-400 hover:text-white hover:bg-white/[0.08] transition-colors"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* LinkedIn Card */}
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel glass-panel-hover rounded-xl p-5 flex flex-col justify-between group"
          >
            <div>
              <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 w-fit mb-3">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-gray-400">Professional Network</div>
              <div className="text-sm font-semibold text-white mt-1 group-hover:text-sky-300 transition-colors">
                LinkedIn Profile
              </div>
              <div className="text-xs text-gray-400 mt-0.5">
                Rohan Holikatti
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-medium text-sky-400 group-hover:text-sky-300">
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel glass-panel-hover rounded-xl p-5 flex flex-col justify-between group"
          >
            <div>
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 w-fit mb-3">
                <Github className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-gray-400">Open Source & Code</div>
              <div className="text-sm font-semibold text-white mt-1 group-hover:text-purple-300 transition-colors">
                GitHub Repositories
              </div>
              <div className="text-xs text-gray-400 mt-0.5 font-mono">
                @rohan216h
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-medium text-purple-400 group-hover:text-purple-300">
              <span>Explore Code</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Download CV Card */}
          <a
            href={personal.cvUrl}
            download="Rohan_Holikatti_CV.pdf"
            className="glass-panel glass-panel-hover rounded-xl p-5 flex flex-col justify-between group bg-emerald-500/[0.03] border-emerald-500/20"
          >
            <div>
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 w-fit mb-3">
                <FileText className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-emerald-400">Curriculum Vitae</div>
              <div className="text-sm font-semibold text-white mt-1 group-hover:text-emerald-300 transition-colors">
                Download Full CV
              </div>
              <div className="text-xs text-gray-400 mt-0.5">
                Official PDF Document
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-medium text-emerald-400 group-hover:text-emerald-300">
              <span>Download CV (PDF)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>

        {/* Campus Leadership & Extracurriculars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Positions of Responsibility */}
          <div className="glass-panel rounded-xl p-6">
            <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-400" />
              <span>Positions of Responsibility</span>
            </h3>
            <div className="space-y-4">
              {positions.map((pos, idx) => (
                <div key={idx} className="border-l-2 border-white/[0.1] pl-3 py-0.5">
                  <div className="text-sm font-medium text-white">{pos.role}</div>
                  <div className="text-xs text-emerald-400/90 font-mono">{pos.organization} · {pos.period}</div>
                  <div className="text-xs text-gray-400 mt-1">{pos.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Extracurriculars */}
          <div className="glass-panel rounded-xl p-6">
            <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-emerald-400" />
              <span>Extracurricular & Co-Curricular</span>
            </h3>
            <div className="space-y-4">
              {extracurriculars.map((act, idx) => (
                <div key={idx} className="border-l-2 border-white/[0.1] pl-3 py-0.5">
                  <div className="text-sm font-medium text-white">{act.title}</div>
                  <div className="text-xs text-gray-300 font-mono">{act.organization}</div>
                  <div className="text-xs text-gray-400 mt-1">{act.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

