'use client'

import { StaggerContainer, StaggerChild } from '@/components/MotionWrapper'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Strategy + Intake',
      body: 'We spend time understanding your business, your customers, your offer, and your current infrastructure. We document everything we learn into a technical specification that becomes the foundation for everything that follows.'
    },
    {
      number: '02',
      title: 'Snapshot Installation',
      body: 'Your acquisition system, landing pages, voice agents, and business logic get built and configured. We run parallel testing, connect your integrations, and stress-test under real-world conditions.'
    },
    {
      number: '03',
      title: 'AIOS Connection + Testing',
      body: 'The AI Operating System connects to your infrastructure and learns your business logic. We run scenarios, watch decision trees execute, and refine until the system moves like an extension of you.'
    },
    {
      number: '04',
      title: 'Onboarding + Handoff',
      body: 'You learn the system from the inside out. We walk through your first conversations, show you how to read signals, and hand off complete documentation. You own it. You run it. You scale it.'
    }
  ]

  return (
    <section
      id="how-it-works"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32"
    >
      <div className="flex flex-col items-center text-center mb-16">
        <p className="text-xs tracking-[0.2em] text-brand-orange uppercase mb-4">
          THE INSTALLATION PROCESS
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold">
          From Intake Call to Voice-Operated Business in 7-14 Days.
        </h2>
      </div>

      <StaggerContainer>
        <div className="relative">
          {/* Desktop horizontal connector */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-[#1E1E24]"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <StaggerChild key={index}>
                <div className="bg-[#111114] border border-[#1E1E24] rounded-xl p-6 relative z-10">
                  {/* Mobile vertical connector */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden absolute left-1/2 -translate-x-1/2 -bottom-8 w-0.5 h-8 bg-[#1E1E24]"></div>
                  )}

                  <p className="text-5xl font-display font-bold text-brand-orange leading-none">
                    {step.number}
                  </p>
                  <h3 className="text-xl font-semibold text-[#F4F4F5] mt-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#A1A1AA] mt-2 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </StaggerChild>
            ))}
          </div>
        </div>
      </StaggerContainer>
    </section>
  )
}

export default HowItWorks
