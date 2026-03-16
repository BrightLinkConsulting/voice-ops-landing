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
    headline: 'Installed Infrastructure. Done for You.',
    body: [
      'We install the core infrastructure first \u2014 funnels, automation, CRM architecture, follow-up systems, and the operating backend your business should have had all along.',
      'Four complete funnel types built inside your GoHighLevel sub-account. Email and SMS automations pre-loaded. Community infrastructure fully configured. This is not a template you fill in. It is a finished, running system handed to you on day one.',
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
      'You have the expertise and the audience but your acquisition infrastructure is fragmented and founder-dependent. You need a complete, professional operating backend installed \u2014 not another platform to configure yourself.',
    includesAbove: false,
  },
  {
    number: 'LAYER 02',
    badge: 'SIGNATURE',
    badgeColor: '#5AAEE8',
    headline: 'AIOS: Your Business Intelligence Layer.',
    body: [
      'AIOS gives you a live operating interface into your business through Telegram, briefings, queries, and guided action.',
      'Instead of hunting through dashboards, you ask better questions, get clearer answers, and move faster. You can send a voice note and have AIOS execute across your CRM, update client records, surface pipeline status, or trigger follow-up sequences \u2014 all without opening a dashboard.',
      'Voice is one interface. The real value is intelligence, visibility, and execution speed.',
    ],
    bullets: [
      'Dedicated AIOS Business Intelligence Agent (via Telegram)',
      'Conversational interface into your business data and workflows',
      'Pipeline queries, deal status, and CRM actions on demand',
      'Voice and text commands executed across your tech stack',
      'Daily operating brief \u2014 what needs attention, delivered before you ask',
    ],
    whoFor:
      'You have the infrastructure. Now you want the intelligence layer that connects it, interprets it, and lets you operate from context instead of from dashboards.',
    includesAbove: true,
  },
  {
    number: 'LAYER 03',
    badge: 'PRO',
    badgeColor: '#1DBF96',
    headline: 'ClientBloom: Revenue Protection Through Client Intelligence.',
    body: [
      'Getting clients is expensive. Keeping the right ones is where your margin lives.',
      'ClientBloom gives the system visibility into fulfillment, engagement, risk signals, and client health \u2014 so you are not managing retention by instinct, scattered notes, or delayed feedback.',
      'It connects to every tool you already use \u2014 no migrations, no hassles \u2014 and builds an individual behavioral baseline for every client relationship. When a client\u2019s engagement deviates from their normal pattern, you find out before they go quiet.',
      'The morning brief stops being a report. It becomes a client health briefing from a system that has been watching while you slept.',
    ],
    bullets: [
      'ClientBloom client intelligence engine \u2014 embedded in your operating environment',
      'Individual Client Retention Score (CRS) per client, updating continuously',
      'Behavioral baseline scoring \u2014 healthy looks different for every account',
      'Proactive churn risk detection before clients disengage',
      'Engagement pattern monitoring across calls, billing, messages, and tasks',
      'Morning brief upgraded with specific client actions by name, priority, and urgency',
    ],
    whoFor:
      'You have an active client base and retention directly affects your revenue. You want to stop managing relationships by instinct and start operating from real intelligence on what is actually happening inside each account.',
    includesAbove: true,
    credentialLine:
      'ClientBloom is the official digital implementation of Mike Walker\u2019s Amazon #1 bestseller, The Exceptional Experience.',
  },
  {
    number: 'LAYER 04',
    badge: 'PRO PLUS',
    badgeColor: '#8B82E0',
    headline: 'CE.OS: The Executive Layer for Founders Who Have Outgrown Manual Operating Systems.',
    body: [
      'CE.OS brings executive rhythm, decision support, reflection, accountability, and strategic guidance into the operating environment. It bridges what is happening in the business with how the founder leads, decides, and operates.',
      'If you have run EOS, implemented Traction, or used any structured operating framework \u2014 you already understand the value of operating on a system. Those frameworks were genuinely useful for their time.',
      'CE.OS is what happens when that operating intelligence gets rebuilt from the ground up on AI \u2014 continuous rather than quarterly, proactive rather than scheduled, and connected to the actual live data of the business rather than a weekly scorecard.',
      'While ClientBloom interprets your clients, CE.OS interprets the executive. The system now has both the business intelligence layer and the human operating layer working together.',
      'As the rest of the world outsources their thinking to AI, CE.OS is built to do the opposite \u2014 use AI to sharpen yours.',
    ],
    bullets: [
      'CE.OS Executive Operating Layer \u2014 fully activated',
      'Built on 20+ years of business development and leadership expertise',
      'Long-term persistent memory \u2014 the system knows your context, history, and decisions',
      'OPI (Operating Performance Index) \u2014 personal leadership performance tracked over time',
      'Daily executive brief with strategic recommendations tailored to your exact situation',
      'Decision journal with automated review tracking and pattern recognition',
      'Replaces the manual cadence of quarterly operating frameworks with continuous AI rhythm',
      'Private CE.OS Community (Circle)',
      'Ongoing CE.OS framework updates as the intelligence layer evolves',
    ],
    whoFor:
      'You have outgrown spreadsheet scorecards and quarterly check-ins. You want an operating layer that runs continuously, knows your business deeply, and gives you the same quality of strategic guidance a world-class operating partner would \u2014 without the consulting fee or the scheduling dependency.',
    includesAbove: true,
  },
]

