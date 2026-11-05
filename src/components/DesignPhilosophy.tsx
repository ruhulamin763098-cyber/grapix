import React, { useState } from 'react';
import { Camera, Grid, Sparkles, Sliders, Layers, Eye } from 'lucide-react';

export const DesignPhilosophy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'viewfinder' | 'typographic' | 'material'>('viewfinder');

  const principles = [
    {
      id: 'viewfinder',
      number: '01',
      title: 'The Viewfinder as Architectural Grid',
      lead: 'In medium-format photography, the edges of the ground glass are sacred. Framing is not cropping after the fact; it is a permanent architectural commitment.',
      details: [
        'Natural light as structural material: observing sun angles before lifting the lens.',
        'Negative space is as heavy as cast concrete.',
        'Zero geometric barrel distortion through calibrated tilt-shift perspectives.',
      ],
      tagline: 'Photography Disciplines',
      icon: Camera,
    },
    {
      id: 'typographic',
      number: '02',
      title: 'Swiss Modernism & Typographic Tension',
      lead: 'A page without structure is merely noise. Drawing from Josef Müller-Brockmann and Emil Ruder, we construct 8-column and 12-column modular grid systems.',
      details: [
        'Strict baseline grid alignment ensures harmonious reading rhythm.',
        'Extreme scale contrasts: giant architectural display type paired with quiet 10pt captions.',
        'Cinnabar red and deep carbon ink used with mathematical restraint.',
      ],
      tagline: 'Graphic Design Disciplines',
      icon: Grid,
    },
    {
      id: 'material',
      number: '03',
      title: 'Tactility, Paper Grain & Monograph Chemistry',
      lead: 'Digital screens are fleeting; physical monographs endure. We treat print production as an alchemical craft of uncoated cotton papers, blind debossing, and linen cloth.',
      details: [
        'Uncoated 350gsm FSC cotton rag for packaging cartons with zero plastic lamination.',
        'Stochastic screen printing to preserve microscopic film grain in photography monographs.',
        'Cold foil debossing and lay-flat Japanese thread binding.',
      ],
      tagline: 'Material Craftsmanship',
      icon: Layers,
    },
  ];

  const currentPrinciple = principles.find((p) => p.id === activeTab) || principles[0];

  return (
    <section id="philosophy" className="py-20 border-b border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-zinc-500 dark:text-zinc-400 mb-2">
            Creative Discipline & Manifesto
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 text-balance">
            The Lens & The Grid: Where Photography Meets Graphic Design
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Most creative studios divide imagery from typography. Our practice treats them as the same mathematical discipline: 
            the organization of light, spatial mass, and human perception.
          </p>
        </div>

        {/* Interactive Discipline Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {principles.map((item) => {
            const isActive = activeTab === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className={`p-6 rounded-2xl text-left transition-all border ${
                  isActive
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-transparent shadow-md'
                    : 'bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold opacity-70">
                    {item.number}
                  </span>
                  <Icon className="w-4 h-4 opacity-70" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider mb-1 opacity-70">
                  {item.tagline}
                </div>
                <div className="text-base font-bold tracking-tight">
                  {item.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Focus Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 font-semibold">
                Principle {currentPrinciple.number} · In Depth
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                {currentPrinciple.title}
              </h3>
              <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {currentPrinciple.lead}
              </p>
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 space-y-2.5">
                {currentPrinciple.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="text-amber-600 dark:text-amber-400 font-mono">―</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-white dark:bg-zinc-950 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 font-mono text-xs space-y-3">
              <div className="text-zinc-400 text-[11px] pb-2 border-b border-zinc-100 dark:border-zinc-900">
                SYSTEM SPECIFICATIONS
              </div>
              <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                <span>Viewfinder Ratio</span>
                <span className="text-zinc-900 dark:text-zinc-200">1:1.618 (Golden Section)</span>
              </div>
              <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                <span>Grid Alignment</span>
                <span className="text-zinc-900 dark:text-zinc-200">Modular 12-Column</span>
              </div>
              <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                <span>Color Palette Model</span>
                <span className="text-zinc-900 dark:text-zinc-200">60% Canvas / 30% Mass / 10% Accent</span>
              </div>
              <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                <span>Print Stock Spec</span>
                <span className="text-zinc-900 dark:text-zinc-200">300-400gsm Cotton Rag</span>
              </div>
              <div className="pt-2 text-[11px] text-zinc-400 italic">
                "Form follows light; typography organizes silence."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
