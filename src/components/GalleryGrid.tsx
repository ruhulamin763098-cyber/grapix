import React, { useState } from 'react';
import { Camera, Compass, Maximize2, Palette, Image as ImageIcon } from 'lucide-react';
import { WorkItem } from '../types';

interface GalleryGridProps {
  works: WorkItem[];
  onSelectWork: (work: WorkItem) => void;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ works, onSelectWork }) => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  if (works.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-zinc-500 dark:text-zinc-400 text-sm">No archive items found matching this filter.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 py-8">
      {works.map((work, index) => {
        // Bento layout arrangement:
        // Item 0: 8 columns, Item 1: 4 columns
        // Item 2: 4 columns, Item 3: 4 columns, Item 4: 4 columns
        // Item 5: 8 columns (or tailored depending on index)
        const isWide = index === 0 || index === 5;
        const colSpanClass = isWide ? 'lg:col-span-8' : 'lg:col-span-4';

        const isPhoto = work.specs.type === 'photography';

        return (
          <article
            key={work.id}
            onClick={() => onSelectWork(work)}
            className={`${colSpanClass} group cursor-pointer flex flex-col`}
          >
            {/* Visual Container */}
            <div className="relative overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs aspect-[4/3] sm:aspect-[16/11]">
              {!imageErrors[work.id] ? (
                <img
                  src={work.image}
                  alt={work.title}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (work.fallbackImage && target.src !== window.location.origin + work.fallbackImage) {
                      target.src = work.fallbackImage;
                    } else {
                      handleImageError(work.id);
                    }
                  }}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                />
              ) : (
                /* Styled CSS/SVG Fallback Container */
                <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-zinc-800 to-zinc-900 text-zinc-300">
                  <ImageIcon className="w-10 h-10 mb-2 opacity-50 text-amber-400" />
                  <span className="text-xs font-medium">{work.title}</span>
                  <span className="text-[11px] text-zinc-400 mt-1">{work.categoryLabel}</span>
                </div>
              )}

              {/* Hover Quick Action Indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-black/75 backdrop-blur-md text-white border border-white/10 shadow-lg">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Inspect EXIF</span>
                </span>
              </div>

              {/* Subtle hover gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            {/* Clean Unboxed Metadata Below Card */}
            <div className="pt-3.5 px-1 flex flex-col flex-1 justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-1">
                  <span>{work.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{work.year}</span>
                  <span aria-hidden="true">·</span>
                  <span className="truncate">{work.client}</span>
                </div>

                <h3 className="text-base sm:text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {work.title}
                </h3>

                <p className="mt-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                  {work.summary}
                </p>
              </div>

              {/* Technical Spec Footnote */}
              <div className="mt-3 pt-2.5 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                {isPhoto ? (
                  <div className="flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5 text-zinc-400" />
                    <span className="truncate">{work.specs.camera} · {work.specs.lens}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5">
                    <Palette className="w-3.5 h-3.5 text-zinc-400" />
                    <span className="truncate">{work.specs.gridSystem?.split('&')[0]}</span>
                  </div>
                )}
                
                <span className="font-mono tabular-nums text-[11px] text-zinc-400 shrink-0 ml-2">
                  {isPhoto ? `${work.specs.shutter} / ${work.specs.aperture}` : 'Swiss Grid'}
                </span>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};
