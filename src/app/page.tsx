"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Internship from "@/components/Internship";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GalleryModal from "@/components/GalleryModal";

export default function Home() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState<{ url: string; title: string; caption: string }[]>([]);
  const [galleryTitle, setGalleryTitle] = useState("");

  const handleOpenGallery = (
    images: { url: string; title: string; caption: string }[],
    projectTitle: string
  ) => {
    setGalleryImages(images);
    setGalleryTitle(projectTitle);
    setGalleryOpen(true);
  };

  const handleCloseGallery = () => {
    setGalleryOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#080a0f] text-[#f3f4f6]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Internship onOpenGallery={handleOpenGallery} />
        <Projects onOpenGallery={handleOpenGallery} />
        <Contact />
      </main>
      <Footer />

      <GalleryModal
        isOpen={galleryOpen}
        onClose={handleCloseGallery}
        images={galleryImages}
        projectTitle={galleryTitle}
      />
    </div>
  );
}

