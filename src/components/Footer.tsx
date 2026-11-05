import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [currentTimeBerlin, setCurrentTimeBerlin] = useState('');
  const [currentTimeDhaka, setCurrentTimeDhaka] = useState('');

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setCurrentTimeBerlin(
        now.toLocaleTimeString('en-US', { timeZone: 'Europe/Berlin', hour: '2-digit', minute: '2-digit' })
      );
      setCurrentTimeDhaka(
        now.toLocaleTimeString('en-US', { timeZone: 'Asia/Dhaka', hour: '2-digit', minute: '2-digit' })
      );
    };

    updateTimes();
    const interval = setInterval(updateTimes, 30000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-zinc-200/80 dark:border-zinc-800/80">
          <div>
            <span className="text-base font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              IBRAHIM MIAN
            </span>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              Visual Artist · Medium-Format Photography · Swiss Graphic Design
            </div>
          </div>

          {/* Real studio live local time */}
          <div className="flex items-center gap-6 text-xs text-zinc-500 dark:text-zinc-400 font-mono tabular-nums">
            <div>
              <span className="text-zinc-400 dark:text-zinc-500 block text-[10px] uppercase">Berlin Studio</span>
              <span>{currentTimeBerlin || '14:04'} CET</span>
            </div>
            <div className="h-4 w-px bg-zinc-300 dark:bg-zinc-800" />
            <div>
              <span className="text-zinc-400 dark:text-zinc-500 block text-[10px] uppercase">Dhaka Studio</span>
              <span>{currentTimeDhaka || '19:04'} BST</span>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5 text-xs font-medium text-zinc-600 dark:text-zinc-400">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Behance
            </a>
            <a
              href="https://lensculture.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              LensCulture
            </a>
            <a
              href="https://readcv.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              ReadCV
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-500">
          <div>
            © {new Date().getFullYear()} Ibrahim Mian. All photographic works and design systems are copyrighted.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
