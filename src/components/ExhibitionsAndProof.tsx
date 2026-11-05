import React from 'react';
import { EXHIBITIONS_DATA, TESTIMONIALS_DATA, CLIENT_LOGOS } from '../data/portfolioData';
import { Award, Quote, Building2 } from 'lucide-react';

export const ExhibitionsAndProof: React.FC = () => {
  return (
    <section id="exhibitions" className="py-20 border-b border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section 1: Institutional Exhibitions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <div className="text-xs font-semibold tracking-wider uppercase text-zinc-500 dark:text-zinc-400 mb-2">
              Museum & Gallery Record
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 text-balance">
              Selected Exhibitions & Public Biennials
            </h2>
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Photographic series and monograph designs exhibited across leading contemporary design museums and photography biennials in Europe and Asia.
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900 dark:text-zinc-200">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Recent Recognition Highlights</span>
              </div>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5 list-disc list-inside">
                <li>Red Dot Design Award: Best of the Best (2026)</li>
                <li>Architectural Photography Award Gold Winner (2025)</li>
                <li>Swiss Design Awards Shortlist in Editorial Design (2025)</li>
                <li>Taylor Wessing Photographic Portrait Finalist (2025)</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {EXHIBITIONS_DATA.map((ex, index) => (
                <div key={index} className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 group">
                  <div>
                    <div className="text-base font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {ex.title}
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                      {ex.venue} · {ex.city}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs font-mono text-zinc-400">
                      {ex.type}
                    </span>
                    <span className="text-xs font-mono font-bold tabular-nums text-zinc-900 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-200/60 dark:border-zinc-800/60">
                      {ex.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 2: Selected Client Roster */}
        <div className="mb-20 pt-10 border-t border-zinc-200 dark:border-zinc-800">
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="text-xs font-semibold tracking-wider uppercase text-zinc-500 dark:text-zinc-400 mb-1">
              Selected Commissioning Clients
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Trusted by architectural studios, luxury fashion houses, and design publications worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {CLIENT_LOGOS.map((client, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800/80 text-center flex flex-col justify-center items-center min-h-[90px]"
              >
                <div className="text-sm font-bold tracking-tight text-zinc-900 dark:text-zinc-200">
                  {client.name}
                </div>
                <div className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-1">
                  {client.type}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Attributable Testimonials */}
        <div>
          <div className="max-w-xl mb-10">
            <div className="text-xs font-semibold tracking-wider uppercase text-zinc-500 dark:text-zinc-400 mb-2">
              Client & Curatorial Proof
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Endorsements from Creative Directors & Architects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((t, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-6 h-6 text-amber-500/80 mb-4" />
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-900">
                  <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                    {t.author}
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                    {t.role} · {t.organization}
                  </div>
                  <div className="text-[11px] text-amber-600 dark:text-amber-400 mt-1 font-mono">
                    Project: {t.project}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
