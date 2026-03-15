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
    <section className="relative min-h-screen pt-20 md:pt-32 pb-20 px-4 md:px-8 overflow-hidden">
      {/* Gradient glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20"
          style={{
            background:
              'radial-gradient(circle, rgba(232,96,10,0.4) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* Grain overlay */}
      <div className="grain absolute inset-0 pointer-events-none opacity-5" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.div
            variants={itemVariants}
            className="text-xs uppercase tracking-[0.2em] text-[#E8600A] font-body"
          >
            FOR SUBJECT MATTER EXPERTS READY TO SCALE
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVariants} className="mt-6">
            <h1 className="font-display text-6xl md:text-8xl font-bold leading-tight">
              <div>Your Business.</div>
              <div>You Command.</div>
              <div className="italic text-[#E8600A]">AI Executes.</div>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.div variants={itemVariants} className="mt-6">
            <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto leading-relaxed font-body">
              Built for subject matter experts who are done managing software and ready to command their business instead. We install a complete client acquisition system inside GoHighLevel — funnels, automations, community, and an AI operating layer you run by voice from your phone. Your expertise reaches more people. Your business handles the rest.
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.div
            variants={itemVariants}
            className="text-sm text-[#52525B] font-body italic mt-4"
          >
            Humans command. AI executes.
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-4 md:gap-4 pt-8"
          >
            <a
              href="#pricing"
              className="px-8 py-4 bg-[#E8600A] text-white rounded-lg font-semibold flex items-center justify-center hover:bg-[#d4570a] transition-all duration-200 animate-pulse-orange hover:shadow-[0_0_30px_rgba(232,96,10,0.4)]"
            >
              See the Four Tiers →
            </a>
            <button className="px-8 py-4 border border-[#2E2E38] text-[#A1A1AA] rounded-lg font-semibold hover:border-[#E8600A] hover:text-white transition-all duration-200">
              Watch the 3-Minute Overview
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
