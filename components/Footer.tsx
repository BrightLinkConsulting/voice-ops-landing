'use client';

import { Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0B] border-t border-[#1E1E24]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Left: Logo and tagline */}
          <div>
            <h3 className="font-bold text-[#F4F4F5] mb-3">BRIGHTLINK CONSULTING</h3>
            <p className="text-sm text-[#52525B]">
              Strategic Marketing Ecosystem Design for Message-Driven Businesses
            </p>
          </div>

          {/* Center: Navigation */}
          <div className="flex flex-col md:flex-row md:justify-center gap-6 md:gap-4">
            <a href="#" className="text-sm text-[#A1A1AA] hover:text-white transition-colors">
              About
            </a>
            <a href="#" className="text-sm text-[#A1A1AA] hover:text-white transition-colors">
              Process
            </a>
            <a href="#" className="text-sm text-[#A1A1AA] hover:text-white transition-colors">
              Case Studies
            </a>
            <a href="#" className="text-sm text-[#A1A1AA] hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>

          {/* Right: Contact info */}
          <div className="md:text-right">
            <p className="text-sm text-[#A1A1AA] mb-1">
              Temecula, California
            </p>
            <p className="text-sm text-[#A1A1AA] mb-1">
              (858) 354-8511
            </p>
            <p className="text-sm text-[#A1A1AA]">
              Info@BrightLinkConsulting.com
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1E1E24] pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#52525B]">
            © 2026 BrightLink Consulting. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <p className="text-xs text-[#52525B]">Powered by ClientBloom</p>
            <div className="flex gap-4">
              <a href="#" className="text-[#52525B] hover:text-brand-orange transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#52525B] hover:text-brand-orange transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
