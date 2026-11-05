import React from 'react';
import { Camera, Layers, Globe, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export const AboutStudio: React.FC = () => {
  return (
    <section id="about" className="py-20 border-b border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Bio Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-semibold tracking-wider uppercase text-zinc-500 dark:text-zinc-400 mb-2">
                About The Artist & Studio
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 text-balance">
                Ibrahim Mian: Visual Artist, Commercial Photographer & Graphic Designer
              </h2>
            </div>

            <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Trained in both fine art photography and Swiss typography, I have spent the past twelve years documenting the silent geometry of modern architecture, directing high-fashion editorial campaigns, and building tactile visual identities for contemporary institutions.
            </p>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              My methodology rejects superficial trends in favor of enduring structural presence. In the studio or on location, I believe the camera is an instrument for measuring light, while typography is the craft of organizing intellectual silence. Whether directing a 50-person commercial campaign or designing a limited-run monograph, every artifact adheres to rigorous proportions and tactile honesty.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800">
                <div className="font-semibold text-zinc-900 dark:text-zinc-200 mb-1">
                  Primary Studio · Berlin
                </div>
                <div className="text-zinc-500 dark:text-zinc-400">
                  Kreuzberg Atelier & Darkroom<br />
                  Köpenicker Straße 124<br />
                  10179 Berlin, Germany
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800">
                <div className="font-semibold text-zinc-900 dark:text-zinc-200 mb-1">
                  South Asia Studio · Dhaka
                </div>
                <div className="text-zinc-500 dark:text-zinc-400">
                  Gulshan Visual Lab<br />
                  Road 11, Block D<br />
                  Dhaka 1212, Bangladesh
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Capabilities & Technical Inventory */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 space-y-6">
              <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Production Standards & Apparatus
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <div className="font-semibold text-zinc-900 dark:text-zinc-200 mb-1 flex items-center gap-2">
                    <Camera className="w-4 h-4 text-amber-500" />
                    <span>Optical & Capture Systems</span>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Leica S3 Medium Format (64MP CCD), Hasselblad X2D 100C with tilt-shift bellows, Leica M11 Monochrom, Sony A7R V for rapid street documentation. Calibrated Profoto studio strobe arrays and Broncolor Para reflectors.
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800">
                  <div className="font-semibold text-zinc-900 dark:text-zinc-200 mb-1 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-amber-500" />
                    <span>Graphic & Pre-Press Infrastructure</span>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Eizo ColorEdge CG319X hardware-calibrated proofing monitors. High-resolution drum scanning for 120 and 4x5 film negatives. End-to-end Fogra39/51 pre-press color profiling for luxury offset monographs and packaging cartons.
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800">
                  <div className="font-semibold text-zinc-900 dark:text-zinc-200 mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" />
                    <span>Commission Protocols</span>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Full worldwide travel readiness with ATA Carnet equipment clearance. Typical lead times: 2–4 weeks for editorial shoots; 6–8 weeks for comprehensive corporate brand systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
