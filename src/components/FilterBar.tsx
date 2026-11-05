import React from 'react';
import { LayoutGrid, Rows3, TableProperties } from 'lucide-react';
import { Category, ViewMode } from '../types';

interface FilterBarProps {
  currentCategory: Category;
  onSelectCategory: (category: Category) => void;
  viewMode: ViewMode;
  onChangeViewMode: (mode: ViewMode) => void;
  itemCount: number;
  totalCount: number;
}

const CATEGORIES: { id: Category; label: string }[] = [
  { id: 'all', label: 'All Works' },
  { id: 'editorial', label: 'Editorial & Fashion' },
  { id: 'architecture', label: 'Architecture & Spaces' },
  { id: 'graphic', label: 'Graphic Design & Identity' },
  { id: 'portrait', label: 'Portraits' },
  { id: 'street', label: 'Street Studies' },
];

export const FilterBar: React.FC<FilterBarProps> = ({
  currentCategory,
  onSelectCategory,
  viewMode,
  onChangeViewMode,
  itemCount,
  totalCount,
}) => {
  return (
    <div className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800">
      {/* Category Segmented Control Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const isActive = currentCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                isActive
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Right controls: Counter & View Mode Switcher */}
      <div className="flex items-center justify-between md:justify-end gap-5">
        <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono tabular-nums whitespace-nowrap">
          Showing {itemCount} of {totalCount} archives
        </div>

        {/* View Mode Toggle Group */}
        <div className="flex items-center p-1 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200/80 dark:border-zinc-800/80">
          <button
            onClick={() => onChangeViewMode('bento')}
            title="Bento Grid View"
            aria-label="Bento Grid View"
            className={`p-1.5 rounded-md transition-colors ${
              viewMode === 'bento'
                ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs'
                : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            onClick={() => onChangeViewMode('stream')}
            title="Editorial Stream View"
            aria-label="Editorial Stream View"
            className={`p-1.5 rounded-md transition-colors ${
              viewMode === 'stream'
                ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs'
                : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
            }`}
          >
            <Rows3 className="w-4 h-4" />
          </button>
          <button
            onClick={() => onChangeViewMode('catalog')}
            title="Technical Index Table"
            aria-label="Technical Index Table"
            className={`p-1.5 rounded-md transition-colors ${
              viewMode === 'catalog'
                ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs'
                : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200'
            }`}
          >
            <TableProperties className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
