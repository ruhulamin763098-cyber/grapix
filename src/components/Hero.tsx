import React from 'react';
import { ArrowDown, Camera, Sliders, Sparkles } from 'lucide-react';
import { WorkItem } from '../types';

interface HeroProps {
  featuredWork: WorkItem;
  onSelectWork: (work: WorkItem) => void;
  onOpenInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ featuredWork, onSelectWork, onOpenInquiry }) => {
  return (
    <section className="relative pt-8 pb-16 border-b border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Split Screen 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              {/* Quiet unboxed kicker */}
              <div className="flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-zinc-500 dark:text-zinc-400 mb-5">
                <span>Visual Artist</span>
                <span aria-hidden="true">·</span>
                <span>Commercial & Editorial Photographer</span>
                <span aria-hidden="true">·</span>
                <span>Graphic Designer</span>
              </div>

              {/* Architectural Headline with balanced wrapping */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.08] text-balance mb-6">
                Capturing pure spatial light & sculpting systematic graphic identities.
              </h1>

              {/* Lead Body Copy */}
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-xl mb-8">
                Operating between medium-format filmic observation and Swiss rationalist typography. 
                I create high-retention imagery for architecture practices, avant-garde fashion houses, 
                and forward-thinking brand packaging systems.
              </p>

              {/* Action Triggers */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#works"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-sm"
                >
                  <span>Explore Selected Works</span>
                  <ArrowDown className="w-4 h-4" />
                </a>

                <button
                  onClick={onOpenInquiry}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg transition-colors border border-zinc-200/60 dark:border-zinc-800/60"
                >
                  <span>Request Commission / Rate Sheet</span>
                </button>
              </div>
            </div>

            {/* Disciplines quick index */}
            <div className="pt-10 mt-8 border-t border-zinc-200/80 dark:border-zinc-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-zinc-500 dark:text-zinc-400">
              <div>
                <span className="block font-semibold text-zinc-900 dark:text-zinc-200 mb-0.5">Photography</span>
                <span>Editorial, Architecture, Portraiture</span>
              </div>
              <div>
                <span className="block font-semibold text-zinc-900 dark:text-zinc-200 mb-0.5">Graphic Design</span>
                <span>Identity, Swiss Books, Packaging</span>
              </div>
              <div>
                <span className="block font-semibold text-zinc-900 dark:text-zinc-200 mb-0.5">Art Direction</span>
                <span>Casting, Color Grading, Print Curation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Container at Matching Height */}
          <div className="lg:col-span-6 flex flex-col">
            <div 
              onClick={() => onSelectWork(featuredWork)}
              className="group relative flex-1 min-h-[380px] sm:min-h-[460px] rounded-2xl overflow-hidden cursor-pointer border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-md"
            >
              <img
                src={featuredWork.image}
                alt={featuredWork.title}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (featuredWork.fallbackImage && target.src !== window.location.origin + featuredWork.fallbackImage) {
                    target.src = featuredWork.fallbackImage;
                  }
                }}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
              />

              {/* Measured contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <div className="flex items-center gap-2 text-xs font-medium text-zinc-300 mb-2">
                  <span>Cover Work · Featured Series</span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredWork.year}</span>
                </div>
                
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {featuredWork.title}
                </h2>

                <div className="flex items-center justify-between text-xs text-zinc-300 pt-2 border-t border-white/15">
                  <div className="flex items-center gap-2">
                    <Camera className="w-3.5 h-3.5 text-amber-400" />
                    <span>{featuredWork.specs.camera} · {featuredWork.specs.lens}</span>
                  </div>
                  <span className="font-medium underline underline-offset-4 decoration-amber-400/60 group-hover:text-amber-300">
                    Inspect Frame & EXIF →
                  </span>
                </div>
              </div>
            </div>

            {/* Quiet caption underneath */}
            <div className="mt-3 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 px-1">
              <span>Shot on location: {featuredWork.specs.location}</span>
              <span className="font-mono tabular-nums">{featuredWork.specs.shutter} · {featuredWork.specs.aperture} · {featuredWork.specs.iso}</span>
            </div>
          </div>
        </div>

        {/* Full-width proof metrics row below split */}
        <div className="mt-14 pt-8 border-t border-zinc-200 dark:border-zinc-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div>
            <div className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 font-mono tabular-nums">
              12+
            </div>
            <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-1">
              Years Creative Practice
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 font-mono tabular-nums">
              34
            </div>
            <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-1">
              International Awards & Salons
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 font-mono tabular-nums">
              100%
            </div>
            <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-1">
              Original Medium-Format & Vector Work
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Berlin · Dhaka
            </div>
            <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-1">
              Dual Studio Practice & Global Travel
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
