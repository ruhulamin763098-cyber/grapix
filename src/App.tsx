/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { PORTFOLIO_WORKS } from './data/portfolioData';
import { Category, ViewMode, WorkItem } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FilterBar } from './components/FilterBar';
import { GalleryGrid } from './components/GalleryGrid';
import { GalleryStreamView } from './components/GalleryStreamView';
import { GalleryCatalogView } from './components/GalleryCatalogView';
import { LightboxModal } from './components/LightboxModal';
import { DesignPhilosophy } from './components/DesignPhilosophy';
import { ExhibitionsAndProof } from './components/ExhibitionsAndProof';
import { AboutStudio } from './components/AboutStudio';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [currentCategory, setCurrentCategory] = useState<Category>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('bento');
  const [activeWork, setActiveWork] = useState<WorkItem | null>(null);

  // Sync theme with <html> element
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleOpenInquiry = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filtered portfolio items
  const filteredWorks = useMemo(() => {
    if (currentCategory === 'all') {
      return PORTFOLIO_WORKS;
    }
    if (currentCategory === 'photography') {
      return PORTFOLIO_WORKS.filter((w) => w.specs.type === 'photography');
    }
    return PORTFOLIO_WORKS.filter((w) => w.category === currentCategory);
  }, [currentCategory]);

  const featuredWork = PORTFOLIO_WORKS[0];

  return (
    <div id="top" className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-amber-500/20 selection:text-amber-400">
      {/* 3-Zone Top Navigation */}
      <Header
        isDark={isDark}
        toggleTheme={toggleTheme}
        onOpenInquiry={handleOpenInquiry}
      />

      <main>
        {/* Editorial Split Hero Section */}
        <Hero
          featuredWork={featuredWork}
          onSelectWork={(work) => setActiveWork(work)}
          onOpenInquiry={handleOpenInquiry}
        />

        {/* Selected Works Gallery Section */}
        <section id="works" className="py-16 max-w-7xl mx-auto px-6 border-b border-zinc-200 dark:border-zinc-800 transition-colors">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-semibold tracking-wider uppercase text-zinc-500 dark:text-zinc-400 mb-2">
                Curated Archives
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Selected Works: Photography & Graphic Design
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-md">
              High-resolution captures shot on Leica & Hasselblad systems alongside Swiss modernist packaging and publication designs.
            </p>
          </div>

          {/* Interactive Filter Bar & View Switcher */}
          <FilterBar
            currentCategory={currentCategory}
            onSelectCategory={setCurrentCategory}
            viewMode={viewMode}
            onChangeViewMode={setViewMode}
            itemCount={filteredWorks.length}
            totalCount={PORTFOLIO_WORKS.length}
          />

          {/* Gallery Body based on active View Mode */}
          {viewMode === 'bento' && (
            <GalleryGrid
              works={filteredWorks}
              onSelectWork={(work) => setActiveWork(work)}
            />
          )}

          {viewMode === 'stream' && (
            <GalleryStreamView
              works={filteredWorks}
              onSelectWork={(work) => setActiveWork(work)}
            />
          )}

          {viewMode === 'catalog' && (
            <GalleryCatalogView
              works={filteredWorks}
              onSelectWork={(work) => setActiveWork(work)}
            />
          )}
        </section>

        {/* The Lens & The Grid: Dual Discipline Philosophy */}
        <DesignPhilosophy />

        {/* Exhibitions, Awards & Client Testimonials */}
        <ExhibitionsAndProof />

        {/* About Ibrahim Mian & Studio Infrastructure */}
        <AboutStudio />

        {/* Interactive Commission & Booking Section */}
        <InquirySection />
      </main>

      {/* Global Minimal Footer */}
      <Footer />

      {/* Fullscreen Lightbox Modal with Deep EXIF & Color Swatch Inspection */}
      <LightboxModal
        work={activeWork}
        worksList={filteredWorks}
        onClose={() => setActiveWork(null)}
        onSelectWork={(work) => setActiveWork(work)}
      />
    </div>
  );
}
