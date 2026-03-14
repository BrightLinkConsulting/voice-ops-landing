'use client'

import { StaggerContainer, StaggerChild } from '@/components/MotionWrapper'

const AvatarProblem = () => {
  const cards = [
    {
      number: '01',
      title: 'Your message is strong. Your machine is weak.',
      body: 'You\'ve attracted an audience, but converting them into consistent revenue requires infrastructure you haven\'t had time to build properly. The potential is there. The system to capture it isn\'t.'
    },
    {
      number: '02',
      title: 'You\'re a CEO acting like a systems admin.',
      body: 'Every hour spent jumping between dashboards is an hour you\'re not doing the work that only you can do. The platform management should be invisible. Right now it\'s consuming your week.'
    },
    {
      number: '03',
      title: 'You\'ve tried the tools. They don\'t stick.',
      body: 'GoHighLevel, ClickFunnels, Kajabi — you\'ve tested them. The problem was never the platform. It was the absence of a complete, connected system built to your specific business model and run by intelligence that understands it.'
    }
  ]

  return (
    <section
      id="avatar"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32"
    >
      <div className="flex flex-col items-center text-center mb-16">
        <p className="text-xs tracking-[0.2em] text-brand-orange uppercase mb-4">
          THIS IS BUILT FOR SUBJECT MATTER EXPERTS WHO...
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
          You Have Real Expertise. Your Tech Stack Doesn't Reflect It.
        </h2>
        <div className="text-[#A1A1AA] text-base md:text-lg leading-relaxed max-w-3xl space-y-4">
          <p>
            This system was designed for a very specific kind of business owner: the subject matter expert.
          </p>
          <p>
            You&apos;re a coach, consultant, author, or thought leader with proven IP and real client results. You&apos;ve developed a methodology, a framework, a body of work that genuinely changes people&apos;s businesses or lives.
          </p>
          <p>
            But your online presence is Frankensteined together. A funnel here, an email sequence there, a community on one platform and a CRM that barely talks to it. You&apos;re drowning in tech management instead of delivering your brilliance.
          </p>
          <p>
            And now everyone&apos;s telling you AI is the answer — but every AI tool you try still requires you to figure it all out yourself. That ends here.
          </p>
        </div>
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
                <p className="text-sm text-[#A1A1AA] mt-2 leading-relaxed">
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
