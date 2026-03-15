import dynamic from 'next/dynamic'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import VSLVideo from '@/components/VSLVideo'
import AvatarProblem from '@/components/AvatarProblem'
import FourLayerSystem from '@/components/FourLayerSystem'
import HowItWorks from '@/components/HowItWorks'
import PricingTiers from '@/components/PricingTiers'
import ComparisonTable from '@/components/ComparisonTable'
import WhatItReplaces from '@/components/WhatItReplaces'
import Testimonials from '@/components/Testimonials'
import AboutMike from '@/components/AboutMike'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

const FAQ = dynamic(() => import('@/components/FAQ'), { ssr: false })

function SectionDivider() {
  return (
    <div className="relative h-px w-full max-w-5xl mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-dark-border-hover to-transparent" />
      <div className="divider-shimmer absolute inset-0" />
    </div>
  )
}

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* Grain texture overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      <Navigation />
      <Hero />
      <SectionDivider />
      <VSLVideo />
      <SectionDivider />
      <AvatarProblem />
      <SectionDivider />
      <FourLayerSystem />
      <SectionDivider />
      <HowItWorks />
      <SectionDivider />
      <PricingTiers />
      <SectionDivider />
      <ComparisonTable />
      <SectionDivider />
      <WhatItReplaces />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <AboutMike />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <FinalCTA />
      <Footer />
    </main>
  )
}
