'use client'

import { StaggerContainer, StaggerChild } from '@/components/MotionWrapper'

const AvatarProblem = () => {
  const cards = [
    {
      number: '01',
      title: 'Your message is strong. Your machine is weak.',
      body: 'The potential is there. The infrastructure to capture it consistently isn\u2019t.'
    },
    {
      number: '02',
      title: 'You\u2019re running the business. It\u2019s not running itself.',
      body: 'Every hour inside dashboards is an hour you\u2019re not doing the work only you can do.'
    },
    {
      number: '03',
      title: 'You\u2019ve tried the platforms. None of them stuck.',
      body: 'The problem was never the tool. It was the absence of a complete, connected system built around your business.'
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
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-40"
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
          WHO THIS IS FOR
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-5 md:mb-6 mt-3 md:mt-4">
          Your Expertise Is Proven.{' '}<span className="headline-accent">Your Infrastructure Isn&apos;t.</span>
        </h2>
        <p className="text-[#A1A1AA] text-base md:text-lg leading-relaxed max-w-3xl">
          This is for consultants, advisors, authors, and coaches with real demand — and a backend that can&apos;t keep pace with it.
        </p>
      </div>

      <StaggerContainer>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-12">
          {cards.map((card, index) => (
            <StaggerChild key={index}>
              <div className="bg-[#111114] border border-[#1E1E24] rounded-xl p-5 md:p-6 hover:border-[#2E2E38] hover:-translate-y-1 transition-all duration-300">
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

      <p className="text-center mt-8" style={{ fontSize: '1.4em' }}>
        <span className="headline-accent">That changes today.</span>
      </p>
    </section>
  )
}

export default AvatarProblem
