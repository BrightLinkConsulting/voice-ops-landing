'use client'

import { StaggerContainer, StaggerChild } from '@/components/MotionWrapper'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Strategic Mapping',
      body: 'We map your current operating environment, identify the gaps, clarify your offer structure, and establish the technical foundation for everything that follows. You arrive with your business context. We arrive with the build specification.'
    },
    {
      number: '02',
      title: 'System Deployment',
      body: 'Your acquisition system, funnel infrastructure, community architecture, and automation layer get built and configured inside your GoHighLevel sub-account. We test, connect integrations, and validate before anything goes live.'
    },
    {
      number: '03',
      title: 'Intelligence Layer Activation',
      body: 'AIOS connects to your installed environment and begins interpreting your business data. We configure your operating brief, establish your Telegram interface, and run live tests until the intelligence layer is working as an extension of how you operate.'
    },
    {
      number: '04',
      title: 'Executive Onboarding + Go Live',
      body: 'You walk through the system with our team on a live Zoom session. We confirm every component, run your first real commands together, and hand off complete documentation. You leave with a running operating environment and the context to use it confidently.'
    }
  ]

  return (
    <section
      id="how-it-works"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-40"
    >
      <div className="flex flex-col items-center text-center mb-16">
        <p className="text-sm tracking-widest text-brand-orange uppercase mb-4">
          THE INSTALLATION PROCESS
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-5 md:mb-6 mt-3 md:mt-4">
          From Strategy Call to Fully Operating{'\n'}Business in 7–14 Days.
        </h2>
      </div>

      <StaggerContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <StaggerChild key={index}>
              <div className="bg-[#111114] border border-[#1E1E24] rounded-xl p-6 md:p-8 relative z-10 h-full">
                <p className="text-5xl font-display font-bold text-brand-orange leading-none">
                  {step.number}
                </p>
                <h3 className="text-xl font-semibold text-[#F4F4F5] mt-2">
                  {step.title}
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-[#A1A1AA] mt-2">
                  {step.body}
                </p>
              </div>
            </StaggerChild>
          ))}
        </div>
      </StaggerContainer>
    </section>
  )
}

export default HowItWorks
