"use client";

import React from "react";
import { ShieldCheck, TrendingUp, Info } from "lucide-react";
import { portfolioData, ProjectItem } from "@/data/portfolioData";
import ProjectCard from "./ProjectCard";

interface InternshipProps {
  onOpenGallery: (images: { url: string; title: string; caption: string }[], projectTitle: string) => void;
}

export default function Internship({ onOpenGallery }: InternshipProps) {
  const { internshipProjects } = portfolioData;

  return (
    <section id="internship" className="py-20 md:py-28 border-b border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6">
          <div className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span>Quantitative Trading & STIR Research</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Internship Work
          </h2>
          <p className="text-base text-gray-300 mt-2 max-w-2xl">
            Selected algorithmic trading terminals, empirical interest-rate transmission models, and high-frequency futures analytics developed during my quantitative research internship.
          </p>
        </div>

        {/* Confidentiality Notice Banner */}
        <div className="mb-10 p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-start gap-3">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div className="text-xs text-gray-300 leading-relaxed">
            <span className="font-semibold text-gray-200">Confidentiality Compliance:</span> In compliance with institutional confidentiality guidelines, proprietary firm names, confidential broker credentials, live internal tick-feeds, and client specific data have been anonymized. All metrics and findings shown reflect sanitized and open empirical methodologies.
          </div>
        </div>

        {/* 3 Internship Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internshipProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenGallery={onOpenGallery}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

