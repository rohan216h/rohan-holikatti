"use client";

import React from "react";
import { ExternalLink, Github, Image as ImageIcon, ShieldAlert, CheckCircle2 } from "lucide-react";
import { ProjectItem } from "@/data/portfolioData";

interface ProjectCardProps {
  project: ProjectItem;
  onOpenGallery?: (images: { url: string; title: string; caption: string }[], projectTitle: string) => void;
}

export default function ProjectCard({ project, onOpenGallery }: ProjectCardProps) {
  const {
    title,
    shortDescription,
    roleOrMetric,
    techStack,
    liveUrl,
    githubUrl,
    hasGallery,
    galleryImages,
    confidentialityNote,
    badge,
  } = project;

  return (
    <div className="glass-panel glass-panel-hover rounded-xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group">
      {/* Top Meta Header */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3.5">
          {badge ? (
            <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-white/[0.04] text-gray-300 border border-white/[0.08]">
              {badge}
            </span>
          ) : (
            <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400">
              {project.category === "internship" ? "Quant Track" : "Full-Stack / ML"}
            </span>
          )}

          {confidentialityNote && (
            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-400/90 bg-amber-400/[0.08] px-2 py-0.5 rounded border border-amber-400/20">
              <ShieldAlert className="w-3 h-3 text-amber-400" />
              <span>Anonymized</span>
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2.5 group-hover:text-emerald-300 transition-colors">
          {title}
        </h3>

        {/* 1-2 line description */}
        <p className="text-sm text-gray-300/90 leading-relaxed mb-5">
          {shortDescription}
        </p>

        {/* Role or Key Result Callout */}
        <div className="mb-5 p-3 rounded-lg bg-emerald-500/[0.05] border-l-2 border-emerald-500/70 border-r border-t border-b border-emerald-500/10">
          <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-1 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Role & Verified Empirical Metric</span>
          </div>
          <div className="text-xs sm:text-sm text-gray-200 leading-snug">
            {roleOrMetric}
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-gray-400 border border-white/[0.06]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons Matching Link Status */}
      <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-2.5">
        {/* Live Demo Button (if available) */}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-black bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-sm transition-all duration-150"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}

        {/* GitHub Button (if available) */}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-gray-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] rounded-lg transition-all duration-150"
          >
            <Github className="w-3.5 h-3.5 text-gray-300" />
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3 text-gray-400" />
          </a>
        )}

        {/* Screenshot Gallery Button (for Third Dashboard and SPY Paper Trading) */}
        {hasGallery && galleryImages && galleryImages.length > 0 && onOpenGallery && (
          <button
            type="button"
            onClick={() => onOpenGallery(galleryImages, title)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-lg transition-all duration-150"
          >
            <ImageIcon className="w-3.5 h-3.5 text-emerald-400" />
            <span>Research Gallery ({galleryImages.length})</span>
          </button>
        )}

        {/* Notice for intentionally private projects without links */}
        {!liveUrl && !githubUrl && (
          <span className="text-xs font-mono text-gray-400 italic">
            Proprietary research preview · No public repo
          </span>
        )}
      </div>
    </div>
  );
}

