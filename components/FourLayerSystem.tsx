'use client'

import { Check } from 'lucide-react'
import { StaggerChild, motion } from '@/components/MotionWrapper'
import OrbitalRings from '@/app/components/OrbitalRings'
import TerminalChat from '@/components/TerminalChat'

interface Layer {
  number: string
  badge: string
  badgeColor: string
  headline: string
  body: string[]
  bullets: string[]
  whoFor: string
  includesAbove: boolean
  credentialLine?: string
}

const layers: Layer[] = [
  {
    number: 'LAYER 01',
    badge: 'STARTER',
    badgeColor: '#E4A124',
    headline: 'Your Entire Acquisition Engine, Installed and Running.',
    body: [
      'Four complete funnel types built inside your GoHighLevel sub-account. Email and SMS automations pre-loaded. Community infrastructure fully configured. This is not a template you fill in. It\u2019s a finished, running system handed to you on day one.',
    ],
    bullets: [
      'Lead Magnet Funnel + automation sequence',
      'SLO Funnel with 2 upsells',
      'VSL + Call Booking Funnel',
      'Flagship Offer Page',
      'Free + Paid Community Groups',
      'Products and Courses Infrastructure',
    ],
    whoFor:
      'You have the expertise and the audience but your acquisition infrastructure is held together with duct tape. You need a complete, professional system installed \u2014 not another template to figure out.',
    includesAbove: false,
  },
  {
    number: 'LAYER 02',
    badge: 'SIGNATURE',
    badgeColor: '#5AAEE8',
    headline: 'Talk to Your Business. Watch It Move.',
    body: [
      'Stop logging into dashboards. Start talking to your business.',
      'Your dedicated Business Intelligence Agent connects to your entire GHL system via Telegram and executes commands by voice. Ask what\u2019s in your pipeline. Send emails. Update client profiles. Log notes. Trigger follow-up sequences. The same way email moved from desktop to your phone \u2014 your business operations are moving from dashboards to conversation.',
    ],
    bullets: [
      'Dedicated Business Intelligence Agent (via Telegram)',
      'Voice and text commands executed across your entire tech stack',
      'Pipeline queries and deal status on demand',
      'CRM note logging and contact updates by voice',
      'Daily morning brief \u2014 what needs your attention, before you ask',
    ],
    whoFor:
      'You have the system. Now you want to run it from your phone without opening a single dashboard. This is the interface shift.',
    includesAbove: true,
  },
  {
    number: 'LAYER 03',
    badge: 'PRO',
    badgeColor: '#1DBF96',
    headline: 'One Connected View. Every Client. Every Signal.',
    body: [
      'Getting clients is only half the equation. This tier is designed to help you keep them.',
      'Right now your team is jumping between your CRM, project management tools, spreadsheets, and Slack threads trying to piece together how your clients are actually doing. You\u2019re relying on instinct, reacting after issues surface, and discovering what went wrong after it shows up in the numbers.',
      'ClientBloom changes that. It connects to every tool you already use \u2014 no migrations, no hassles \u2014 and puts an AI-powered client services agent to work across all of them, 24/7. It learns your service model, builds a baseline for every individual client relationship, and tracks patterns across dozens of touchpoints and conversations.',
      'After 30 days of learning, it knows your clients better than most people on your team do. The morning brief stops being a report. It becomes a briefing from a system that\u2019s been watching while you slept.',
    ],
    bullets: [
      'ClientBloom client intelligence engine \u2014 connected to your full stack',
      'Individual Client Retention Score (CRS) per client, updating continuously',
      'Individual baseline behavioral scoring \u2014 healthy looks different for every account',
      'Proactive churn risk detection before clients go quiet',
      'Engagement pattern monitoring across calls, messages, billing, and tasks',
      'Early warning signals on billing status, sentiment shifts, and onboarding gaps',
      'Morning brief upgraded: specific client actions by name, priority, and urgency',
    ],
    whoFor:
      'You have an active client base and retention directly affects your revenue. You want to stop wondering \u201care the clients happy?\u201d and start knowing \u2014 with certainty \u2014 which ones need attention today.',
    includesAbove: true,
    credentialLine:
      'ClientBloom is the official digital implementation of Mike Walker\u2019s Amazon #1 bestseller, The Exceptional Experience.',
  },
  {
    number: 'LAYER 04',
    badge: 'PRO PLUS',
    badgeColor: '#8B82E0',
    headline: 'EOS Built Your Operating System. CE.OS Puts Afterburners on It.',
    body: [
      'If you\u2019ve run EOS, implemented Traction, or worked through any business operating framework \u2014 you already understand the value of running your company on a system. Those frameworks are genuinely good. They gave millions of founders structure, rhythm, and a language for making decisions.',
      'But they were built for a pre-AI world. They rely on weekly L10 meetings, manual scorecards, quarterly rocks tracked in spreadsheets, and leadership teams that schedule time to check whether the business is actually healthy. The framework is sound. The execution is slow.',
      'CE.OS is what happens when that operating intelligence gets rebuilt from the ground up on AI.',
      'Your AIOS now includes a world-class CEO-caliber strategic advisor trained on 20+ years of business development expertise \u2014 one that doesn\u2019t wait for your quarterly review to tell you something needs to change. It monitors you: your energy, your decision patterns, your operating rhythm, and your leadership performance over time.',
      'While ClientBloom watches your clients, CE.OS watches the person running the company.',
      'As the rest of the world outsources their thinking to AI, CE.OS is built to do the opposite \u2014 use AI to sharpen yours.',
    ],
    bullets: [
      'CE.OS Chief Executive Operating System \u2014 fully activated',
      'Trained on 20+ years of business development and executive leadership expertise',
      'Long-term persistent memory \u2014 the system knows your history, patterns, and decisions',
      'OPI (Operating Performance Index) \u2014 your personal leadership performance tracked continuously',
      'Daily CEO brief with strategic recommendations tailored to your exact situation',
      'Decision journal with automated review tracking and pattern analysis',
      'Energy and mindset monitoring integrated into your morning brief',
      'Replaces the manual cadence of EOS/Traction with a continuous AI-driven operating rhythm',
      'Private CE.OS Community (Circle)',
      'Ongoing CE.OS plugin updates as the system evolves',
    ],
    whoFor:
      'You\u2019ve outgrown spreadsheet scorecards and quarterly check-ins. You want an operating system that runs continuously, knows your business deeply, and advises you like a world-class strategic partner.',
    includesAbove: true,
  },
]

