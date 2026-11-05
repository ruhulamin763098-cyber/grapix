import React from 'react';
import { Camera, MapPin, ArrowRight, Layers } from 'lucide-react';
import { WorkItem } from '../types';

interface GalleryStreamViewProps {
  works: WorkItem[];
  onSelectWork: (work: WorkItem) => void;
}

export const GalleryStreamView: React.FC<GalleryStreamViewProps> = ({ works, onSelectWork }) => {
  return (
    <div className="py-8 space-y-20">
      {works.map((work, idx) => {
        const isPhoto = work.specs.type === 'photography';
        return (
          <article
            key={work.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Media Canvas */}
            <div 
              onClick={() => onSelectWork(work)}
              className="lg:col-span-8 cursor-pointer group relative overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md aspect-[16/10]"
            >
              <img
                src={work.image}
                alt={work.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-4 py-2 rounded-lg bg-zinc-900/90 text-white text-xs font-semibold backdrop-blur-sm border border-white/10 shadow-lg">
                  Open Lightbox & Technical Breakdown →
                </span>
              </div>
            </div>

            {/* Editorial Text Pane */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                <span>0{idx + 1}</span>
                <span aria-hidden="true">/</span>
                <span>{work.categoryLabel}</span>
                <span aria-hidden="true">/</span>
                <span>{work.year}</span>
              </div>

              <h3 
                onClick={() => onSelectWork(work)}
                className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 hover:text-amber-600 dark:hover:text-amber-400 cursor-pointer transition-colors"
              >
                {work.title}
              </h3>

              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {work.story}
              </p>

              {/* Technical breakdown block */}
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/60 text-xs space-y-2">
                <div className="text-zinc-500 dark:text-zinc-400 font-medium">Production Specifications</div>
                {isPhoto ? (
                  <div className="space-y-1 text-zinc-700 dark:text-zinc-300 font-mono text-[11px]">
                    <div>Hardware: {work.specs.camera}</div>
                    <div>Optics: {work.specs.lens}</div>
                    <div>Exposure: {work.specs.shutter} · {work.specs.aperture} · {work.specs.iso}</div>
                    {work.specs.location && <div>Location: {work.specs.location}</div>}
                  </div>
                ) : (
                  <div className="space-y-1 text-zinc-700 dark:text-zinc-300 text-[11px]">
                    <div>Grid System: {work.specs.gridSystem}</div>
                    <div>Typography: {work.specs.typefaces?.join(', ')}</div>
                    <div>Tools: {work.specs.tools?.join(', ')}</div>
                  </div>
                )}
              </div>

              {work.awardOrPress && (
                <div className="text-xs text-amber-700 dark:text-amber-400/90 font-medium pt-1">
                  ★ {work.awardOrPress}
                </div>
              )}

              <div>
                <button
                  onClick={() => onSelectWork(work)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:text-amber-600 dark:hover:text-amber-400 transition-colors pt-2"
                >
                  <span>Detailed Case Study & Swatches</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};
