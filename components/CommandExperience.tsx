'use client'

import { AnimatedSection } from '@/components/MotionWrapper'

const CommandExperience = () => {
  const panels = [
    {
      title: 'The Pipeline Query',
      caption: 'No login. No dashboard. You were still in the car.',
      content: `You: "How many pipeline opportunities opened in the last 48 hours?"

AIOS: "3 new inbound conversations. 2 are qualified and in your tier. 1 
is a referral from the Hendricks account.

Timeline:
• First qualified prospect: 14 hours ago
• Second qualified prospect: 22 hours ago  
• Referral: 36 hours ago (lower ticket but repeatable source)"

[You adjust your offer strategy without logging in]`
    },
    {
      title: 'The Churn Signal (Pro tier)',
      caption: 'The system was watching overnight. You woke up briefed.',
      content: `⚠️ OVERNIGHT BRIEFING

Account: Titan Manufacturing
Status: HIGH CHURN RISK (87% confidence)

Signal: Conversation pattern changed. 
• Previous: 3-4 interactions/week → Now: silent for 6 days
• Last interaction: asked about "alternative solutions"
• Invoice still pending: $47K paid 23 days ago

Recommended action: Escalation call scheduled for 2pm. Their point person 
just started interviewing competitors based on chatter in their Slack 
(monitored via integration).

Outcome: You called. They came back. Contract extended.`
    },
    {
      title: 'The Voice Action',
      caption: 'Pulled up to a red light. Business already moved.',
      content: `You: "Prioritize the London expansion. Update the campaign budget, 
brief the team in Slack, and move those three leads from pipeline 
to active outreach."

AIOS: "Done. 
• Budget reallocated: +$8,400 to London campaigns
• Team briefed in #expansion channel  
• 3 leads moved, sequences restarted
• Timeline: Execution completed in 34 seconds while you waited at the light

Next milestone: First London appointment in 6 days based on current 
engagement velocity."

[Light turns green. You didn't touch a computer]`
    }
  ]

  return (
    <section
      id="commands"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32"
    >
      <div className="flex flex-col items-center text-center mb-16">
        <p className="text-xs tracking-[0.2em] text-brand-orange uppercase mb-4">
          WHAT IT ACTUALLY FEELS LIKE
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold">
          Three Commands That Change How You Think About Running a Business.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {panels.map((panel, index) => (
          <AnimatedSection key={index}>
            <div className="bg-[#111114] border border-[#1E1E24] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#F4F4F5] mb-4">
                {panel.title}
              </h3>
              <div className="overflow-x-auto">
                <pre className="font-mono text-xs md:text-sm whitespace-pre-wrap text-[#A1A1AA] pb-4">
                  {panel.content}
                </pre>
              </div>
              <p className="text-sm text-center italic text-[#52525B] mt-4">
                {panel.caption}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}

export default CommandExperience
