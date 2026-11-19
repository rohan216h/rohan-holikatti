"use client";

import React from "react";
import { FolderGit2, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import ProjectCard from "./ProjectCard";

interface ProjectsProps {
  onOpenGallery: (images: { url: string; title: string; caption: string }[], projectTitle: string) => void;
}

export default function Projects({ onOpenGallery }: ProjectsProps) {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <FolderGit2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Engineering & Quantitative Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Projects
          </h2>
          <p className="text-base text-gray-300 mt-2 max-w-2xl">
            Autonomous audit pipelines, full-stack predictive platforms, and statistical arbitrage strategies built with rigorous testing and production architectures.
          </p>
        </div>

        {/* 4 Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
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