const FourLayerSystem = () => {
  return (
    <section
      id="system"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32"
    >
      <div className="flex flex-col items-center text-center mb-16">
        <p className="text-xs tracking-[0.2em] text-brand-orange uppercase mb-4">
          THE FOUR-LAYER SYSTEM
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          One Platform.{'\n'}Four Levels of Power.
        </h2>
        <p className="text-[#A1A1AA] text-base md:text-lg max-w-3xl">
          Start where you are. Scale as you grow. Every tier includes everything below it — and adds the next layer of intelligence.
        </p>
      </div>

      {/* Orbital Rings */}
      <OrbitalRings />
      <p className="text-sm text-gray-500 text-center mb-12 mt-2">
        Hover each layer to see how your system expands.
      </p>

      {/* Layer Cards */}
      <div className="relative">
        {/* Vertical connector line - desktop only */}
        <div className="hidden md:block absolute left-8 top-0 bottom-0" style={{ borderLeft: '2px solid rgba(232, 96, 10, 0.2)' }} />

        <div className="space-y-6">
          {layers.map((layer, index) => (
            <StaggerChild key={index}>
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-[#111114] border border-[#1E1E24] rounded-xl p-8 relative md:ml-12">
                  {/* Includes above tag */}
                  {layer.includesAbove && (
                    <p className="text-xs text-[#52525B] mb-3">+ Includes everything above</p>
                  )}

                  {/* Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-sm font-mono font-semibold"
                      style={{ color: layer.badgeColor }}
                    >
                      {layer.number} · {layer.badge}
                    </span>
                    {layer.badge === 'PRO' && (
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: '#1DBF96', color: 'white' }}>
                        ClientBloom
                      </span>
                    )}
                    {layer.badge === 'PRO PLUS' && (
                      <>
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: '#8B82E0', color: 'white' }}>
                          CE.OS
                        </span>
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#2A2A32] text-[#A1A1AA]">
                          ELITE
                        </span>
                      </>
                    )}
                  </div>

                  {/* Headline */}
                  <h3 className="text-xl md:text-2xl font-semibold text-[#F4F4F5] mb-4">
                    {layer.headline}
                  </h3>

                  {/* Body */}
                  <div className="text-[#A1A1AA] text-sm md:text-base leading-relaxed mb-6 space-y-3">
                    {layer.body.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-3 mb-6">
                    {layer.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#A1A1AA] leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Terminal inside Layer 02 */}
                  {layer.badge === 'SIGNATURE' && (
                    <div className="mb-6">
                      <p className="text-xs font-mono text-gray-500 mb-2">
                        // Live example — Telegram · Voice Ops AI
                      </p>
                      <div className="max-h-72 overflow-hidden relative">
                        <TerminalChat />
                        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#111114] to-transparent pointer-events-none md:hidden" />
                      </div>
                      <p className="text-sm text-[#A1A1AA] mt-3 italic">
                        This is the interface shift. The same way email moved from desktop to mobile — your business operations are moving from dashboards to conversation.
                      </p>
                    </div>
                  )}

                  {/* Who this is for */}
                  <div className="bg-[#0A0A0B] border border-[#1E1E24] rounded-lg p-5">
                    <p className="text-xs text-[#52525B] uppercase tracking-wider mb-2 font-semibold">Who this is for</p>
                    <p className="text-sm text-[#A1A1AA] leading-relaxed">
                      {layer.whoFor}
                    </p>
                  </div>

                  {/* Credential line for Layer 03 */}
                  {layer.credentialLine && (
                    <p className="text-xs text-[#52525B] italic mt-4">
                      {layer.credentialLine}
                    </p>
                  )}
                </div>
              </motion.div>
            </StaggerChild>
          ))}
        </div>
      </div>

      {/* Closing line */}
      <p className="text-xl font-semibold text-center text-white mt-8">
        EOS gave you the structure. CE.OS gives you the intelligence.
      </p>
    </section>
  )
}

export default FourLayerSystem
