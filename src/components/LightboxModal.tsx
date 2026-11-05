import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Camera, Palette, MapPin, Copy, Check, Info } from 'lucide-react';
import { WorkItem } from '../types';

interface LightboxModalProps {
  work: WorkItem | null;
  worksList: WorkItem[];
  onClose: () => void;
  onSelectWork: (work: WorkItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  work,
  worksList,
  onClose,
  onSelectWork,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [infoTab, setInfoTab] = useState<'overview' | 'technical'>('overview');

  // Keyboard navigation & ESC handler
  useEffect(() => {
    if (!work) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Lock scroll on background
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [work, worksList]);

  if (!work) return null;

  const currentIndex = worksList.findIndex((w) => w.id === work.id);
  const totalCount = worksList.length;

  const handleNext = () => {
    if (currentIndex < totalCount - 1) {
      onSelectWork(worksList[currentIndex + 1]);
      setIsZoomed(false);
    } else {
      onSelectWork(worksList[0]);
      setIsZoomed(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelectWork(worksList[currentIndex - 1]);
      setIsZoomed(false);
    } else {
      onSelectWork(worksList[totalCount - 1]);
      setIsZoomed(false);
    }
  };

  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const isPhoto = work.specs.type === 'photography';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-xl animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={work.title}
    >
      {/* Top Floating Action Bar */}
      <div className="absolute top-0 inset-x-0 h-16 px-6 flex items-center justify-between z-20 text-white border-b border-white/10 bg-black/40 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold tracking-tight text-white">
            {work.title}
          </span>
          <span className="text-xs text-zinc-400 font-mono tabular-nums">
            [{currentIndex + 1} / {totalCount}]
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Zoom toggle button */}
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            title={isZoomed ? "Reset zoom" : "150% macro zoom"}
            aria-label="Toggle Zoom"
          >
            {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
          </button>

          {/* Close button with ESC indicator */}
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
            aria-label="Close Lightbox"
          >
            <span>Close</span>
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Lightbox Body: Dual Pane on Desktop */}
      <div className="w-full h-full pt-16 flex flex-col lg:flex-row">
        {/* Left / Center: High-Resolution Viewport */}
        <div className="relative flex-1 h-[55vh] lg:h-full flex items-center justify-center p-4 sm:p-8 overflow-hidden select-none">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full border border-white/10 backdrop-blur-md transition-all z-10"
            aria-label="Previous artwork"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full border border-white/10 backdrop-blur-md transition-all z-10"
            aria-label="Next artwork"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Display */}
          <div 
            className={`w-full h-full flex items-center justify-center overflow-auto transition-transform duration-300 ${
              isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          >
            <img
              src={work.image}
              alt={work.title}
              onError={(e) => {
                const target = e.currentTarget;
                if (work.fallbackImage && target.src !== window.location.origin + work.fallbackImage) {
                  target.src = work.fallbackImage;
                }
              }}
              referrerPolicy="no-referrer"
              className={`max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-all duration-300 ${
                isZoomed ? 'scale-150 transform-origin-center' : 'scale-100'
              }`}
            />
          </div>
        </div>

        {/* Right Pane: Deep Inspector Drawer */}
        <div className="w-full lg:w-[420px] bg-zinc-950 border-t lg:border-t-0 lg:border-l border-zinc-800 text-zinc-100 flex flex-col h-[45vh] lg:h-full overflow-y-auto">
          {/* Tabs: Overview vs Technical Specs */}
          <div className="sticky top-0 bg-zinc-950 p-4 border-b border-zinc-800 flex items-center gap-2 z-10">
            <button
              onClick={() => setInfoTab('overview')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                infoTab === 'overview'
                  ? 'bg-zinc-800 text-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Curatorial Overview
            </button>
            <button
              onClick={() => setInfoTab('technical')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                infoTab === 'technical'
                  ? 'bg-zinc-800 text-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {isPhoto ? 'EXIF Camera Data' : 'Swiss Design Specs'}
            </button>
          </div>

          <div className="p-6 space-y-6">
            {infoTab === 'overview' ? (
              <>
                <div>
                  <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono mb-1">
                    <span>{work.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{work.year}</span>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-white mb-2">
                    {work.title}
                  </h3>
                  <p className="text-xs text-zinc-300 font-medium">
                    Commissioner: {work.client}
                  </p>
                </div>

                <div className="space-y-3 text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/80 pt-4">
                  <p>{work.summary}</p>
                  <p className="text-zinc-400 text-xs italic">{work.story}</p>
                </div>

                {work.awardOrPress && (
                  <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-800/40 text-amber-300 text-xs">
                    <span className="font-semibold">Honors & Recognition: </span>
                    {work.awardOrPress}
                  </div>
                )}

                {/* Color Swatch Inspector */}
                {work.specs.palette && work.specs.palette.length > 0 && (
                  <div className="border-t border-zinc-800 pt-4">
                    <div className="text-xs font-medium text-zinc-400 mb-2.5 flex items-center justify-between">
                      <span>Curated Color Palette</span>
                      <span className="text-[10px] text-zinc-500">Click to copy HEX</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {work.specs.palette.map((color) => (
                        <button
                          key={color.hex}
                          onClick={() => copyHex(color.hex)}
                          className="flex items-center gap-2.5 p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors text-left group"
                        >
                          <span
                            className="w-5 h-5 rounded-md shrink-0 border border-white/10"
                            style={{ backgroundColor: color.hex }}
                          />
                          <div className="min-w-0 flex-1">
                            <div className="text-xs text-zinc-200 truncate">{color.name}</div>
                            <div className="text-[10px] font-mono text-zinc-400">{color.hex}</div>
                          </div>
                          {copiedHex === color.hex ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          ) : (
                            <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300 shrink-0" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              /* Technical Specs Tab */
              <div className="space-y-4">
                <div className="text-xs font-medium text-zinc-400 uppercase tracking-wider font-mono">
                  {isPhoto ? 'Optical & Exposure Telemetry' : 'Systematic Design Blueprint'}
                </div>

                {isPhoto ? (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex justify-between py-2 border-b border-zinc-900">
                      <span className="text-zinc-500">Camera Body:</span>
                      <span className="text-zinc-200 font-semibold">{work.specs.camera}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-zinc-900">
                      <span className="text-zinc-500">Optics:</span>
                      <span className="text-zinc-200">{work.specs.lens}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-zinc-900">
                      <span className="text-zinc-500">Aperture:</span>
                      <span className="text-amber-400 font-bold">{work.specs.aperture}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-zinc-900">
                      <span className="text-zinc-500">Shutter Speed:</span>
                      <span className="text-amber-400 font-bold">{work.specs.shutter}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-zinc-900">
                      <span className="text-zinc-500">Sensitivity:</span>
                      <span className="text-amber-400 font-bold">{work.specs.iso}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-zinc-900">
                      <span className="text-zinc-500">Aspect Ratio:</span>
                      <span className="text-zinc-200">{work.specs.aspectRatioLabel}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-zinc-900">
                      <span className="text-zinc-500">Location:</span>
                      <span className="text-zinc-200">{work.specs.location}</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 text-xs">
                    <div className="py-2 border-b border-zinc-900">
                      <span className="text-zinc-500 block mb-1">Grid Architecture:</span>
                      <span className="text-zinc-200 font-mono text-[11px]">{work.specs.gridSystem}</span>
                    </div>
                    <div className="py-2 border-b border-zinc-900">
                      <span className="text-zinc-500 block mb-1">Primary Typefaces:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {work.specs.typefaces?.map((t) => (
                          <span key={t} className="font-mono text-zinc-200 text-[11px] bg-zinc-900 px-2 py-0.5 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="py-2 border-b border-zinc-900">
                      <span className="text-zinc-500 block mb-1">Software & Pre-Press Tools:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {work.specs.tools?.map((tool) => (
                          <span key={tool} className="text-zinc-300 text-[11px]">
                            {tool} ·
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="pt-4 text-[11px] text-zinc-500">
                  Tip: Use the Left and Right arrow keys on your keyboard to browse the collection, or press ESC to exit.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