const FourLayerSystem = () => {
  return (
    <section
      id="system"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40"
    >
      <div className="flex flex-col items-center text-center mb-16">
        <p className="text-sm tracking-widest text-brand-orange uppercase mb-4">
          THE FOUR-LAYER SYSTEM
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          One Operating Environment.{'\n'}Four Levels of Intelligence.
        </h2>
        <p className="text-[#A1A1AA] text-base md:text-lg max-w-3xl">
          Each layer adds a new level of visibility, intelligence, and operating leverage. Start where you are. Add layers as your business grows.
        </p>
      </div>

      {/* Orbital Rings */}
      <OrbitalRings />
      <p className="text-sm text-gray-500 text-center mb-16 mt-2">
        Hover each layer to see how the operating environment expands.
      </p>

      {/* Product Screenshots */}
      <div className="mb-20">
        <div className="flex flex-col items-center text-center mb-10">
          <p className="text-sm tracking-widest text-brand-orange uppercase mb-4">
            WHAT IT LOOKS LIKE IN PRACTICE
          </p>
          <h3 className="font-display text-3xl md:text-4xl font-bold">
            Real Intelligence. Real Execution.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              label: '[ Telegram · Voice Command Interface ]',
              caption: 'Send instructions, query your pipeline, update client records — all through the AIOS interface on your phone.',
              path: '/screenshots/telegram.png',
            },
            {
              label: '[ GoHighLevel · Funnels Dashboard ]',
              caption: 'Four complete funnel types installed, branded, and live inside your GHL sub-account.',
              path: '/screenshots/ghl.png',
            },
            {
              label: '[ AIOS · Morning CEO Brief ]',
              caption: 'Your daily operating brief arrives before your workday starts. No dashboard required.',
              path: '/screenshots/brief.png',
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-[#111114] border border-[#1E1E24] rounded-xl p-4"
            >
              <div className="aspect-video bg-[#0A0A0B] rounded-lg flex items-center justify-center mb-3">
                <span className="text-xs text-[#52525B] font-mono text-center px-4">
                  {card.label}
                </span>
              </div>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                {card.caption}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xs text-[#52525B] text-center mt-6">
          Screenshots shown after installation. Replace placeholder images with actual product screenshots using the image paths /screenshots/telegram.png, /screenshots/ghl.png, /screenshots/brief.png
        </p>
      </div>

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
                  <div className="text-[#A1A1AA] text-base leading-relaxed mb-6 space-y-3">
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
                        // Live example — Telegram · AIOS Interface
                      </p>
                      <div className="max-h-72 overflow-hidden relative">
                        <TerminalChat />
                        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#111114] to-transparent pointer-events-none md:hidden" />
                      </div>
                      <p className="text-sm text-[#A1A1AA] mt-3 italic">
                        AIOS connects to your operating environment and gives you a conversational interface into it — instead of a dashboard to navigate.
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
        The system installs the machine. AIOS makes it intelligent. ClientBloom protects the client layer. CE.OS sharpens the executive.
      </p>
    </section>
  )
}

export default FourLayerSystem
