'use client'

import { StaggerContainer, StaggerChild } from '@/components/MotionWrapper'

const AvatarProblem = () => {
  const cards = [
    {
      number: '01',
      title: 'Your message is strong. Your machine is weak.',
      body: 'You have a clear value proposition and a track record of results. But the systems you\'ve built around yourself haven\'t scaled. You\'re still grinding instead of growing.'
    },
    {
      number: '02',
      title: 'You\'re a CEO acting like a systems admin.',
      body: 'You\'ve spent the last 12 months learning Zapier, debugging integrations, and watching leads slip because your stack didn\'t talk to itself. That wasn\'t the job. You hired people for this.'
    },
    {
      number: '03',
      title: 'You\'ve tried the tools. They don\'t stick.',
      body: 'You\'ve gone all-in on platforms before. HubSpot, Monday, Salesforce. Each one promised everything. Each one gathered dust because they demanded more time than they saved.'
    }
  ]

  const particles = [
    { size: 3, color: 'rgba(232,96,10,0.25)', top: '8%', left: '12%', anim: 'float-0 10s ease-in-out infinite' },
    { size: 4, color: 'rgba(186,117,23,0.2)', top: '15%', left: '85%', anim: 'float-1 14s ease-in-out infinite' },
    { size: 2, color: 'rgba(83,74,183,0.2)', top: '35%', left: '6%', anim: 'float-2 12s ease-in-out infinite' },
    { size: 5, color: 'rgba(232,96,10,0.25)', top: '55%', left: '92%', anim: 'float-3 8s ease-in-out infinite' },
    { size: 3, color: 'rgba(83,74,183,0.2)', top: '70%', left: '18%', anim: 'float-4 16s ease-in-out infinite' },
    { size: 4, color: 'rgba(186,117,23,0.2)', top: '25%', left: '50%', anim: 'float-5 18s ease-in-out infinite' },
    { size: 2, color: 'rgba(232,96,10,0.25)', top: '80%', left: '75%', anim: 'float-6 11s ease-in-out infinite' },
    { size: 5, color: 'rgba(83,74,183,0.2)', top: '45%', left: '35%', anim: 'float-7 15s ease-in-out infinite' },
  ]

  return (
    <section
      id="avatar"
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36"
    >
      {/* Floating particles - hidden on mobile */}
      <div className="hidden md:block">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              top: p.top,
              left: p.left,
              animation: p.anim,
              willChange: 'transform',
            }}
          />
        ))}
      </div>

      <div className="relative z-[1] flex flex-col items-center text-center mb-16">
        <p className="text-sm tracking-widest text-brand-orange uppercase mb-4">
          THIS IS BUILT FOR SUBJECT MATTER EXPERTS WHO...
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          You Have Real Expertise. Your Tech Stack Doesn't Reflect It.
        </h2>
        <p className="text-[#A1A1AA] text-base md:text-lg leading-relaxed max-w-3xl">
          This system was designed for a very specific kind of business owner: someone with a track
          record, a clear brand, and a working understanding of what their customers actually want.
          You're not learning sales. You're not learning your market. You're past that. But somewhere
          in the last few years, your infrastructure fell behind your own capability. Your message
          stayed strong. Your machine got weak. And every tool you tried to fix it—Zapier,
          HubSpot, that platform your VA said was perfect—added complexity instead of solving it.
          This stack was built for that exact moment. It is not a template. It is not a landing page
          builder. It is not a CRM for beginners. It is a personal acquisition and automation
          infrastructure that scales with your own credibility. Everything else stops mattering the
          moment you turn this on because there is nothing between you and revenue. That ends here.
        </p>
      </div>

      <StaggerContainer>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {cards.map((card, index) => (
            <StaggerChild key={index}>
              <div className="bg-[#111114] border border-[#1E1E24] rounded-xl p-6 hover:border-[#2E2E38] hover:-translate-y-1 transition-all duration-300">
                <p className="text-4xl font-display font-bold text-brand-orange">
                  {card.number}
                </p>
                <h3 className="text-lg font-semibold text-[#F4F4F5] mt-3">
                  {card.title}
                </h3>
                <p className="text-base text-[#A1A1AA] mt-2 leading-relaxed">
                  {card.body}
                </p>
              </div>
            </StaggerChild>
          ))}
        </div>
      </StaggerContainer>
    </section>
  )
}

export default AvatarProblem
