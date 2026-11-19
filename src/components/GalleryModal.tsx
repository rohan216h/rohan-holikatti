"use client";

import React, { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface GalleryImage {
  url: string;
  title: string;
  caption: string;
}

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: GalleryImage[];
  projectTitle: string;
  initialIndex?: number;
}

export default function GalleryModal({
  isOpen,
  onClose,
  images,
  projectTitle,
  initialIndex = 0,
}: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || images.length === 0) return null;

  const current = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-[#0c101a] border border-white/[0.12] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.08] bg-[#0f1422]">
          <div className="flex items-center gap-3">
            <h4 className="text-sm sm:text-base font-semibold text-white tracking-tight">
              {projectTitle}
            </h4>
            <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono border border-emerald-500/20">
              {currentIndex + 1} / {images.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.08] transition-colors"
            aria-label="Close image viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Image Area */}
        <div className="relative flex-1 bg-[#07090e] flex items-center justify-center p-4 min-h-[300px] sm:min-h-[460px] overflow-hidden">
          <img
            src={current.url}
            alt={current.title}
            className="max-h-[60vh] max-w-full object-contain rounded-lg shadow-lg border border-white/[0.05]"
          />

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/[0.1] transition-all hover:scale-105"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/[0.1] transition-all hover:scale-105"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Modal Footer / Caption */}
        <div className="px-5 py-4 border-t border-white/[0.08] bg-[#0f1422] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="text-sm font-semibold text-white">
              {current.title}
            </div>
            <div className="text-xs text-gray-400 mt-0.5">
              {current.caption}
            </div>
          </div>

          {/* Thumbnail preview strip */}
          {images.length > 1 && (
            <div className="flex items-center gap-1.5 shrink-0 overflow-x-auto max-w-xs">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-10 h-8 rounded border overflow-hidden shrink-0 transition-all ${
                    idx === currentIndex
                      ? "border-emerald-400 ring-2 ring-emerald-400/20"
                      : "border-white/[0.1] opacity-50 hover:opacity-100"
                  }`}
                >
                  <img src={img.url} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

