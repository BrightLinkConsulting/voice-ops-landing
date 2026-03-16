'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import CalendarModal from '@/components/CalendarModal';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: "What's Included", href: '#system' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'h-16 bg-[rgba(10,10,11,0.92)] backdrop-blur-md border-b border-[#1E1E24] shadow-lg'
          : 'h-20 bg-transparent'
      }`}
    >
      <div className="h-full px-4 md:px-8 flex items-center justify-between max-w-7xl mx-auto w-full">
        {/* Logo */}
        <div className="flex items-center space-x-1 font-body uppercase tracking-wider text-sm">
          <span className="text-[#E8600A] font-semibold">BRIGHTLINK</span>
          <span className="text-[#A1A1AA]">CONSULTING</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-[#A1A1AA] hover:text-white transition-colors duration-200 text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => setIsCalendarOpen(true)}
            className="px-6 py-2 bg-[#E8600A] text-white rounded-lg font-semibold text-sm hover:bg-[#E8600A] transition-all duration-200 shadow-lg hover:shadow-[0_0_30px_rgba(232,96,10,0.4)]"
          >
            Book a Strategy Call
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[rgba(10,10,11,0.95)] backdrop-blur-md z-40 md:hidden pt-24">
          <div className="flex flex-col items-center justify-start h-full space-y-8 px-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-white text-2xl py-4 hover:text-[#E8600A] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { setIsCalendarOpen(true); setIsMobileMenuOpen(false); }}
              className="px-8 py-4 bg-[#E8600A] text-white rounded-lg font-semibold mt-8 hover:bg-[#E8600A] transition-all duration-200"
            >
              Book a Strategy Call
            </button>
          </div>
        </div>
      )}

      {/* Calendar Modal */}
      <CalendarModal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
    </nav>
  );
}
