import React, { useState } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
  onOpenInquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme, onOpenInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element Brand wordmark */}
        <a 
          href="#top" 
          className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100 hover:text-amber-600 dark:hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
        >
          IBRAHIM MIAN
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <a href="#works" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors whitespace-nowrap shrink-0">
            Selected Works
          </a>
          <a href="#philosophy" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors whitespace-nowrap shrink-0">
            Lens & Grid
          </a>
          <a href="#exhibitions" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors whitespace-nowrap shrink-0">
            Exhibitions & Press
          </a>
          <a href="#about" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors whitespace-nowrap shrink-0">
            About Studio
          </a>
          <a href="#contact" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors whitespace-nowrap shrink-0">
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 primary action + subtle theme toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light gallery theme" : "Switch to dark studio theme"}
            className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={onOpenInquiry}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors whitespace-nowrap shrink-0"
          >
            <span>Book a Shoot</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-600 dark:text-zinc-300 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-6 py-5 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <a 
              href="#works" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Selected Works
            </a>
            <a 
              href="#philosophy" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Lens & Grid
            </a>
            <a 
              href="#exhibitions" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Exhibitions & Press
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              About Studio
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Contact
            </a>
          </nav>
          <div className="pt-3 border-t border-zinc-100 dark:border-zinc-900">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 rounded-lg"
            >
              <span>Book a Shoot / Inquire</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
