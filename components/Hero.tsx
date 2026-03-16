'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen py-20 sm:py-28 md:py-36 px-4 md:px-8 overflow-hidden">
      {/* Multi-layer animated glow system */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Layer 1 — Primary pulse (center) */}
        <div
          className="absolute inset-0 hero-glow-pulse"
          style={{
            background: 'radial-gradient(ellipse 55% 45% at 50% 42%, rgba(232,96,10,0.18) 0%, rgba(232,96,10,0.06) 45%, transparent 70%)',
            willChange: 'transform, opacity',
            transformOrigin: 'center',
          }}
        />
        {/* Layer 2 — Slow drift (offset right) */}
        <div
          className="absolute inset-0 hero-glow-drift"
          style={{
            background: 'radial-gradient(ellipse 35% 30% at 65% 38%, rgba(255,122,31,0.10) 0%, transparent 60%)',
            willChange: 'transform, opacity',
          }}
        />
        {/* Layer 3 — Counter-drift (offset left) */}
        <div
          className="absolute inset-0 hero-glow-counter"
          style={{
            background: 'radial-gradient(ellipse 30% 25% at 35% 48%, rgba(232,96,10,0.08) 0%, transparent 55%)',
            willChange: 'transform, opacity',
          }}
        />
      </div>

      {/* Grain overlay */}
      <div className="grain absolute inset-0 pointer-events-none opacity-5" />

      <div className="relative max-w-7xl mx-auto z-10">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.div
            variants={itemVariants}
            className="text-xs sm:text-sm uppercase tracking-widest text-[#E8600A] font-body mb-4 px-4 w-full text-center"
          >
            FOR SUBJECT MATTER EXPERTS READY TO SCALE
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVariants} className="mt-6">
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight">
              <div>Your Business Infrastructure.</div>
              <div>Installed, Intelligent,</div>
              <div className="italic text-[#E8600A]">Built to Scale.</div>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.div variants={itemVariants} className="mt-6">
            <p className="text-base sm:text-lg text-gray-400 text-center max-w-xl mx-auto leading-relaxed font-body px-4 sm:px-6">
              BrightLink Consulting installs the funnels, automations, community, and operating layers that help expert-led businesses grow — without living inside disconnected tools, messy handoffs, or duct-taped systems. Start with the infrastructure. Layer in intelligence, client insight, and executive operating capability as your business evolves.
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.div
            variants={itemVariants}
            className="text-sm sm:text-base text-[#52525B] font-body italic mt-4 text-center px-4"
          >
            BrightLink installs the system. AIOS makes it intelligent.
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-8 w-full sm:w-auto"
          >
            <a
              href="#pricing"
              className="w-full sm:w-auto py-4 md:py-5 px-8 md:px-10 text-sm md:text-base font-semibold tracking-wide bg-[#E8600A] text-white rounded-lg flex items-center justify-center hover:bg-[#d4570a] transition-all duration-200 animate-pulse-orange hover:shadow-[0_0_30px_rgba(232,96,10,0.4)]"
            >
              See Which Layer Fits Your Stage →
            </a>
            <a
              href="#overview"
              className="w-full sm:w-auto py-4 md:py-5 px-8 md:px-10 text-sm md:text-base font-semibold tracking-wide border border-[#2E2E38] text-[#A1A1AA] rounded-lg hover:border-[#E8600A] hover:text-white transition-all duration-200 text-center"
            >
              Watch the 3-Minute Overview
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
