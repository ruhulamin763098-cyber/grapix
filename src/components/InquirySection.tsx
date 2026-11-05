import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Download, Copy, Check, Clock, Phone, MapPin } from 'lucide-react';
import { InquiryFormData } from '../types';

interface InquirySectionProps {
  onSuccess?: () => void;
}

export const InquirySection: React.FC<InquirySectionProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    organization: '',
    serviceType: 'editorial-photo',
    timeline: 'Within 1-2 Months',
    budgetRange: '€5,000 - €12,000',
    projectDetails: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSuccess) onSuccess();
    }, 700);
  };

  const copyBriefText = () => {
    const brief = `COMMISSION INQUIRY - IBRAHIM MIAN STUDIO
----------------------------------------
Client: ${formData.fullName} (${formData.organization || 'Independent'})
Email: ${formData.email}
Discipline: ${formData.serviceType}
Timeline: ${formData.timeline}
Budget: ${formData.budgetRange}
Project Overview: ${formData.projectDetails}
Date: ${new Date().toLocaleDateString()}`;

    navigator.clipboard.writeText(brief);
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2000);
  };

  return (
    <section id="contact" className="py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-semibold tracking-wider uppercase text-zinc-500 dark:text-zinc-400 mb-2">
                Initiate a Commission
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 text-balance">
                Let's discuss your next campaign, architecture shoot, or brand system.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Available for commercial editorial assignments, architectural documentation, and comprehensive brand identity consultations worldwide.
            </p>

            <div className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm">
              <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="mailto:studio@ibrahimmian.com" className="hover:underline font-mono">
                  studio@ibrahimmian.com
                </a>
              </div>

              <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="font-mono">+49 30 8920 4110 (Berlin) · +880 171 000 0000 (Dhaka)</span>
              </div>

              <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Response turnaround: Within 24 business hours</span>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 text-xs">
              <div className="font-semibold text-zinc-900 dark:text-zinc-200 mb-1">
                Current Booking Windows (2026/2027)
              </div>
              <p className="text-zinc-500 dark:text-zinc-400">
                Europe: Open for bookings · Asia: Q3/Q4 Studio residency openings available.
              </p>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm">
              {submitted ? (
                <div className="py-8 space-y-6 text-center animate-fade-in">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                      Inquiry Received
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
                      Thank you, {formData.fullName}. We have logged your commission inquiry for {formData.organization || 'your project'}. Our studio representative will review scope and respond within 24 hours.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={copyBriefText}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                    >
                      {copiedBrief ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                      <span>{copiedBrief ? 'Copied Brief to Clipboard' : 'Copy Project Brief'}</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 text-xs font-semibold rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Clara Lindqvist"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-hidden focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="clara@fashionhouse.com"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-hidden focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                        Organization / Practice
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Studio ArchiForm"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-hidden focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                        Primary Commission Type *
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value as any })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-hidden focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all"
                      >
                        <option value="editorial-photo">Commercial & Editorial Photography</option>
                        <option value="architectural">Architectural & Spatial Documentation</option>
                        <option value="brand-identity">Brand Identity & Graphic System</option>
                        <option value="monograph-design">Monograph & Editorial Book Design</option>
                        <option value="licensing">Fine Art Print & Media Licensing</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                        Target Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-hidden focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all"
                      >
                        <option value="Immediate (< 3 weeks)">Immediate (&lt; 3 weeks)</option>
                        <option value="Within 1-2 Months">Within 1–2 Months</option>
                        <option value="Q3/Q4 2026">Q3/Q4 2026</option>
                        <option value="Flexible / Early Planning">Flexible / Early Planning</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                        Estimated Budget Bracket
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-hidden focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all"
                      >
                        <option value="€2,500 - €5,000">€2,500 – €5,000 (Single-Day / Licensing)</option>
                        <option value="€5,000 - €12,000">€5,000 – €12,000 (Standard Campaign / Identity)</option>
                        <option value="€12,000 - €25,000">€12,000 – €25,000 (Comprehensive Monograph / Global)</option>
                        <option value="Custom Enterprise">Custom / Institutional</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Project Brief / Location / Specific Objectives *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="Please outline the deliverables, shooting location, publication channels, or design challenges..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-hidden focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 text-xs sm:text-sm font-semibold text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Commission Request</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
