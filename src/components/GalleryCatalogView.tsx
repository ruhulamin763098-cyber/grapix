import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { WorkItem } from '../types';

interface GalleryCatalogViewProps {
  works: WorkItem[];
  onSelectWork: (work: WorkItem) => void;
}

export const GalleryCatalogView: React.FC<GalleryCatalogViewProps> = ({ works, onSelectWork }) => {
  return (
    <div className="py-8 overflow-x-auto">
      <table className="w-full text-left text-xs border-collapse">
        <thead>
          <tr className="border-b border-zinc-300 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 font-mono">
            <th className="py-3 px-3 font-medium">INDEX</th>
            <th className="py-3 px-3 font-medium">PROJECT TITLE</th>
            <th className="py-3 px-3 font-medium">DISCIPLINE</th>
            <th className="py-3 px-3 font-medium">COMMISSIONER / CLIENT</th>
            <th className="py-3 px-3 font-medium">TECHNICAL APPARATUS</th>
            <th className="py-3 px-3 font-medium text-right">YEAR</th>
            <th className="py-3 px-3 font-medium text-right">ACTION</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/80">
          {works.map((work, idx) => {
            const isPhoto = work.specs.type === 'photography';
            const apparatus = isPhoto
              ? `${work.specs.camera} (${work.specs.lens?.split(' ')[0]})`
              : `${work.specs.gridSystem?.split('&')[0]}`;

            return (
              <tr
                key={work.id}
                onClick={() => onSelectWork(work)}
                className="group hover:bg-zinc-100/70 dark:hover:bg-zinc-900/50 cursor-pointer transition-colors"
              >
                <td className="py-3.5 px-3 font-mono text-zinc-400 tabular-nums">
                  {String(idx + 1).padStart(2, '0')}
                </td>
                <td className="py-3.5 px-3 font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  <div className="flex items-center gap-2">
                    <img
                      src={work.image}
                      alt=""
                      className="w-7 h-7 rounded-md object-cover border border-zinc-200 dark:border-zinc-700"
                    />
                    <span>{work.title}</span>
                  </div>
                </td>
                <td className="py-3.5 px-3 text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
                  {work.categoryLabel}
                </td>
                <td className="py-3.5 px-3 text-zinc-600 dark:text-zinc-400">
                  {work.client}
                </td>
                <td className="py-3.5 px-3 font-mono text-[11px] text-zinc-500 dark:text-zinc-400 truncate max-w-xs">
                  {apparatus}
                </td>
                <td className="py-3.5 px-3 font-mono tabular-nums text-zinc-600 dark:text-zinc-400 text-right">
                  {work.year}
                </td>
                <td className="py-3.5 px-3 text-right">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectWork(work);
                    }}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-amber-600 dark:group-hover:text-amber-400"
                  >
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
